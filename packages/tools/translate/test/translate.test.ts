import { html } from 'lit';
import { fixture, expect, nextFrame } from '@open-wc/testing';
import { Translate } from '../src/TranslateExports.js';
import { Nullify, AssignWrong, Reset } from './helper.js';
import { LanguageSet } from '../src/window.js';
import '../src/translate.js';

function wait(n: number) {
  return new Promise<void>(resolve => {
    setTimeout(resolve, n);
  });
}

describe('Translate - webcomponent', () => {
  it('should get translated text back', async () => {
    window.izTranslation.load({
      id: 'en',
      name: 'english',
      translations: {
        'Hello World': 'Hello Test',
      },
    });
    const el = await fixture<Translate>(
      html`<iz-translate>Hello World</iz-translate>`
    );

    expect(el.innerText).to.be.equal('Hello Test');
  });

  it('should get back the provided text when not found', async () => {
    window.izTranslation.load({
      id: 'en',
      name: 'english',
      translations: {
        'Hello World': 'Hello Test',
      },
    });
    const el = await fixture<Translate>(
      html`<iz-translate>Hello Other World</iz-translate>`
    );

    expect(el.innerText).to.be.equal('Hello Other World');
  });

  it('should not crash if translations not there', async () => {
    Nullify();
    const el = await fixture<Translate>(
      html`<iz-translate>Hello World</iz-translate>`
    );

    expect(el.innerText).to.be.equal('Hello World');
    Reset();
  });

  it('should update translations', async () => {
    window.izTranslation.load({
      id: 'en',
      name: 'english',
      translations: {
        'Hello World': 'Hello Test',
      },
    });
    const el = await fixture<Translate>(
      html`<iz-translate>Hello World</iz-translate>`
    );
    window.izTranslation.load({
      id: 'en',
      name: 'english',
      translations: {
        'Hello World': 'Hello Test LALA',
      },
    });

    expect(el.innerText).to.be.equal('Hello Test LALA');
  });

  it('should not be possible to assign false data as translations object', async () => {
    expect(AssignWrong()).to.be.false;
  });

  it('should be possible to change the key', async () => {
    window.izTranslation.load({
      id: 'en',
      name: 'english',
      translations: {
        First: 'Translated First',
        Second: 'Translated Second',
      },
    });
    const el = await fixture<Translate>(
      html`<iz-translate>First</iz-translate>`
    );
    expect(el.innerText).to.be.equal('Translated First');

    el.updateKey('Second');
    expect(el.innerText).to.be.equal('Translated Second');
  });

  it('should be possible to change the key (via innerHTML)', async () => {
    window.izTranslation.load({
      id: 'en',
      name: 'english',
      translations: {
        First: 'Translated First',
        Second: 'Translated Second',
      },
    });
    const el = await fixture<Translate>(
      html`<iz-translate>First</iz-translate>`
    );
    expect(el.innerText).to.be.equal('Translated First');

    el.innerHTML = 'Second';
    await nextFrame();
    expect(el.innerText).to.be.equal('Translated Second');
  });

  it('should be possible to change the key (via innerText)', async () => {
    window.izTranslation.load({
      id: 'en',
      name: 'english',
      translations: {
        First: 'Translated First',
        Second: 'Translated Second',
      },
    });
    const el = await fixture<Translate>(
      html`<iz-translate>First</iz-translate>`
    );
    expect(el.innerText).to.be.equal('Translated First');

    el.innerText = 'Second';
    await nextFrame();
    el.innerText = 'Second'; // this does not trigger the update of Key!
    await wait(10);
    expect(el.innerText).to.be.equal('Translated Second');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<Translate>(html`<iz-translate></iz-translate>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});

describe('Translate - Variables', () => {
  it('should translate with variable', async () => {
    window.izTranslation.load({
      id: 'en',
      name: 'english',
      translations: {
        Text: 'Hello {name}',
      },
    });
    const el = await fixture<Translate>(
      html`<iz-translate name="oskar">Text</iz-translate>`
    );
    expect(el.innerText).to.be.equal('Hello oskar');
  });

  it('should translate with variable + update key', async () => {
    window.izTranslation.load({
      id: 'en',
      name: 'english',
      translations: {
        Text: 'Hello {name}',
        Second: 'Im {age} years old',
      },
    });
    const el = await fixture<Translate>(
      html`<iz-translate name="oskar">Text</iz-translate>`
    );
    expect(el.innerText).to.be.equal('Hello oskar');
    el.setAttribute('age', '27');
    el.updateKey('Second');
    expect(el.innerText).to.be.equal('Im 27 years old');
  });
});

describe('Translate - multilanguage', () => {
  it('should loadAll languages', async () => {
    const array: LanguageSet[] = [
      {
        id: 'en',
        name: 'english',
        translations: {},
      },
      {
        id: 'sv',
        name: 'swedish',
        translations: {
          'Hello World': 'Hej Världen',
        },
      },
    ];
    window.izTranslation.loadAll(array);
    window.izTranslation.change('en');

    const el = await fixture<Translate>(
      html`<iz-translate>Hello World</iz-translate>`
    );
    expect(el.innerText).to.be.equal('Hello World');

    window.izTranslation.change('sv');
    await nextFrame();
    expect(el.innerText).to.be.equal('Hej Världen');
  });
});
