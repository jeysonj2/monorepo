import { html, LitElement } from 'lit';
import { property, query, state } from 'lit/decorators.js';

// web-components
import '@interzero/typography/wc';
// tools
import '@interzero-tools/translate/wc';
// atoms
import '@interzero-pmp/flow-option-popup/wc';
import '@interzero-pmp/flow-roadmap/wc';
import '@interzero-pmp/flow-end/wc';
// molecules
import '@interzero-pmp/flow-view/wc';

// types & classes
import { Button } from '@interzero/button';
import { FlowOptionPopup } from '@interzero-pmp/flow-option-popup';
import { FlowRoadmap } from '@interzero-pmp/flow-roadmap';
import type {
  Data as QuestionData,
  Variant,
  ChangeEvent,
  OptionEvent,
} from '@interzero-pmp/flow-view';
import type {
  Data as PopupData,
  RemoveEventType,
  SubmitEventType,
} from '@interzero-pmp/flow-option-popup';
import type { Answer } from '@interzero-pmp/flow-roadmap';

// style import
import { style } from './style.css.js';

// types & interfaces
export type { Variant } from '@interzero-pmp/flow-view';
export type Data = Omit<QuestionData, 'options'> &
  Omit<PopupData, 'id'> & {
    id: string;
    options: string[];
  };
export type CompleteType = 'done' | 'save';
export type DoneData = {
  type: 'done';
  data: Answer[];
};
export type SaveData = {
  type: 'save';
  data: Data[];
};
export type CompleteEvent = SaveData | DoneData;

export class FlowContent extends LitElement {
  static styles = style;

  // eslint-disable-next-line no-use-before-define
  static instance: FlowContent;

  @property({
    type: Array,
    hasChanged: (value, oldValue) => {
      FlowContent.instance?.init();
      return value === oldValue;
    },
  })
  data: Data[] = [];

  @property({
    type: Object,
    hasChanged: (value, oldValue) => {
      FlowContent.instance?.init();
      return value === oldValue;
    },
  })
  root!: Data;

  @property() variant: Variant = 'default';

  @state() answers: Answer[] = [];

  @state() questions: QuestionData[] = [];

  @state() popupData?: PopupData | null;

  @state() price: number = 1;

  @query('iz-pmp-flow-option-popup') popupElement!: FlowOptionPopup;

  @query('#price') priceButton!: Button;

  @query('iz-pmp-flow-roadmap') roadmapElement!: FlowRoadmap;

  private idMap: Map<string, number> = new Map();

  private internalDataChange = false;

  private scrollTimer = -1;

  constructor() {
    super();
    // need to put static instance in order to call init when root is changing
    if (FlowContent.instance === undefined) FlowContent.instance = this;
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.addEventListener('scroll', this.handleScroll);
  }

  disconnectedCallback(): void {
    // stupid prettier rule as this would mean the element is gone.. (unless its window or outer events!)
    this.removeEventListener('scroll', this.handleScroll);
  }

  // events
  private handleQuestionChange(event: CustomEvent<ChangeEvent>) {
    const dataindex = this.idMap.get(event.detail.id);
    if (dataindex !== undefined) {
      this.data[dataindex][event.detail.name] = event.detail.value;

      const questionIndex = this.questions.findIndex(
        q => q.id === event.detail.id
      );
      if (questionIndex !== -1) {
        const question = JSON.parse(
          JSON.stringify(this.questions[questionIndex])
        ) as QuestionData;
        if (question) {
          question[event.detail.name] = event.detail.value;
          this.questions[questionIndex] = JSON.parse(
            JSON.stringify(question)
          ) as QuestionData;

          if (event.detail.name === 'question') {
            const answerIndex = this.answers.findIndex(
              answer => answer.questionId === event.detail.id
            );
            if (answerIndex !== -1) {
              this.answers[answerIndex].question = event.detail.value;
              this.answers = JSON.parse(JSON.stringify(this.answers));
            }
          }
        }
      }
    }
  }

  private handleOptionClick(event: CustomEvent<OptionEvent>) {
    switch (event.detail.variant) {
      case 'edit': {
        const dataIndex = this.idMap.get(event.detail.optionId);
        if (dataIndex !== undefined) {
          this.popupData = null;
          setTimeout(() => {
            this.popupData = this.data[dataIndex];
            this.popupElement.show();
          }, 1);
        }
        break;
      }
      case 'add': {
        this.popupData = {
          priceAffection: Number.MIN_SAFE_INTEGER,
          priceAffectionType: 'addition',
          value: 'JAG GILLAR POTATISAR I LASS åååååååkenilsson',
        };
        setTimeout(() => {
          this.popupData = {
            parent: event.detail.id,
          };
          this.popupElement.show();
        }, 1);
        break;
      }
      case 'save': {
        this.dispatchEvent(
          new CustomEvent<CompleteEvent>('complete', {
            detail: {
              type: 'save',
              data: this.data,
            },
          })
        );
        break;
      }
      default: {
        const questionIndex = this.questions.findIndex(
          q => q.id === event.detail.id
        );
        if (questionIndex !== -1) {
          let option = null;
          const question = JSON.parse(
            JSON.stringify(this.questions[questionIndex])
          ) as QuestionData;
          if (question) {
            option = question.options.find(o => o.id === event.detail.optionId);
            if (option) {
              if (option.checked) option.checked = false;
              else {
                question.options.forEach(o => {
                  // eslint-disable-next-line no-param-reassign
                  o.checked = false;
                });
                option.checked = true;
              }
            }
          }

          const questioncopy = this.questions.slice(0, questionIndex + 1);
          const answercopy = this.answers.slice(0, questionIndex);

          questioncopy[questionIndex] = question;

          if (option && option.checked) {
            const nextQuestionIndex = this.idMap.get(option.id);
            if (nextQuestionIndex !== undefined) {
              const nextQuestion = this.data[nextQuestionIndex];
              questioncopy.push(this.convertDataToQuestionData(nextQuestion));
            }

            answercopy.push({
              option: option.value,
              optionid: option.id,
              question: question.question,
              questionId: question.id,
            });
          }
          // scroll to bottom
          setTimeout(
            () => this.scrollTo({ top: this.scrollHeight, behavior: 'smooth' }),
            1
          );

          this.questions = questioncopy;
          this.answers = answercopy;
          this.calculatePrice();
        }
        break;
      }
    }

    // this.requestUpdate();
  }

  private handleAnswerSelect(event: CustomEvent<Answer>) {
    const answerIndex = this.answers.findIndex(
      answer => answer.questionId === event.detail.questionId
    );
    if (answerIndex !== -1) {
      this.scrollTo({
        top: this.clientHeight * answerIndex,
        behavior: 'smooth',
      });
    }
  }

  private handlePopupSubmit(event: CustomEvent<SubmitEventType>) {
    // EDIT
    if (event.detail.id !== undefined) {
      const dataindex = this.idMap.get(event.detail.id);
      if (dataindex !== undefined) {
        // update data
        this.data[dataindex].priceAffection = Number(
          event.detail.priceAffection
        );
        this.data[dataindex].priceAffectionType =
          event.detail.priceAffectionType;
        this.data[dataindex].value = event.detail.value;

        // update question by parent
        if (event.detail.parent !== undefined) {
          const questionindex = this.questions.findIndex(
            q => q.id === event.detail.parent
          );
          if (questionindex !== -1) {
            const optionindex = this.questions[questionindex].options.findIndex(
              o => o.id === event.detail.id
            );
            if (optionindex !== -1) {
              // NOTE maybe need to deep clone it
              this.questions[questionindex].options[optionindex].value =
                event.detail.value;
            }
          }
        }

        // update answer
        const answerindex = this.answers.findIndex(
          a => a.optionid === event.detail.id
        );
        if (answerindex !== -1) {
          this.answers[answerindex].option = event.detail.value;
          this.calculatePrice();
        }
      }
    } else {
      // ADD
      let id = '0';

      if (event.detail.parent) {
        const dataparentindex = this.idMap.get(event.detail.parent);
        if (dataparentindex !== undefined) {
          id = `${event.detail.parent}.${this.data[dataparentindex].options.length}`;
          this.data[dataparentindex].options.push(id);
        }
      }

      const questionparentindex = event.detail.parent
        ? this.questions.findIndex(q => q.id === event.detail.parent)
        : 0;
      if (questionparentindex !== -1) {
        this.questions[questionparentindex].options.push({
          checked: false,
          id,
          value: event.detail.value,
        });
      }

      this.data.push({
        description: 'empty description',
        question: 'empty question',
        id,
        options: [],
        priceAffection: Number(event.detail.priceAffection),
        priceAffectionType: event.detail.priceAffectionType,
        parent: event.detail.parent,
        value: event.detail.value,
      });
    }

    this.internalDataChange = true;
    this.data = JSON.parse(JSON.stringify(this.data));
    this.questions = JSON.parse(JSON.stringify(this.questions));
    this.answers = JSON.parse(JSON.stringify(this.answers));
    this.idMap = FlowContent.GetDataIndexMap(this.data);
    this.popupElement.hide();
  }

  private handlePopupRemove(event: CustomEvent<RemoveEventType>) {
    // get all that should be scheduled for delete (cascading)
    const scheduledDeletesSet: Set<string> = new Set();
    this.getCascadeDeletes(event.detail.id, scheduledDeletesSet);

    this.internalDataChange = true; // important flag to not trigger init

    // filter based on cascade list
    const datacopy = this.data.filter(d => !scheduledDeletesSet.has(d.id));
    const questioncopy = this.questions.filter(
      q => !scheduledDeletesSet.has(q.id)
    );
    const answercopy = this.answers.filter(
      a => !scheduledDeletesSet.has(a.optionid)
    );

    // get new idmap
    const idmap = FlowContent.GetDataIndexMap(datacopy);

    // remove the option from its parent
    if (event.detail.parent !== undefined) {
      // for data first
      const parentnodeindex = idmap.get(event.detail.parent);
      if (parentnodeindex !== undefined) {
        datacopy[parentnodeindex].options = datacopy[
          parentnodeindex
        ].options.filter(o => o !== event.detail.id);
      }

      // then for questions
      const questionindex = questioncopy.findIndex(
        q => q.id === event.detail.parent
      );
      if (questionindex !== -1) {
        questioncopy[questionindex].options = questioncopy[
          questionindex
        ].options.filter(o => o.id !== event.detail.id);
      }
    }

    this.data = JSON.parse(JSON.stringify(datacopy));
    this.questions = JSON.parse(JSON.stringify(questioncopy));
    this.answers = JSON.parse(JSON.stringify(answercopy));
    this.idMap = idmap;
    this.calculatePrice();
    this.popupElement.hide();
  }

  private handleScroll = () => {
    // we need to suspend the scroll to detect scroll-end (as scrollend is experimental)
    window.clearTimeout(this.scrollTimer);
    this.priceButton.classList.remove('end');
    this.roadmapElement.classList.remove('end');

    this.scrollTimer = setTimeout(() => {
      const questionIndex = Math.floor(this.scrollTop / this.clientHeight);

      if (questionIndex < this.questions.length) {
        const question = this.questions[questionIndex];

        if (this.variant === 'default' && question.options.length === 0) {
          this.priceButton.classList.add('end');
          this.roadmapElement.classList.add('end');
        }
      }
    }, 100) as unknown as number;
  };

  private handleDone() {
    this.dispatchEvent(
      new CustomEvent<CompleteEvent>('complete', {
        detail: {
          type: 'done',
          data: this.answers,
        },
      })
    );
  }

  // private functions
  private getCascadeDeletes(id: string, scheduledDataDeletes: Set<string>) {
    const index = this.idMap.get(id);
    if (index !== undefined) {
      scheduledDataDeletes.add(id);
      this.data[index].options.forEach(option =>
        this.getCascadeDeletes(option, scheduledDataDeletes)
      );
    }
  }

  private static GetDataIndexMap(data: Data[]) {
    const map = new Map();
    for (let i = 0; i < data.length; i += 1) {
      const d = data[i];
      map.set(d.id, i);
    }

    return map;
  }

  private init() {
    if (this.root && this.data.length > 0 && !this.internalDataChange) {
      this.idMap = FlowContent.GetDataIndexMap(this.data);
      this.questions = [this.convertDataToQuestionData(this.root)];
    }

    this.internalDataChange = false;
  }

  private convertDataToQuestionData(data: Data): QuestionData {
    const qdata: QuestionData = {
      question: data.question,
      description: data.description,
      id: data.id,
      options: [],
    };

    for (const option of data.options) {
      const index = this.idMap.get(option);
      if (index !== undefined) {
        const refdata = this.data[index];
        qdata.options.push({
          checked: false,
          id: option,
          value: refdata.value as string,
        });
      } else
        throw new Error('could not find the references data inside the idMap');
    }

    if (data.options.length === 0 && this.variant !== 'edit') {
      qdata.id = 'final-screen';
    }

    return qdata;
  }

  private calculatePrice() {
    let price = 1;
    for (const answer of this.answers) {
      const index = this.idMap.get(answer.optionid);

      // const node = this.data.find(node => node.id === answer.questionId);
      if (index !== undefined) {
        const node = this.data[index];
        switch (node.priceAffectionType) {
          case 'multiplication':
            price *= node.priceAffection as number;
            break;
          default:
            price += node.priceAffection as number;
            break;
        }
      }
    }

    this.price = price;
  }

  render() {
    return html`
      <iz-pmp-flow-option-popup
        @submit=${this.handlePopupSubmit}
        @remove=${this.handlePopupRemove}
        .data=${this.popupData}
      ></iz-pmp-flow-option-popup>
      <iz-pmp-flow-roadmap
        @select=${this.handleAnswerSelect}
        .answers=${this.answers}
      ></iz-pmp-flow-roadmap>

      <iz-button variant="text" size="small" id="price">
        <iz-translate price=${Math.floor(this.price * 100) / 100}>Current Price: {price} €</iz-translate>
      </iz-button>

      ${this.questions.map(question => {
        if (this.variant !== 'edit' && question.options.length === 0) {
          return html`
            <iz-pmp-flow-end @done=${this.handleDone}></iz-pmp-flow-end>
          `;
        }

        return html`
          <iz-pmp-flow-view
            @question-change=${this.handleQuestionChange}
            @option-click=${this.handleOptionClick}
            .data=${question}
            .variant=${this.variant}
          ></iz-pmp-flow-view>
        `;
      })}
    `;
  }
}
