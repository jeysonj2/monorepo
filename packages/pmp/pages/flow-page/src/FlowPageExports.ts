import { html, LitElement } from 'lit';
import { state, query } from 'lit/decorators.js';

// web-component
import '@interzero-pmp/flow-question/wc';
import '@interzero/button/wc';
import '@interzero/typography/wc';

// classes
import type { ContinueEvent } from '@interzero-pmp/flow-question';

// locale
import { style } from './style.css.js';

// types & interfaces
interface Node {
  question: string;
  option: string;
  price?: number;
  options: Node[];
}
type Answer = { group: string; value: string };

const TREEDATA: Node = {
  question: 'Select a brand',
  option: '',
  options: [
    {
      question: 'type of service',
      option: 'Bauhaus',
      options: [
        {
          question: 'material type',
          option: 'elektr. Nachweiswesen',
          options: [
            {
              question: 'collection system',
              option: 'Feuerlöscher',
              options: [
                {
                  question: 'cycle',
                  option: 'Gitterbox 800 Liter',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Knettenbrech + Gurdulic Rhein Neckar GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Verbindungskanal Linkes Ufer 43-45',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Mannheim',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Stück',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'Y',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'N',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'N',
                                                  options: [
                                                    {
                                                      price: 26.5,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          question: 'material type',
          option: 'Energiekostenumlage',
          options: [
            {
              question: 'collection system',
              option: 'Dämmmaterial',
              options: [
                {
                  question: 'cycle',
                  option: 'ohne',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Interzero Circular Solutions Germany GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Stollwerckstr. 9 a',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Köln',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Stück',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'Y',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'N',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'N',
                                                  options: [
                                                    {
                                                      price: 5,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              question: 'collection system',
              option: 'Elektronikschrott gemischt',
              options: [
                {
                  question: 'cycle',
                  option: 'Gitterbox 800 Liter',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Interzero Deposit Solutions GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Stollwerckstr. 9 a',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Köln',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Stück',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'Y',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'N',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'Y',
                                                  options: [
                                                    {
                                                      price: 4,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              question: 'collection system',
              option: 'Mischholz',
              options: [
                {
                  question: 'cycle',
                  option: 'Abrollkipper-Mulde 40 cbm',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Knettenbrech + Gurdulic Rhein Neckar GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Hansastr. 31',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Karlsruhe',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Stück',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'Y',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'N',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'Y',
                                                  options: [
                                                    {
                                                      price: 3,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          question: 'material type',
          option: 'Erstgestellung Gitterbox',
          options: [
            {
              question: 'collection system',
              option: 'Elektronikschrott gemischt',
              options: [
                {
                  question: 'cycle',
                  option: 'Gitterbox 1,5 cbm',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Interzero Deposit Solutions GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Stollwerckstr. 9 a',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Köln',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Stück',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'Y',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'N',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'Y',
                                                  options: [
                                                    {
                                                      price: 31.5,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          question: 'material type',
          option: 'Handling',
          options: [
            {
              question: 'collection system',
              option: 'Kühl-/Gefriergeräte Stück',
              options: [
                {
                  question: 'cycle',
                  option: 'Euro-Pool Tauschpalette',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Interzero Circular Solutions Germany GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Stollwerckstr. 9 a',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Köln',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Stück',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'Y',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'N',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'Y',
                                                  options: [
                                                    {
                                                      price: 30,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          question: 'material type',
          option: 'Kauf',
          options: [
            {
              question: 'collection system',
              option: 'Big Bag für Sackware - Kauf 10 Stk.',
              options: [
                {
                  question: 'cycle',
                  option: 'ohne',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Interzero Deposit Solutions GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Stollwerckstr. 9 a',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Köln',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Stück',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'Y',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'N',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'Y',
                                                  options: [
                                                    {
                                                      price: 7.5,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          question: 'material type',
          option: 'Leerfahrt',
          options: [
            {
              question: 'collection system',
              option: 'Dämmmaterial',
              options: [
                {
                  question: 'cycle',
                  option: 'Abrollkipper-Mulde 20 cbm',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Interzero Circular Solutions Germany GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Stollwerckstr. 9 a',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Köln',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Stück',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'Y',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'N',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'N',
                                                  options: [
                                                    {
                                                      price: 10,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              question: 'collection system',
              option: 'Leuchtstoffröhren',
              options: [
                {
                  question: 'cycle',
                  option: 'LSR-Karton',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Interzero Deposit Solutions GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Stollwerckstr. 9 a',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Köln',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Stück',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'Y',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'N',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'Y',
                                                  options: [
                                                    {
                                                      price: 31.9,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          question: 'material type',
          option: 'Leerung',
          options: [
            {
              question: 'collection system',
              option: 'PE-Folie',
              options: [
                {
                  question: 'cycle',
                  option: 'Abrollkipper-Preßcontainer 20 cbm',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Interzero Circular Solutions Germany GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Stollwerckstr. 9 a',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Köln',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Stück',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'N',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'Y',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'N',
                                                  options: [
                                                    {
                                                      price: 15,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              question: 'collection system',
              option: 'PPK 1.01 uns. gem. Altpapier',
              options: [
                {
                  question: 'cycle',
                  option: 'Abrollkipper-Preßcontainer 20 cbm',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Interzero Circular Solutions Germany GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Stollwerckstr. 9 a',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Köln',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Tonne',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'N',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'Y',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'N',
                                                  options: [
                                                    {
                                                      price: 180,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          question: 'material type',
          option: 'Miete',
          options: [
            {
              question: 'collection system',
              option: 'Dämmmaterial',
              options: [
                {
                  question: 'cycle',
                  option: 'Abrollkipper-Mulde 20 cbm',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Interzero Circular Solutions Germany GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Stollwerckstr. 9 a',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Köln',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Stück',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'Y',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'N',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'Y',
                                                  options: [
                                                    {
                                                      price: 15,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              question: 'collection system',
              option: 'Elektronikschrott gemischt',
              options: [
                {
                  question: 'cycle',
                  option: 'Gitterbox 800 Liter',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Interzero Deposit Solutions GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Stollwerckstr. 9 a',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Köln',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Stück',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'Y',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'N',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'Y',
                                                  options: [
                                                    {
                                                      price: 0,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              question: 'collection system',
              option: 'Energiesparlampen / LEDs',
              options: [
                {
                  question: 'cycle',
                  option: 'Spannringdeckelfass 120 Liter',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Interzero Deposit Solutions GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Stollwerckstr. 9 a',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Köln',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Stück',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'Y',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'N',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'Y',
                                                  options: [
                                                    {
                                                      price: 0,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              question: 'collection system',
              option: 'Mischholz',
              options: [
                {
                  question: 'cycle',
                  option: 'Abrollkipper-Mulde 40 cbm',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Knettenbrech + Gurdulic Rhein Neckar GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Verbindungskanal Linkes Ufer 43-45',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Mannheim',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Stück',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'Y',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'N',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'Y',
                                                  options: [
                                                    {
                                                      price: 0,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              question: 'collection system',
              option: 'Aktenvernichtung',
              options: [
                {
                  question: 'cycle',
                  option: 'Daten-Sicherheitsbehälter 240 cbm',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'Y',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'documentus GmbH Stuttgart',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Eisentalstraße 6',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Waiblingen',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Stück',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'Y',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'N',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'Y',
                                                  options: [
                                                    {
                                                      price: 12,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              question: 'collection system',
              option: 'LDPE-Folie 90/10',
              options: [
                {
                  question: 'cycle',
                  option: 'Ballenpresse',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Interzero Circular Solutions Germany GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Stollwerckstr. 9 a',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Köln',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Stück',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'Y',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'N',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'Y',
                                                  options: [
                                                    {
                                                      price: 0,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          question: 'material type',
          option: 'Rückvergütung',
          options: [
            {
              question: 'collection system',
              option: 'LDPE-Folie Bunt',
              options: [
                {
                  question: 'cycle',
                  option: 'ohne',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Interzero Circular Solutions Germany GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Stollwerckstr. 9 a',
                              options: [
                                {
                                  question: 'purchase price index',
                                  option: 'Köln',
                                  options: [
                                    {
                                      question: 'uom',
                                      option: 'o. Euwid',
                                      options: [
                                        {
                                          question: 'flat rate',
                                          option: 'Kilogramm',
                                          options: [
                                            {
                                              question: 'weighing',
                                              option: 'N',
                                              options: [
                                                {
                                                  question: 'MessEG konform?',
                                                  option: 'N',
                                                  options: [
                                                    {
                                                      question:
                                                        'Purchase price/uom',
                                                      option: 'N',
                                                      options: [
                                                        {
                                                          price: 0,
                                                          option: '',
                                                          question: '',
                                                          options: [],
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              question: 'collection system',
              option: 'PE-Folie',
              options: [
                {
                  question: 'cycle',
                  option: 'ohne',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Interzero Circular Solutions Germany GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Stollwerckstr. 9 a',
                              options: [
                                {
                                  question: 'purchase price index',
                                  option: 'Köln',
                                  options: [
                                    {
                                      question: 'uom',
                                      option: 'o. Euwid',
                                      options: [
                                        {
                                          question: 'flat rate',
                                          option: 'Kilogramm',
                                          options: [
                                            {
                                              question: 'weighing',
                                              option: 'N',
                                              options: [
                                                {
                                                  question: 'MessEG konform?',
                                                  option: 'J',
                                                  options: [
                                                    {
                                                      question:
                                                        'Purchase price/uom',
                                                      option: 'N',
                                                      options: [
                                                        {
                                                          price: 0,
                                                          option: '',
                                                          question: '',
                                                          options: [],
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              question: 'collection system',
              option: 'PPK',
              options: [
                {
                  question: 'cycle',
                  option: 'ohne',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Interzero Circular Solutions Germany GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Stollwerckstr. 9 a',
                              options: [
                                {
                                  question: 'purchase price index',
                                  option: 'Köln',
                                  options: [
                                    {
                                      question: 'uom',
                                      option: 'o. Euwid 1.04',
                                      options: [
                                        {
                                          question: 'flat rate',
                                          option: 'Kilogramm',
                                          options: [
                                            {
                                              question: 'weighing',
                                              option: 'N',
                                              options: [
                                                {
                                                  question: 'MessEG konform?',
                                                  option: 'N',
                                                  options: [
                                                    {
                                                      question:
                                                        'Purchase price/uom',
                                                      option: 'N',
                                                      options: [
                                                        {
                                                          price: 0,
                                                          option: '',
                                                          question: '',
                                                          options: [],
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              question: 'collection system',
              option: 'PPK 1.01 uns. gem. Altpapier',
              options: [
                {
                  question: 'cycle',
                  option: 'ohne',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Interzero Circular Solutions Germany GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Stollwerckstr. 9 a',
                              options: [
                                {
                                  question: 'purchase price index',
                                  option: 'Köln',
                                  options: [
                                    {
                                      question: 'uom',
                                      option: 'o. Euwid 1.02',
                                      options: [
                                        {
                                          question: 'flat rate',
                                          option: 'Kilogramm',
                                          options: [
                                            {
                                              question: 'weighing',
                                              option: 'N',
                                              options: [
                                                {
                                                  question: 'MessEG konform?',
                                                  option: 'Y',
                                                  options: [
                                                    {
                                                      question:
                                                        'Purchase price/uom',
                                                      option: 'N',
                                                      options: [
                                                        {
                                                          price: 0,
                                                          option: '',
                                                          question: '',
                                                          options: [],
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              question: 'collection system',
              option: 'Mischholz',
              options: [
                {
                  question: 'cycle',
                  option: 'ohne',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Knettenbrech + Gurdulic Rhein Neckar GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Hansastr. 31',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Karlsruhe',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Kilogramm',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'N',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'Y',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'N',
                                                  options: [
                                                    {
                                                      price: 10,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              question: 'collection system',
              option: 'Altreifen mit Felgen',
              options: [
                {
                  question: 'cycle',
                  option: 'lose',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Knettenbrech + Gurdulic Rhein Neckar GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Verbindungskanal Linkes Ufer 43-45',
                              options: [
                                {
                                  question: 'purchase price index',
                                  option: 'Mannheim',
                                  options: [
                                    {
                                      question: 'uom',
                                      option: 'o. Euwid',
                                      options: [
                                        {
                                          question: 'flat rate',
                                          option: 'Kilogramm',
                                          options: [
                                            {
                                              question: 'weighing',
                                              option: 'Y',
                                              options: [
                                                {
                                                  question: 'MessEG konform?',
                                                  option: 'N',
                                                  options: [
                                                    {
                                                      question:
                                                        'Purchase price/uom',
                                                      option: 'N',
                                                      options: [
                                                        {
                                                          price: 1.5,
                                                          option: '',
                                                          question: '',
                                                          options: [],
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              question: 'collection system',
              option: 'Bänder Kunststoff cbm',
              options: [
                {
                  question: 'cycle',
                  option: 'lose',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Knettenbrech + Gurdulic Rhein Neckar GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Verbindungskanal Linkes Ufer 43-45',
                              options: [
                                {
                                  question: 'purchase price index',
                                  option: 'Mannheim',
                                  options: [
                                    {
                                      question: 'uom',
                                      option: 'o. Euwid',
                                      options: [
                                        {
                                          question: 'flat rate',
                                          option: 'Kilogramm',
                                          options: [
                                            {
                                              question: 'weighing',
                                              option: 'N',
                                              options: [
                                                {
                                                  question: 'MessEG konform?',
                                                  option: 'N',
                                                  options: [
                                                    {
                                                      question:
                                                        'Purchase price/uom',
                                                      option: 'N',
                                                      options: [
                                                        {
                                                          price: 1.5,
                                                          option: '',
                                                          question: '',
                                                          options: [],
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          question: 'material type',
          option: 'Sortierkosten',
          options: [
            {
              question: 'collection system',
              option: 'Elektronikschrott gemischt',
              options: [
                {
                  question: 'cycle',
                  option: 'ohne',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Knettenbrech + Gurdulic Rhein Neckar GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Verbindungskanal Linkes Ufer 43-45',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Mannheim',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Stück',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'Y',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'N',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'N',
                                                  options: [
                                                    {
                                                      price: 15,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          question: 'material type',
          option: 'Transport Stück',
          options: [
            {
              question: 'collection system',
              option: 'Kühl-/Gefriergeräte Stück',
              options: [
                {
                  question: 'cycle',
                  option: 'Euro-Pool Tauschpalette',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Interzero Circular Solutions Germany GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Stollwerckstr. 9 a',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Köln',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Stück',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'Y',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'N',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'Y',
                                                  options: [
                                                    {
                                                      price: 31,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              question: 'collection system',
              option: 'Elektronikschrott gemischt',
              options: [
                {
                  question: 'cycle',
                  option: 'Gitterbox 800 Liter',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Interzero Deposit Solutions GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Stollwerckstr. 9 a',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Köln',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Stück',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'Y',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'N',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'Y',
                                                  options: [
                                                    {
                                                      price: 100,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              question: 'collection system',
              option: 'Mischholz',
              options: [
                {
                  question: 'cycle',
                  option: 'Abrollkipper-Mulde 40 cbm',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Knettenbrech + Gurdulic Rhein Neckar GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Hansastr. 31',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Karlsruhe',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Stück',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'Y',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'N',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'Y',
                                                  options: [
                                                    {
                                                      price: 85,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          question: 'material type',
          option: 'Verwertung',
          options: [
            {
              question: 'collection system',
              option: 'Kühl-/Gefriergeräte Stück',
              options: [
                {
                  question: 'cycle',
                  option: 'Euro-Pool Tauschpalette',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Interzero Circular Solutions Germany GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Stollwerckstr. 9 a',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Köln',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Stück',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'Y',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'N',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'N',
                                                  options: [
                                                    {
                                                      price: 50,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              question: 'collection system',
              option: 'Elektronikschrott gemischt',
              options: [
                {
                  question: 'cycle',
                  option: 'Gitterbox 1,5 cbm',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Interzero Deposit Solutions GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Stollwerckstr. 9 a',
                              options: [
                                {
                                  question: 'purchase price index',
                                  option: 'Köln',
                                  options: [
                                    {
                                      question: 'uom',
                                      option: 'LME Alu 50 %',
                                      options: [
                                        {
                                          question: 'flat rate',
                                          option: 'Kilogramm',
                                          options: [
                                            {
                                              question: 'weighing',
                                              option: 'N',
                                              options: [
                                                {
                                                  question: 'MessEG konform?',
                                                  option: 'N',
                                                  options: [
                                                    {
                                                      question:
                                                        'Purchase price/uom',
                                                      option: 'Y',
                                                      options: [
                                                        {
                                                          price: 50,
                                                          option: '',
                                                          question: '',
                                                          options: [],
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              question: 'collection system',
              option: 'Energiesparlampen / LEDs',
              options: [
                {
                  question: 'cycle',
                  option: 'Spannringdeckelfass 120 Liter',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Interzero Deposit Solutions GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Stollwerckstr. 9 a',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Köln',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Stück',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'Y',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'N',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'Y',
                                                  options: [
                                                    {
                                                      price: 120,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              question: 'collection system',
              option: 'gemischte Siedlungsabfälle',
              options: [
                {
                  question: 'cycle',
                  option: 'Abrollkipper-Mulde 20 cbm',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'Knettenbrech + Gurdulic Rhein Neckar GmbH',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Verbindungskanal Linkes Ufer 43-45',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Mannheim',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Kilogramm',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'N',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'Y',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'N',
                                                  options: [
                                                    {
                                                      price: 7,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              question: 'collection system',
              option: 'Aktenvernichtung',
              options: [
                {
                  question: 'cycle',
                  option: 'Daten-Sicherheitsbehälter 240 cbm',
                  options: [
                    {
                      question: 'supplier name',
                      option: 'N',
                      options: [
                        {
                          question: 'supplier street',
                          option: 'documentus GmbH Stuttgart',
                          options: [
                            {
                              question: 'supplier city',
                              option: 'Eisentalstraße 6',
                              options: [
                                {
                                  question: 'uom',
                                  option: 'Waiblingen',
                                  options: [
                                    {
                                      question: 'flat rate',
                                      option: 'Kilogramm',
                                      options: [
                                        {
                                          question: 'weighing',
                                          option: 'N',
                                          options: [
                                            {
                                              question: 'MessEG konform?',
                                              option: 'Y',
                                              options: [
                                                {
                                                  question:
                                                    'Purchase price/uom',
                                                  option: 'Y',
                                                  options: [
                                                    {
                                                      price: 0.13,
                                                      option: '',
                                                      question: '',
                                                      options: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export class FlowPage extends LitElement {
  static styles = style;

  // efficiency is wow.. amazing! so good much bravo!
  @state() questions: Node[] = [TREEDATA]; // 10/10 approves!!

  @state() answers: Answer[] = [];

  @query('.container')
  private containerElement!: HTMLDivElement;

  static getOptions(node: Node): string[] {
    const array = node.options.map(n => {
      if (n.option !== '') {
        return n.option;
      }
      if (typeof n.price === 'number') {
        return `${n.price.toString()} €`;
      }

      return '';
    });

    return array;
  }

  private handleContinue(node: Node, index: number) {
    return (event: CustomEvent<ContinueEvent>) => {
      const array = FlowPage.getOptions(node);
      const targetindex = array.findIndex(val => val === event.detail.selected);

      if (targetindex !== -1) {
        let finalQuestion = [...this.questions];
        let finalAnswers = [...this.answers];

        if (index < this.questions.length) {
          finalQuestion = finalQuestion.slice(0, index + 1);
          finalAnswers = finalAnswers.slice(0, index);
        }

        finalQuestion.push(node.options[targetindex]);
        finalAnswers.push({
          group: node.question,
          value: event.detail.selected,
        });

        this.questions = finalQuestion;
        this.answers = finalAnswers;

        setTimeout(() => {
          this.containerElement.scrollTo({
            top: this.containerElement.scrollHeight,
            behavior: 'smooth',
          });
        }, 1);
      }
    };
  }

  private handleClick(index: number) {
    return () => {
      this.containerElement.scrollTo({
        top: this.containerElement.clientHeight * (index + 1),
        behavior: 'smooth',
      });
    };
  }

  render() {
    return html`
      <div class="roadmap">
        ${this.answers.map(
          (answer, index) => html`
            <span>
              <iz-button
                variant="text"
                size="small"
                @click=${this.handleClick(index)}
              >
                <div class="answer">
                  <iz-typography variant="help"
                    ><strong>${answer.group}:</strong>
                    ${answer.value}</iz-typography
                  >
                </div>
              </iz-button>
            </span>
          `
        )}
      </div>
      <div class="container">
        ${this.questions.map(
          (q, index) => html`
            <div class="question">
              <iz-pmp-flow-question
                @continue=${this.handleContinue(q, index)}
                .question=${q.question}
                .options=${FlowPage.getOptions(q)}
              ></iz-pmp-flow-question>
            </div>
          `
        )}
      </div>
    `;
  }
}
