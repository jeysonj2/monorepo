import '../dist/src/flow-content.js';

const FakeData = [
    {
        "question": "Select a brand",
        "description": "select a option",
        "id": "0",
        "options": [
            "0.0"
        ],
        "priceAffection": 46,
        "priceAffectionType": "addition",
        "value": ""
    },
    {
        "question": "type of service",
        "description": "select a option",
        "id": "0.0",
        "options": [
            "0.0.0",
            "0.0.1",
            "0.0.2",
            "0.0.3",
            "0.0.4",
            "0.0.5",
            "0.0.6",
            "0.0.7",
            "0.0.8",
            "0.0.9",
            "0.0.10",
            "0.0.11"
        ],
        "priceAffection": 1.1310925011405282,
        "priceAffectionType": "multiplication",
        "value": "Bauhaus",
        "parent": "0"
    },
    {
        "question": "material type",
        "description": "select a option",
        "id": "0.0.0",
        "options": [
            "0.0.0.0"
        ],
        "priceAffection": 86,
        "priceAffectionType": "addition",
        "value": "elektr. Nachweiswesen",
        "parent": "0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.0.0",
        "options": [
            "0.0.0.0.0"
        ],
        "priceAffection": 90,
        "priceAffectionType": "addition",
        "value": "Feuerlöscher",
        "parent": "0.0.0"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.0.0.0",
        "options": [
            "0.0.0.0.0.0"
        ],
        "priceAffection": 0.8135481607865309,
        "priceAffectionType": "multiplication",
        "value": "Gitterbox 800 Liter",
        "parent": "0.0.0.0"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.0.0.0.0",
        "options": [
            "0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.1731071254410106,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.0.0.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.0.0.0.0.0",
        "options": [
            "0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 65,
        "priceAffectionType": "addition",
        "value": "Knettenbrech + Gurdulic Rhein Neckar GmbH",
        "parent": "0.0.0.0.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.0.0.0.0.0.0",
        "options": [
            "0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.5681046887309131,
        "priceAffectionType": "multiplication",
        "value": "Verbindungskanal Linkes Ufer 43-45",
        "parent": "0.0.0.0.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.4555911511765023,
        "priceAffectionType": "multiplication",
        "value": "Mannheim",
        "parent": "0.0.0.0.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.8448150775477294,
        "priceAffectionType": "multiplication",
        "value": "Stück",
        "parent": "0.0.0.0.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.0.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.0.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.8968305960009013,
        "priceAffectionType": "multiplication",
        "value": "Y",
        "parent": "0.0.0.0.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.0.0.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.0.0.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 8,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.0.0.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.0.0.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 67,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.0.0.0.0.0.0.0.0.0.0"
    },
    {
        "question": "material type",
        "description": "select a option",
        "id": "0.0.1",
        "options": [
            "0.0.1.0",
            "0.0.1.1",
            "0.0.1.2"
        ],
        "priceAffection": 12,
        "priceAffectionType": "addition",
        "value": "Energiekostenumlage",
        "parent": "0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.1.0",
        "options": [
            "0.0.1.0.0"
        ],
        "priceAffection": 1.1887968293897715,
        "priceAffectionType": "multiplication",
        "value": "Dämmmaterial",
        "parent": "0.0.1"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.1.0.0",
        "options": [
            "0.0.1.0.0.0"
        ],
        "priceAffection": 1.3392804160867036,
        "priceAffectionType": "multiplication",
        "value": "ohne",
        "parent": "0.0.1.0"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.1.0.0.0",
        "options": [
            "0.0.1.0.0.0.0"
        ],
        "priceAffection": 0.730422114924751,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.1.0.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.1.0.0.0.0",
        "options": [
            "0.0.1.0.0.0.0.0"
        ],
        "priceAffection": 0.5130102897812363,
        "priceAffectionType": "multiplication",
        "value": "Interzero Circular Solutions Germany GmbH",
        "parent": "0.0.1.0.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.1.0.0.0.0.0",
        "options": [
            "0.0.1.0.0.0.0.0.0"
        ],
        "priceAffection": 82,
        "priceAffectionType": "addition",
        "value": "Stollwerckstr. 9 a",
        "parent": "0.0.1.0.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.1.0.0.0.0.0.0",
        "options": [
            "0.0.1.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.3267374626105155,
        "priceAffectionType": "multiplication",
        "value": "Köln",
        "parent": "0.0.1.0.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.1.0.0.0.0.0.0.0",
        "options": [
            "0.0.1.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 32,
        "priceAffectionType": "addition",
        "value": "Stück",
        "parent": "0.0.1.0.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.1.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.1.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 10,
        "priceAffectionType": "addition",
        "value": "Y",
        "parent": "0.0.1.0.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.1.0.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.1.0.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.5183134329927428,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.1.0.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.1.0.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 23,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.1.0.0.0.0.0.0.0.0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.1.1",
        "options": [
            "0.0.1.1.0"
        ],
        "priceAffection": 1.178848337778459,
        "priceAffectionType": "multiplication",
        "value": "Elektronikschrott gemischt",
        "parent": "0.0.1"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.1.1.0",
        "options": [
            "0.0.1.1.0.0"
        ],
        "priceAffection": 0.7228400250601592,
        "priceAffectionType": "multiplication",
        "value": "Gitterbox 800 Liter",
        "parent": "0.0.1.1"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.1.1.0.0",
        "options": [
            "0.0.1.1.0.0.0"
        ],
        "priceAffection": 0.6795807129641089,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.1.1.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.1.1.0.0.0",
        "options": [
            "0.0.1.1.0.0.0.0"
        ],
        "priceAffection": 0.6554108187729895,
        "priceAffectionType": "multiplication",
        "value": "Interzero Deposit Solutions GmbH",
        "parent": "0.0.1.1.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.1.1.0.0.0.0",
        "options": [
            "0.0.1.1.0.0.0.0.0"
        ],
        "priceAffection": 0.7124054567319842,
        "priceAffectionType": "multiplication",
        "value": "Stollwerckstr. 9 a",
        "parent": "0.0.1.1.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.1.1.0.0.0.0.0",
        "options": [
            "0.0.1.1.0.0.0.0.0.0"
        ],
        "priceAffection": 0.8460409857148496,
        "priceAffectionType": "multiplication",
        "value": "Köln",
        "parent": "0.0.1.1.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.1.1.0.0.0.0.0.0",
        "options": [
            "0.0.1.1.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.056223469400951,
        "priceAffectionType": "multiplication",
        "value": "Stück",
        "parent": "0.0.1.1.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.1.1.0.0.0.0.0.0.0",
        "options": [
            "0.0.1.1.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 48,
        "priceAffectionType": "addition",
        "value": "Y",
        "parent": "0.0.1.1.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.1.1.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.1.1.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.1025201043619608,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.1.1.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.1.1.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 93,
        "priceAffectionType": "addition",
        "value": "Y",
        "parent": "0.0.1.1.0.0.0.0.0.0.0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.1.2",
        "options": [
            "0.0.1.2.0"
        ],
        "priceAffection": 0.5950789013543845,
        "priceAffectionType": "multiplication",
        "value": "Mischholz",
        "parent": "0.0.1"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.1.2.0",
        "options": [
            "0.0.1.2.0.0"
        ],
        "priceAffection": 0.9896860583419507,
        "priceAffectionType": "multiplication",
        "value": "Abrollkipper-Mulde 40 cbm",
        "parent": "0.0.1.2"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.1.2.0.0",
        "options": [
            "0.0.1.2.0.0.0"
        ],
        "priceAffection": 28,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.1.2.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.1.2.0.0.0",
        "options": [
            "0.0.1.2.0.0.0.0"
        ],
        "priceAffection": 0.8980635829755237,
        "priceAffectionType": "multiplication",
        "value": "Knettenbrech + Gurdulic Rhein Neckar GmbH",
        "parent": "0.0.1.2.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.1.2.0.0.0.0",
        "options": [
            "0.0.1.2.0.0.0.0.0"
        ],
        "priceAffection": 75,
        "priceAffectionType": "addition",
        "value": "Hansastr. 31",
        "parent": "0.0.1.2.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.1.2.0.0.0.0.0",
        "options": [
            "0.0.1.2.0.0.0.0.0.0"
        ],
        "priceAffection": 27,
        "priceAffectionType": "addition",
        "value": "Karlsruhe",
        "parent": "0.0.1.2.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.1.2.0.0.0.0.0.0",
        "options": [
            "0.0.1.2.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.0268574373009813,
        "priceAffectionType": "multiplication",
        "value": "Stück",
        "parent": "0.0.1.2.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.1.2.0.0.0.0.0.0.0",
        "options": [
            "0.0.1.2.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.284855267933896,
        "priceAffectionType": "multiplication",
        "value": "Y",
        "parent": "0.0.1.2.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.1.2.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.1.2.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.1247306212155543,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.1.2.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.1.2.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 0.5283819151072062,
        "priceAffectionType": "multiplication",
        "value": "Y",
        "parent": "0.0.1.2.0.0.0.0.0.0.0.0"
    },
    {
        "question": "material type",
        "description": "select a option",
        "id": "0.0.2",
        "options": [
            "0.0.2.0"
        ],
        "priceAffection": 0.915104204159459,
        "priceAffectionType": "multiplication",
        "value": "Erstgestellung Gitterbox",
        "parent": "0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.2.0",
        "options": [
            "0.0.2.0.0"
        ],
        "priceAffection": 11,
        "priceAffectionType": "addition",
        "value": "Elektronikschrott gemischt",
        "parent": "0.0.2"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.2.0.0",
        "options": [
            "0.0.2.0.0.0"
        ],
        "priceAffection": 1.1098137946218563,
        "priceAffectionType": "multiplication",
        "value": "Gitterbox 1,5 cbm",
        "parent": "0.0.2.0"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.2.0.0.0",
        "options": [
            "0.0.2.0.0.0.0"
        ],
        "priceAffection": 1.2465888387619968,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.2.0.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.2.0.0.0.0",
        "options": [
            "0.0.2.0.0.0.0.0"
        ],
        "priceAffection": 60,
        "priceAffectionType": "addition",
        "value": "Interzero Deposit Solutions GmbH",
        "parent": "0.0.2.0.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.2.0.0.0.0.0",
        "options": [
            "0.0.2.0.0.0.0.0.0"
        ],
        "priceAffection": 63,
        "priceAffectionType": "addition",
        "value": "Stollwerckstr. 9 a",
        "parent": "0.0.2.0.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.2.0.0.0.0.0.0",
        "options": [
            "0.0.2.0.0.0.0.0.0.0"
        ],
        "priceAffection": 34,
        "priceAffectionType": "addition",
        "value": "Köln",
        "parent": "0.0.2.0.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.2.0.0.0.0.0.0.0",
        "options": [
            "0.0.2.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 73,
        "priceAffectionType": "addition",
        "value": "Stück",
        "parent": "0.0.2.0.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.2.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.2.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.5624894706827634,
        "priceAffectionType": "multiplication",
        "value": "Y",
        "parent": "0.0.2.0.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.2.0.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.2.0.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.2604149199362136,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.2.0.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.2.0.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 48,
        "priceAffectionType": "addition",
        "value": "Y",
        "parent": "0.0.2.0.0.0.0.0.0.0.0.0"
    },
    {
        "question": "material type",
        "description": "select a option",
        "id": "0.0.3",
        "options": [
            "0.0.3.0"
        ],
        "priceAffection": 1.4368001951440947,
        "priceAffectionType": "multiplication",
        "value": "Handling",
        "parent": "0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.3.0",
        "options": [
            "0.0.3.0.0"
        ],
        "priceAffection": 45,
        "priceAffectionType": "addition",
        "value": "Kühl-/Gefriergeräte Stück",
        "parent": "0.0.3"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.3.0.0",
        "options": [
            "0.0.3.0.0.0"
        ],
        "priceAffection": 43,
        "priceAffectionType": "addition",
        "value": "Euro-Pool Tauschpalette",
        "parent": "0.0.3.0"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.3.0.0.0",
        "options": [
            "0.0.3.0.0.0.0"
        ],
        "priceAffection": 35,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.3.0.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.3.0.0.0.0",
        "options": [
            "0.0.3.0.0.0.0.0"
        ],
        "priceAffection": 1.4645039621666127,
        "priceAffectionType": "multiplication",
        "value": "Interzero Circular Solutions Germany GmbH",
        "parent": "0.0.3.0.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.3.0.0.0.0.0",
        "options": [
            "0.0.3.0.0.0.0.0.0"
        ],
        "priceAffection": 0.6259301436987608,
        "priceAffectionType": "multiplication",
        "value": "Stollwerckstr. 9 a",
        "parent": "0.0.3.0.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.3.0.0.0.0.0.0",
        "options": [
            "0.0.3.0.0.0.0.0.0.0"
        ],
        "priceAffection": 59,
        "priceAffectionType": "addition",
        "value": "Köln",
        "parent": "0.0.3.0.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.3.0.0.0.0.0.0.0",
        "options": [
            "0.0.3.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 55,
        "priceAffectionType": "addition",
        "value": "Stück",
        "parent": "0.0.3.0.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.3.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.3.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 55,
        "priceAffectionType": "addition",
        "value": "Y",
        "parent": "0.0.3.0.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.3.0.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.3.0.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.5509810395422068,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.3.0.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.3.0.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 6,
        "priceAffectionType": "addition",
        "value": "Y",
        "parent": "0.0.3.0.0.0.0.0.0.0.0.0"
    },
    {
        "question": "material type",
        "description": "select a option",
        "id": "0.0.4",
        "options": [
            "0.0.4.0"
        ],
        "priceAffection": 0.5489973324110011,
        "priceAffectionType": "multiplication",
        "value": "Kauf",
        "parent": "0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.4.0",
        "options": [
            "0.0.4.0.0"
        ],
        "priceAffection": 25,
        "priceAffectionType": "addition",
        "value": "Big Bag für Sackware - Kauf 10 Stk.",
        "parent": "0.0.4"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.4.0.0",
        "options": [
            "0.0.4.0.0.0"
        ],
        "priceAffection": 0.7324198590610405,
        "priceAffectionType": "multiplication",
        "value": "ohne",
        "parent": "0.0.4.0"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.4.0.0.0",
        "options": [
            "0.0.4.0.0.0.0"
        ],
        "priceAffection": 29,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.4.0.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.4.0.0.0.0",
        "options": [
            "0.0.4.0.0.0.0.0"
        ],
        "priceAffection": 95,
        "priceAffectionType": "addition",
        "value": "Interzero Deposit Solutions GmbH",
        "parent": "0.0.4.0.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.4.0.0.0.0.0",
        "options": [
            "0.0.4.0.0.0.0.0.0"
        ],
        "priceAffection": 95,
        "priceAffectionType": "addition",
        "value": "Stollwerckstr. 9 a",
        "parent": "0.0.4.0.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.4.0.0.0.0.0.0",
        "options": [
            "0.0.4.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.3132242071093627,
        "priceAffectionType": "multiplication",
        "value": "Köln",
        "parent": "0.0.4.0.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.4.0.0.0.0.0.0.0",
        "options": [
            "0.0.4.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.3836336152206836,
        "priceAffectionType": "multiplication",
        "value": "Stück",
        "parent": "0.0.4.0.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.4.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.4.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 78,
        "priceAffectionType": "addition",
        "value": "Y",
        "parent": "0.0.4.0.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.4.0.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.4.0.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 9,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.4.0.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.4.0.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 1.279542636970199,
        "priceAffectionType": "multiplication",
        "value": "Y",
        "parent": "0.0.4.0.0.0.0.0.0.0.0.0"
    },
    {
        "question": "material type",
        "description": "select a option",
        "id": "0.0.5",
        "options": [
            "0.0.5.0",
            "0.0.5.1"
        ],
        "priceAffection": 23,
        "priceAffectionType": "addition",
        "value": "Leerfahrt",
        "parent": "0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.5.0",
        "options": [
            "0.0.5.0.0"
        ],
        "priceAffection": 1.3697234121402457,
        "priceAffectionType": "multiplication",
        "value": "Dämmmaterial",
        "parent": "0.0.5"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.5.0.0",
        "options": [
            "0.0.5.0.0.0"
        ],
        "priceAffection": 8,
        "priceAffectionType": "addition",
        "value": "Abrollkipper-Mulde 20 cbm",
        "parent": "0.0.5.0"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.5.0.0.0",
        "options": [
            "0.0.5.0.0.0.0"
        ],
        "priceAffection": 1.1031081439713195,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.5.0.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.5.0.0.0.0",
        "options": [
            "0.0.5.0.0.0.0.0"
        ],
        "priceAffection": 51,
        "priceAffectionType": "addition",
        "value": "Interzero Circular Solutions Germany GmbH",
        "parent": "0.0.5.0.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.5.0.0.0.0.0",
        "options": [
            "0.0.5.0.0.0.0.0.0"
        ],
        "priceAffection": 7,
        "priceAffectionType": "addition",
        "value": "Stollwerckstr. 9 a",
        "parent": "0.0.5.0.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.5.0.0.0.0.0.0",
        "options": [
            "0.0.5.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.0486830447257856,
        "priceAffectionType": "multiplication",
        "value": "Köln",
        "parent": "0.0.5.0.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.5.0.0.0.0.0.0.0",
        "options": [
            "0.0.5.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.5245597966352786,
        "priceAffectionType": "multiplication",
        "value": "Stück",
        "parent": "0.0.5.0.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.5.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.5.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.4443829766237983,
        "priceAffectionType": "multiplication",
        "value": "Y",
        "parent": "0.0.5.0.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.5.0.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.5.0.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 82,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.5.0.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.5.0.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 1.05413155354096,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.5.0.0.0.0.0.0.0.0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.5.1",
        "options": [
            "0.0.5.1.0"
        ],
        "priceAffection": 76,
        "priceAffectionType": "addition",
        "value": "Leuchtstoffröhren",
        "parent": "0.0.5"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.5.1.0",
        "options": [
            "0.0.5.1.0.0"
        ],
        "priceAffection": 0.685846920480901,
        "priceAffectionType": "multiplication",
        "value": "LSR-Karton",
        "parent": "0.0.5.1"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.5.1.0.0",
        "options": [
            "0.0.5.1.0.0.0"
        ],
        "priceAffection": 1.1150686694190506,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.5.1.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.5.1.0.0.0",
        "options": [
            "0.0.5.1.0.0.0.0"
        ],
        "priceAffection": 57,
        "priceAffectionType": "addition",
        "value": "Interzero Deposit Solutions GmbH",
        "parent": "0.0.5.1.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.5.1.0.0.0.0",
        "options": [
            "0.0.5.1.0.0.0.0.0"
        ],
        "priceAffection": 0.6014265594634776,
        "priceAffectionType": "multiplication",
        "value": "Stollwerckstr. 9 a",
        "parent": "0.0.5.1.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.5.1.0.0.0.0.0",
        "options": [
            "0.0.5.1.0.0.0.0.0.0"
        ],
        "priceAffection": 1.3579382786207597,
        "priceAffectionType": "multiplication",
        "value": "Köln",
        "parent": "0.0.5.1.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.5.1.0.0.0.0.0.0",
        "options": [
            "0.0.5.1.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.2383054881988746,
        "priceAffectionType": "multiplication",
        "value": "Stück",
        "parent": "0.0.5.1.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.5.1.0.0.0.0.0.0.0",
        "options": [
            "0.0.5.1.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 73,
        "priceAffectionType": "addition",
        "value": "Y",
        "parent": "0.0.5.1.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.5.1.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.5.1.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 12,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.5.1.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.5.1.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 0,
        "priceAffectionType": "addition",
        "value": "Y",
        "parent": "0.0.5.1.0.0.0.0.0.0.0.0"
    },
    {
        "question": "material type",
        "description": "select a option",
        "id": "0.0.6",
        "options": [
            "0.0.6.0",
            "0.0.6.1"
        ],
        "priceAffection": 1.0243795656705081,
        "priceAffectionType": "multiplication",
        "value": "Leerung",
        "parent": "0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.6.0",
        "options": [
            "0.0.6.0.0"
        ],
        "priceAffection": 1.1197670994984512,
        "priceAffectionType": "multiplication",
        "value": "PE-Folie",
        "parent": "0.0.6"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.6.0.0",
        "options": [
            "0.0.6.0.0.0"
        ],
        "priceAffection": 64,
        "priceAffectionType": "addition",
        "value": "Abrollkipper-Preßcontainer 20 cbm",
        "parent": "0.0.6.0"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.6.0.0.0",
        "options": [
            "0.0.6.0.0.0.0"
        ],
        "priceAffection": 0.7346619322328054,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.6.0.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.6.0.0.0.0",
        "options": [
            "0.0.6.0.0.0.0.0"
        ],
        "priceAffection": 26,
        "priceAffectionType": "addition",
        "value": "Interzero Circular Solutions Germany GmbH",
        "parent": "0.0.6.0.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.6.0.0.0.0.0",
        "options": [
            "0.0.6.0.0.0.0.0.0"
        ],
        "priceAffection": 0.9265610348520226,
        "priceAffectionType": "multiplication",
        "value": "Stollwerckstr. 9 a",
        "parent": "0.0.6.0.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.6.0.0.0.0.0.0",
        "options": [
            "0.0.6.0.0.0.0.0.0.0"
        ],
        "priceAffection": 22,
        "priceAffectionType": "addition",
        "value": "Köln",
        "parent": "0.0.6.0.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.6.0.0.0.0.0.0.0",
        "options": [
            "0.0.6.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.362126057544393,
        "priceAffectionType": "multiplication",
        "value": "Stück",
        "parent": "0.0.6.0.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.6.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.6.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.6636169893973953,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.6.0.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.6.0.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.6.0.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 58,
        "priceAffectionType": "addition",
        "value": "Y",
        "parent": "0.0.6.0.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.6.0.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 0.6351927299471931,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.6.0.0.0.0.0.0.0.0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.6.1",
        "options": [
            "0.0.6.1.0"
        ],
        "priceAffection": 1.4623050405094407,
        "priceAffectionType": "multiplication",
        "value": "PPK 1.01 uns. gem. Altpapier",
        "parent": "0.0.6"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.6.1.0",
        "options": [
            "0.0.6.1.0.0"
        ],
        "priceAffection": 0.8624682011974161,
        "priceAffectionType": "multiplication",
        "value": "Abrollkipper-Preßcontainer 20 cbm",
        "parent": "0.0.6.1"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.6.1.0.0",
        "options": [
            "0.0.6.1.0.0.0"
        ],
        "priceAffection": 0.9157825853287223,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.6.1.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.6.1.0.0.0",
        "options": [
            "0.0.6.1.0.0.0.0"
        ],
        "priceAffection": 0.605385200390163,
        "priceAffectionType": "multiplication",
        "value": "Interzero Circular Solutions Germany GmbH",
        "parent": "0.0.6.1.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.6.1.0.0.0.0",
        "options": [
            "0.0.6.1.0.0.0.0.0"
        ],
        "priceAffection": 34,
        "priceAffectionType": "addition",
        "value": "Stollwerckstr. 9 a",
        "parent": "0.0.6.1.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.6.1.0.0.0.0.0",
        "options": [
            "0.0.6.1.0.0.0.0.0.0"
        ],
        "priceAffection": 62,
        "priceAffectionType": "addition",
        "value": "Köln",
        "parent": "0.0.6.1.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.6.1.0.0.0.0.0.0",
        "options": [
            "0.0.6.1.0.0.0.0.0.0.0"
        ],
        "priceAffection": 22,
        "priceAffectionType": "addition",
        "value": "Tonne",
        "parent": "0.0.6.1.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.6.1.0.0.0.0.0.0.0",
        "options": [
            "0.0.6.1.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.9177066591830734,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.6.1.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.6.1.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.6.1.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.8250591925450395,
        "priceAffectionType": "multiplication",
        "value": "Y",
        "parent": "0.0.6.1.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.6.1.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 0.5208184978388111,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.6.1.0.0.0.0.0.0.0.0"
    },
    {
        "question": "material type",
        "description": "select a option",
        "id": "0.0.7",
        "options": [
            "0.0.7.0",
            "0.0.7.1",
            "0.0.7.2",
            "0.0.7.3",
            "0.0.7.4",
            "0.0.7.5"
        ],
        "priceAffection": 1.4113034615932123,
        "priceAffectionType": "multiplication",
        "value": "Miete",
        "parent": "0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.7.0",
        "options": [
            "0.0.7.0.0"
        ],
        "priceAffection": 0.8346335610546272,
        "priceAffectionType": "multiplication",
        "value": "Dämmmaterial",
        "parent": "0.0.7"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.7.0.0",
        "options": [
            "0.0.7.0.0.0"
        ],
        "priceAffection": 17,
        "priceAffectionType": "addition",
        "value": "Abrollkipper-Mulde 20 cbm",
        "parent": "0.0.7.0"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.7.0.0.0",
        "options": [
            "0.0.7.0.0.0.0"
        ],
        "priceAffection": 1.0606532854981998,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.7.0.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.7.0.0.0.0",
        "options": [
            "0.0.7.0.0.0.0.0"
        ],
        "priceAffection": 1.241793519202123,
        "priceAffectionType": "multiplication",
        "value": "Interzero Circular Solutions Germany GmbH",
        "parent": "0.0.7.0.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.7.0.0.0.0.0",
        "options": [
            "0.0.7.0.0.0.0.0.0"
        ],
        "priceAffection": 0.5483112994844854,
        "priceAffectionType": "multiplication",
        "value": "Stollwerckstr. 9 a",
        "parent": "0.0.7.0.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.7.0.0.0.0.0.0",
        "options": [
            "0.0.7.0.0.0.0.0.0.0"
        ],
        "priceAffection": 56,
        "priceAffectionType": "addition",
        "value": "Köln",
        "parent": "0.0.7.0.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.7.0.0.0.0.0.0.0",
        "options": [
            "0.0.7.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 6,
        "priceAffectionType": "addition",
        "value": "Stück",
        "parent": "0.0.7.0.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.7.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.7.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.0147384765817484,
        "priceAffectionType": "multiplication",
        "value": "Y",
        "parent": "0.0.7.0.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.7.0.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.7.0.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.0485805662137753,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.7.0.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.7.0.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 0.9238537350829152,
        "priceAffectionType": "multiplication",
        "value": "Y",
        "parent": "0.0.7.0.0.0.0.0.0.0.0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.7.1",
        "options": [
            "0.0.7.1.0"
        ],
        "priceAffection": 54,
        "priceAffectionType": "addition",
        "value": "Elektronikschrott gemischt",
        "parent": "0.0.7"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.7.1.0",
        "options": [
            "0.0.7.1.0.0"
        ],
        "priceAffection": 92,
        "priceAffectionType": "addition",
        "value": "Gitterbox 800 Liter",
        "parent": "0.0.7.1"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.7.1.0.0",
        "options": [
            "0.0.7.1.0.0.0"
        ],
        "priceAffection": 1.3578186358218578,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.7.1.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.7.1.0.0.0",
        "options": [
            "0.0.7.1.0.0.0.0"
        ],
        "priceAffection": 59,
        "priceAffectionType": "addition",
        "value": "Interzero Deposit Solutions GmbH",
        "parent": "0.0.7.1.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.7.1.0.0.0.0",
        "options": [
            "0.0.7.1.0.0.0.0.0"
        ],
        "priceAffection": 0.6624673489976636,
        "priceAffectionType": "multiplication",
        "value": "Stollwerckstr. 9 a",
        "parent": "0.0.7.1.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.7.1.0.0.0.0.0",
        "options": [
            "0.0.7.1.0.0.0.0.0.0"
        ],
        "priceAffection": 0.7014438091036641,
        "priceAffectionType": "multiplication",
        "value": "Köln",
        "parent": "0.0.7.1.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.7.1.0.0.0.0.0.0",
        "options": [
            "0.0.7.1.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.9388922552192458,
        "priceAffectionType": "multiplication",
        "value": "Stück",
        "parent": "0.0.7.1.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.7.1.0.0.0.0.0.0.0",
        "options": [
            "0.0.7.1.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.3628336121951448,
        "priceAffectionType": "multiplication",
        "value": "Y",
        "parent": "0.0.7.1.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.7.1.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.7.1.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.443543849495907,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.7.1.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.7.1.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 13,
        "priceAffectionType": "addition",
        "value": "Y",
        "parent": "0.0.7.1.0.0.0.0.0.0.0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.7.2",
        "options": [
            "0.0.7.2.0"
        ],
        "priceAffection": 74,
        "priceAffectionType": "addition",
        "value": "Energiesparlampen / LEDs",
        "parent": "0.0.7"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.7.2.0",
        "options": [
            "0.0.7.2.0.0"
        ],
        "priceAffection": 1.058736932788214,
        "priceAffectionType": "multiplication",
        "value": "Spannringdeckelfass 120 Liter",
        "parent": "0.0.7.2"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.7.2.0.0",
        "options": [
            "0.0.7.2.0.0.0"
        ],
        "priceAffection": 0.836416792359469,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.7.2.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.7.2.0.0.0",
        "options": [
            "0.0.7.2.0.0.0.0"
        ],
        "priceAffection": 0.9909168983651739,
        "priceAffectionType": "multiplication",
        "value": "Interzero Deposit Solutions GmbH",
        "parent": "0.0.7.2.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.7.2.0.0.0.0",
        "options": [
            "0.0.7.2.0.0.0.0.0"
        ],
        "priceAffection": 0.5228262008616023,
        "priceAffectionType": "multiplication",
        "value": "Stollwerckstr. 9 a",
        "parent": "0.0.7.2.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.7.2.0.0.0.0.0",
        "options": [
            "0.0.7.2.0.0.0.0.0.0"
        ],
        "priceAffection": 1.2202208930836125,
        "priceAffectionType": "multiplication",
        "value": "Köln",
        "parent": "0.0.7.2.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.7.2.0.0.0.0.0.0",
        "options": [
            "0.0.7.2.0.0.0.0.0.0.0"
        ],
        "priceAffection": 16,
        "priceAffectionType": "addition",
        "value": "Stück",
        "parent": "0.0.7.2.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.7.2.0.0.0.0.0.0.0",
        "options": [
            "0.0.7.2.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 18,
        "priceAffectionType": "addition",
        "value": "Y",
        "parent": "0.0.7.2.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.7.2.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.7.2.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.0018465106565961,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.7.2.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.7.2.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 43,
        "priceAffectionType": "addition",
        "value": "Y",
        "parent": "0.0.7.2.0.0.0.0.0.0.0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.7.3",
        "options": [
            "0.0.7.3.0"
        ],
        "priceAffection": 1.1218398546403612,
        "priceAffectionType": "multiplication",
        "value": "Mischholz",
        "parent": "0.0.7"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.7.3.0",
        "options": [
            "0.0.7.3.0.0"
        ],
        "priceAffection": 1.3335805100249136,
        "priceAffectionType": "multiplication",
        "value": "Abrollkipper-Mulde 40 cbm",
        "parent": "0.0.7.3"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.7.3.0.0",
        "options": [
            "0.0.7.3.0.0.0"
        ],
        "priceAffection": 53,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.7.3.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.7.3.0.0.0",
        "options": [
            "0.0.7.3.0.0.0.0"
        ],
        "priceAffection": 1.1352620647129943,
        "priceAffectionType": "multiplication",
        "value": "Knettenbrech + Gurdulic Rhein Neckar GmbH",
        "parent": "0.0.7.3.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.7.3.0.0.0.0",
        "options": [
            "0.0.7.3.0.0.0.0.0"
        ],
        "priceAffection": 55,
        "priceAffectionType": "addition",
        "value": "Verbindungskanal Linkes Ufer 43-45",
        "parent": "0.0.7.3.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.7.3.0.0.0.0.0",
        "options": [
            "0.0.7.3.0.0.0.0.0.0"
        ],
        "priceAffection": 0.7948568727580407,
        "priceAffectionType": "multiplication",
        "value": "Mannheim",
        "parent": "0.0.7.3.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.7.3.0.0.0.0.0.0",
        "options": [
            "0.0.7.3.0.0.0.0.0.0.0"
        ],
        "priceAffection": 65,
        "priceAffectionType": "addition",
        "value": "Stück",
        "parent": "0.0.7.3.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.7.3.0.0.0.0.0.0.0",
        "options": [
            "0.0.7.3.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 68,
        "priceAffectionType": "addition",
        "value": "Y",
        "parent": "0.0.7.3.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.7.3.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.7.3.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 21,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.7.3.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.7.3.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 26,
        "priceAffectionType": "addition",
        "value": "Y",
        "parent": "0.0.7.3.0.0.0.0.0.0.0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.7.4",
        "options": [
            "0.0.7.4.0"
        ],
        "priceAffection": 48,
        "priceAffectionType": "addition",
        "value": "Aktenvernichtung",
        "parent": "0.0.7"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.7.4.0",
        "options": [
            "0.0.7.4.0.0"
        ],
        "priceAffection": 34,
        "priceAffectionType": "addition",
        "value": "Daten-Sicherheitsbehälter 240 cbm",
        "parent": "0.0.7.4"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.7.4.0.0",
        "options": [
            "0.0.7.4.0.0.0"
        ],
        "priceAffection": 18,
        "priceAffectionType": "addition",
        "value": "Y",
        "parent": "0.0.7.4.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.7.4.0.0.0",
        "options": [
            "0.0.7.4.0.0.0.0"
        ],
        "priceAffection": 0.982554463794173,
        "priceAffectionType": "multiplication",
        "value": "documentus GmbH Stuttgart",
        "parent": "0.0.7.4.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.7.4.0.0.0.0",
        "options": [
            "0.0.7.4.0.0.0.0.0"
        ],
        "priceAffection": 94,
        "priceAffectionType": "addition",
        "value": "Eisentalstraße 6",
        "parent": "0.0.7.4.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.7.4.0.0.0.0.0",
        "options": [
            "0.0.7.4.0.0.0.0.0.0"
        ],
        "priceAffection": 1.1339490478134986,
        "priceAffectionType": "multiplication",
        "value": "Waiblingen",
        "parent": "0.0.7.4.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.7.4.0.0.0.0.0.0",
        "options": [
            "0.0.7.4.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.7594667578978895,
        "priceAffectionType": "multiplication",
        "value": "Stück",
        "parent": "0.0.7.4.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.7.4.0.0.0.0.0.0.0",
        "options": [
            "0.0.7.4.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.9222629636413429,
        "priceAffectionType": "multiplication",
        "value": "Y",
        "parent": "0.0.7.4.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.7.4.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.7.4.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 62,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.7.4.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.7.4.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 26,
        "priceAffectionType": "addition",
        "value": "Y",
        "parent": "0.0.7.4.0.0.0.0.0.0.0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.7.5",
        "options": [
            "0.0.7.5.0"
        ],
        "priceAffection": 1.1249405057082171,
        "priceAffectionType": "multiplication",
        "value": "LDPE-Folie 90/10",
        "parent": "0.0.7"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.7.5.0",
        "options": [
            "0.0.7.5.0.0"
        ],
        "priceAffection": 1.2150010338472543,
        "priceAffectionType": "multiplication",
        "value": "Ballenpresse",
        "parent": "0.0.7.5"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.7.5.0.0",
        "options": [
            "0.0.7.5.0.0.0"
        ],
        "priceAffection": 38,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.7.5.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.7.5.0.0.0",
        "options": [
            "0.0.7.5.0.0.0.0"
        ],
        "priceAffection": 0.6935531391908376,
        "priceAffectionType": "multiplication",
        "value": "Interzero Circular Solutions Germany GmbH",
        "parent": "0.0.7.5.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.7.5.0.0.0.0",
        "options": [
            "0.0.7.5.0.0.0.0.0"
        ],
        "priceAffection": 74,
        "priceAffectionType": "addition",
        "value": "Stollwerckstr. 9 a",
        "parent": "0.0.7.5.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.7.5.0.0.0.0.0",
        "options": [
            "0.0.7.5.0.0.0.0.0.0"
        ],
        "priceAffection": 3,
        "priceAffectionType": "addition",
        "value": "Köln",
        "parent": "0.0.7.5.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.7.5.0.0.0.0.0.0",
        "options": [
            "0.0.7.5.0.0.0.0.0.0.0"
        ],
        "priceAffection": 61,
        "priceAffectionType": "addition",
        "value": "Stück",
        "parent": "0.0.7.5.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.7.5.0.0.0.0.0.0.0",
        "options": [
            "0.0.7.5.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.861353853138842,
        "priceAffectionType": "multiplication",
        "value": "Y",
        "parent": "0.0.7.5.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.7.5.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.7.5.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 52,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.7.5.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.7.5.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 74,
        "priceAffectionType": "addition",
        "value": "Y",
        "parent": "0.0.7.5.0.0.0.0.0.0.0.0"
    },
    {
        "question": "material type",
        "description": "select a option",
        "id": "0.0.8",
        "options": [
            "0.0.8.0",
            "0.0.8.1",
            "0.0.8.2",
            "0.0.8.3",
            "0.0.8.4",
            "0.0.8.5",
            "0.0.8.6"
        ],
        "priceAffection": 1.4689300285051112,
        "priceAffectionType": "multiplication",
        "value": "Rückvergütung",
        "parent": "0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.8.0",
        "options": [
            "0.0.8.0.0"
        ],
        "priceAffection": 1.2331965023060116,
        "priceAffectionType": "multiplication",
        "value": "LDPE-Folie Bunt",
        "parent": "0.0.8"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.8.0.0",
        "options": [
            "0.0.8.0.0.0"
        ],
        "priceAffection": 52,
        "priceAffectionType": "addition",
        "value": "ohne",
        "parent": "0.0.8.0"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.8.0.0.0",
        "options": [
            "0.0.8.0.0.0.0"
        ],
        "priceAffection": 29,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.8.0.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.8.0.0.0.0",
        "options": [
            "0.0.8.0.0.0.0.0"
        ],
        "priceAffection": 0.7975021732285597,
        "priceAffectionType": "multiplication",
        "value": "Interzero Circular Solutions Germany GmbH",
        "parent": "0.0.8.0.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.8.0.0.0.0.0",
        "options": [
            "0.0.8.0.0.0.0.0.0"
        ],
        "priceAffection": 85,
        "priceAffectionType": "addition",
        "value": "Stollwerckstr. 9 a",
        "parent": "0.0.8.0.0.0.0"
    },
    {
        "question": "purchase price index",
        "description": "select a option",
        "id": "0.0.8.0.0.0.0.0.0",
        "options": [
            "0.0.8.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0,
        "priceAffectionType": "addition",
        "value": "Köln",
        "parent": "0.0.8.0.0.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.8.0.0.0.0.0.0.0",
        "options": [
            "0.0.8.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.8422505059300271,
        "priceAffectionType": "multiplication",
        "value": "o. Euwid",
        "parent": "0.0.8.0.0.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.8.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.8.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 35,
        "priceAffectionType": "addition",
        "value": "Kilogramm",
        "parent": "0.0.8.0.0.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.8.0.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.8.0.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 39,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.8.0.0.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.8.0.0.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.8.0.0.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.2736730409416932,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.8.0.0.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.8.0.0.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 1.1459553670226945,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.8.0.0.0.0.0.0.0.0.0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.8.1",
        "options": [
            "0.0.8.1.0"
        ],
        "priceAffection": 0.9546272510481479,
        "priceAffectionType": "multiplication",
        "value": "PE-Folie",
        "parent": "0.0.8"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.8.1.0",
        "options": [
            "0.0.8.1.0.0"
        ],
        "priceAffection": 1.4673471235645181,
        "priceAffectionType": "multiplication",
        "value": "ohne",
        "parent": "0.0.8.1"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.8.1.0.0",
        "options": [
            "0.0.8.1.0.0.0"
        ],
        "priceAffection": 43,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.8.1.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.8.1.0.0.0",
        "options": [
            "0.0.8.1.0.0.0.0"
        ],
        "priceAffection": 93,
        "priceAffectionType": "addition",
        "value": "Interzero Circular Solutions Germany GmbH",
        "parent": "0.0.8.1.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.8.1.0.0.0.0",
        "options": [
            "0.0.8.1.0.0.0.0.0"
        ],
        "priceAffection": 97,
        "priceAffectionType": "addition",
        "value": "Stollwerckstr. 9 a",
        "parent": "0.0.8.1.0.0.0"
    },
    {
        "question": "purchase price index",
        "description": "select a option",
        "id": "0.0.8.1.0.0.0.0.0",
        "options": [
            "0.0.8.1.0.0.0.0.0.0"
        ],
        "priceAffection": 0.6386379736223617,
        "priceAffectionType": "multiplication",
        "value": "Köln",
        "parent": "0.0.8.1.0.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.8.1.0.0.0.0.0.0",
        "options": [
            "0.0.8.1.0.0.0.0.0.0.0"
        ],
        "priceAffection": 51,
        "priceAffectionType": "addition",
        "value": "o. Euwid",
        "parent": "0.0.8.1.0.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.8.1.0.0.0.0.0.0.0",
        "options": [
            "0.0.8.1.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 71,
        "priceAffectionType": "addition",
        "value": "Kilogramm",
        "parent": "0.0.8.1.0.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.8.1.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.8.1.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.5856065643456541,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.8.1.0.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.8.1.0.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.8.1.0.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 34,
        "priceAffectionType": "addition",
        "value": "J",
        "parent": "0.0.8.1.0.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.8.1.0.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 1.0898536199539277,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.8.1.0.0.0.0.0.0.0.0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.8.2",
        "options": [
            "0.0.8.2.0"
        ],
        "priceAffection": 41,
        "priceAffectionType": "addition",
        "value": "PPK",
        "parent": "0.0.8"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.8.2.0",
        "options": [
            "0.0.8.2.0.0"
        ],
        "priceAffection": 0.5002460651263159,
        "priceAffectionType": "multiplication",
        "value": "ohne",
        "parent": "0.0.8.2"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.8.2.0.0",
        "options": [
            "0.0.8.2.0.0.0"
        ],
        "priceAffection": 1.1752191380388624,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.8.2.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.8.2.0.0.0",
        "options": [
            "0.0.8.2.0.0.0.0"
        ],
        "priceAffection": 72,
        "priceAffectionType": "addition",
        "value": "Interzero Circular Solutions Germany GmbH",
        "parent": "0.0.8.2.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.8.2.0.0.0.0",
        "options": [
            "0.0.8.2.0.0.0.0.0"
        ],
        "priceAffection": 1.1524930155877111,
        "priceAffectionType": "multiplication",
        "value": "Stollwerckstr. 9 a",
        "parent": "0.0.8.2.0.0.0"
    },
    {
        "question": "purchase price index",
        "description": "select a option",
        "id": "0.0.8.2.0.0.0.0.0",
        "options": [
            "0.0.8.2.0.0.0.0.0.0"
        ],
        "priceAffection": 10,
        "priceAffectionType": "addition",
        "value": "Köln",
        "parent": "0.0.8.2.0.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.8.2.0.0.0.0.0.0",
        "options": [
            "0.0.8.2.0.0.0.0.0.0.0"
        ],
        "priceAffection": 9,
        "priceAffectionType": "addition",
        "value": "o. Euwid 1.04",
        "parent": "0.0.8.2.0.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.8.2.0.0.0.0.0.0.0",
        "options": [
            "0.0.8.2.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 27,
        "priceAffectionType": "addition",
        "value": "Kilogramm",
        "parent": "0.0.8.2.0.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.8.2.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.8.2.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 63,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.8.2.0.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.8.2.0.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.8.2.0.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 79,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.8.2.0.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.8.2.0.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 23,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.8.2.0.0.0.0.0.0.0.0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.8.3",
        "options": [
            "0.0.8.3.0"
        ],
        "priceAffection": 53,
        "priceAffectionType": "addition",
        "value": "PPK 1.01 uns. gem. Altpapier",
        "parent": "0.0.8"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.8.3.0",
        "options": [
            "0.0.8.3.0.0"
        ],
        "priceAffection": 34,
        "priceAffectionType": "addition",
        "value": "ohne",
        "parent": "0.0.8.3"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.8.3.0.0",
        "options": [
            "0.0.8.3.0.0.0"
        ],
        "priceAffection": 1.4178052799022562,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.8.3.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.8.3.0.0.0",
        "options": [
            "0.0.8.3.0.0.0.0"
        ],
        "priceAffection": 0.7787605422357817,
        "priceAffectionType": "multiplication",
        "value": "Interzero Circular Solutions Germany GmbH",
        "parent": "0.0.8.3.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.8.3.0.0.0.0",
        "options": [
            "0.0.8.3.0.0.0.0.0"
        ],
        "priceAffection": 1.042210317232603,
        "priceAffectionType": "multiplication",
        "value": "Stollwerckstr. 9 a",
        "parent": "0.0.8.3.0.0.0"
    },
    {
        "question": "purchase price index",
        "description": "select a option",
        "id": "0.0.8.3.0.0.0.0.0",
        "options": [
            "0.0.8.3.0.0.0.0.0.0"
        ],
        "priceAffection": 24,
        "priceAffectionType": "addition",
        "value": "Köln",
        "parent": "0.0.8.3.0.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.8.3.0.0.0.0.0.0",
        "options": [
            "0.0.8.3.0.0.0.0.0.0.0"
        ],
        "priceAffection": 89,
        "priceAffectionType": "addition",
        "value": "o. Euwid 1.02",
        "parent": "0.0.8.3.0.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.8.3.0.0.0.0.0.0.0",
        "options": [
            "0.0.8.3.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.4080832111334811,
        "priceAffectionType": "multiplication",
        "value": "Kilogramm",
        "parent": "0.0.8.3.0.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.8.3.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.8.3.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 11,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.8.3.0.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.8.3.0.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.8.3.0.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 90,
        "priceAffectionType": "addition",
        "value": "Y",
        "parent": "0.0.8.3.0.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.8.3.0.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 1.1023531222859833,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.8.3.0.0.0.0.0.0.0.0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.8.4",
        "options": [
            "0.0.8.4.0"
        ],
        "priceAffection": 41,
        "priceAffectionType": "addition",
        "value": "Mischholz",
        "parent": "0.0.8"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.8.4.0",
        "options": [
            "0.0.8.4.0.0"
        ],
        "priceAffection": 1.1541229217572222,
        "priceAffectionType": "multiplication",
        "value": "ohne",
        "parent": "0.0.8.4"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.8.4.0.0",
        "options": [
            "0.0.8.4.0.0.0"
        ],
        "priceAffection": 1.4229569458838751,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.8.4.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.8.4.0.0.0",
        "options": [
            "0.0.8.4.0.0.0.0"
        ],
        "priceAffection": 1.4856226984751637,
        "priceAffectionType": "multiplication",
        "value": "Knettenbrech + Gurdulic Rhein Neckar GmbH",
        "parent": "0.0.8.4.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.8.4.0.0.0.0",
        "options": [
            "0.0.8.4.0.0.0.0.0"
        ],
        "priceAffection": 1.065426254815601,
        "priceAffectionType": "multiplication",
        "value": "Hansastr. 31",
        "parent": "0.0.8.4.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.8.4.0.0.0.0.0",
        "options": [
            "0.0.8.4.0.0.0.0.0.0"
        ],
        "priceAffection": 93,
        "priceAffectionType": "addition",
        "value": "Karlsruhe",
        "parent": "0.0.8.4.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.8.4.0.0.0.0.0.0",
        "options": [
            "0.0.8.4.0.0.0.0.0.0.0"
        ],
        "priceAffection": 95,
        "priceAffectionType": "addition",
        "value": "Kilogramm",
        "parent": "0.0.8.4.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.8.4.0.0.0.0.0.0.0",
        "options": [
            "0.0.8.4.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.656434509505075,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.8.4.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.8.4.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.8.4.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.5974152656994174,
        "priceAffectionType": "multiplication",
        "value": "Y",
        "parent": "0.0.8.4.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.8.4.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 0.9965733401036585,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.8.4.0.0.0.0.0.0.0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.8.5",
        "options": [
            "0.0.8.5.0"
        ],
        "priceAffection": 0.9330365811278443,
        "priceAffectionType": "multiplication",
        "value": "Altreifen mit Felgen",
        "parent": "0.0.8"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.8.5.0",
        "options": [
            "0.0.8.5.0.0"
        ],
        "priceAffection": 1.3321895506005665,
        "priceAffectionType": "multiplication",
        "value": "lose",
        "parent": "0.0.8.5"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.8.5.0.0",
        "options": [
            "0.0.8.5.0.0.0"
        ],
        "priceAffection": 1.0982415949657676,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.8.5.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.8.5.0.0.0",
        "options": [
            "0.0.8.5.0.0.0.0"
        ],
        "priceAffection": 0.6375294810214498,
        "priceAffectionType": "multiplication",
        "value": "Knettenbrech + Gurdulic Rhein Neckar GmbH",
        "parent": "0.0.8.5.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.8.5.0.0.0.0",
        "options": [
            "0.0.8.5.0.0.0.0.0"
        ],
        "priceAffection": 99,
        "priceAffectionType": "addition",
        "value": "Verbindungskanal Linkes Ufer 43-45",
        "parent": "0.0.8.5.0.0.0"
    },
    {
        "question": "purchase price index",
        "description": "select a option",
        "id": "0.0.8.5.0.0.0.0.0",
        "options": [
            "0.0.8.5.0.0.0.0.0.0"
        ],
        "priceAffection": 1.379163771630795,
        "priceAffectionType": "multiplication",
        "value": "Mannheim",
        "parent": "0.0.8.5.0.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.8.5.0.0.0.0.0.0",
        "options": [
            "0.0.8.5.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.8438966109723847,
        "priceAffectionType": "multiplication",
        "value": "o. Euwid",
        "parent": "0.0.8.5.0.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.8.5.0.0.0.0.0.0.0",
        "options": [
            "0.0.8.5.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.5753019214629833,
        "priceAffectionType": "multiplication",
        "value": "Kilogramm",
        "parent": "0.0.8.5.0.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.8.5.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.8.5.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.5565357536032889,
        "priceAffectionType": "multiplication",
        "value": "Y",
        "parent": "0.0.8.5.0.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.8.5.0.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.8.5.0.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.6446979233251036,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.8.5.0.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.8.5.0.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 23,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.8.5.0.0.0.0.0.0.0.0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.8.6",
        "options": [
            "0.0.8.6.0"
        ],
        "priceAffection": 70,
        "priceAffectionType": "addition",
        "value": "Bänder Kunststoff cbm",
        "parent": "0.0.8"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.8.6.0",
        "options": [
            "0.0.8.6.0.0"
        ],
        "priceAffection": 2,
        "priceAffectionType": "addition",
        "value": "lose",
        "parent": "0.0.8.6"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.8.6.0.0",
        "options": [
            "0.0.8.6.0.0.0"
        ],
        "priceAffection": 91,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.8.6.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.8.6.0.0.0",
        "options": [
            "0.0.8.6.0.0.0.0"
        ],
        "priceAffection": 58,
        "priceAffectionType": "addition",
        "value": "Knettenbrech + Gurdulic Rhein Neckar GmbH",
        "parent": "0.0.8.6.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.8.6.0.0.0.0",
        "options": [
            "0.0.8.6.0.0.0.0.0"
        ],
        "priceAffection": 0.5494693087954614,
        "priceAffectionType": "multiplication",
        "value": "Verbindungskanal Linkes Ufer 43-45",
        "parent": "0.0.8.6.0.0.0"
    },
    {
        "question": "purchase price index",
        "description": "select a option",
        "id": "0.0.8.6.0.0.0.0.0",
        "options": [
            "0.0.8.6.0.0.0.0.0.0"
        ],
        "priceAffection": 1.3372875376321671,
        "priceAffectionType": "multiplication",
        "value": "Mannheim",
        "parent": "0.0.8.6.0.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.8.6.0.0.0.0.0.0",
        "options": [
            "0.0.8.6.0.0.0.0.0.0.0"
        ],
        "priceAffection": 7,
        "priceAffectionType": "addition",
        "value": "o. Euwid",
        "parent": "0.0.8.6.0.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.8.6.0.0.0.0.0.0.0",
        "options": [
            "0.0.8.6.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 8,
        "priceAffectionType": "addition",
        "value": "Kilogramm",
        "parent": "0.0.8.6.0.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.8.6.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.8.6.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 90,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.8.6.0.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.8.6.0.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.8.6.0.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.9634960062877307,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.8.6.0.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.8.6.0.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 0.8278834993376243,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.8.6.0.0.0.0.0.0.0.0.0"
    },
    {
        "question": "material type",
        "description": "select a option",
        "id": "0.0.9",
        "options": [
            "0.0.9.0"
        ],
        "priceAffection": 0.780576601477726,
        "priceAffectionType": "multiplication",
        "value": "Sortierkosten",
        "parent": "0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.9.0",
        "options": [
            "0.0.9.0.0"
        ],
        "priceAffection": 0.8729916130535844,
        "priceAffectionType": "multiplication",
        "value": "Elektronikschrott gemischt",
        "parent": "0.0.9"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.9.0.0",
        "options": [
            "0.0.9.0.0.0"
        ],
        "priceAffection": 1.2042132150530689,
        "priceAffectionType": "multiplication",
        "value": "ohne",
        "parent": "0.0.9.0"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.9.0.0.0",
        "options": [
            "0.0.9.0.0.0.0"
        ],
        "priceAffection": 1.243195569555055,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.9.0.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.9.0.0.0.0",
        "options": [
            "0.0.9.0.0.0.0.0"
        ],
        "priceAffection": 77,
        "priceAffectionType": "addition",
        "value": "Knettenbrech + Gurdulic Rhein Neckar GmbH",
        "parent": "0.0.9.0.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.9.0.0.0.0.0",
        "options": [
            "0.0.9.0.0.0.0.0.0"
        ],
        "priceAffection": 0.5925394143996854,
        "priceAffectionType": "multiplication",
        "value": "Verbindungskanal Linkes Ufer 43-45",
        "parent": "0.0.9.0.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.9.0.0.0.0.0.0",
        "options": [
            "0.0.9.0.0.0.0.0.0.0"
        ],
        "priceAffection": 6,
        "priceAffectionType": "addition",
        "value": "Mannheim",
        "parent": "0.0.9.0.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.9.0.0.0.0.0.0.0",
        "options": [
            "0.0.9.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.2948302875425564,
        "priceAffectionType": "multiplication",
        "value": "Stück",
        "parent": "0.0.9.0.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.9.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.9.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.044270881997978,
        "priceAffectionType": "multiplication",
        "value": "Y",
        "parent": "0.0.9.0.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.9.0.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.9.0.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 66,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.9.0.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.9.0.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 1.0793550446000426,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.9.0.0.0.0.0.0.0.0.0"
    },
    {
        "question": "material type",
        "description": "select a option",
        "id": "0.0.10",
        "options": [
            "0.0.10.0",
            "0.0.10.1",
            "0.0.10.2"
        ],
        "priceAffection": 77,
        "priceAffectionType": "addition",
        "value": "Transport Stück",
        "parent": "0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.10.0",
        "options": [
            "0.0.10.0.0"
        ],
        "priceAffection": 0.7033208296781506,
        "priceAffectionType": "multiplication",
        "value": "Kühl-/Gefriergeräte Stück",
        "parent": "0.0.10"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.10.0.0",
        "options": [
            "0.0.10.0.0.0"
        ],
        "priceAffection": 1.3095141389300406,
        "priceAffectionType": "multiplication",
        "value": "Euro-Pool Tauschpalette",
        "parent": "0.0.10.0"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.10.0.0.0",
        "options": [
            "0.0.10.0.0.0.0"
        ],
        "priceAffection": 27,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.10.0.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.10.0.0.0.0",
        "options": [
            "0.0.10.0.0.0.0.0"
        ],
        "priceAffection": 1.3037703898922564,
        "priceAffectionType": "multiplication",
        "value": "Interzero Circular Solutions Germany GmbH",
        "parent": "0.0.10.0.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.10.0.0.0.0.0",
        "options": [
            "0.0.10.0.0.0.0.0.0"
        ],
        "priceAffection": 1.11621051626444,
        "priceAffectionType": "multiplication",
        "value": "Stollwerckstr. 9 a",
        "parent": "0.0.10.0.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.10.0.0.0.0.0.0",
        "options": [
            "0.0.10.0.0.0.0.0.0.0"
        ],
        "priceAffection": 63,
        "priceAffectionType": "addition",
        "value": "Köln",
        "parent": "0.0.10.0.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.10.0.0.0.0.0.0.0",
        "options": [
            "0.0.10.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.0980166563409064,
        "priceAffectionType": "multiplication",
        "value": "Stück",
        "parent": "0.0.10.0.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.10.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.10.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 25,
        "priceAffectionType": "addition",
        "value": "Y",
        "parent": "0.0.10.0.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.10.0.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.10.0.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 80,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.10.0.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.10.0.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 0.9294981444577262,
        "priceAffectionType": "multiplication",
        "value": "Y",
        "parent": "0.0.10.0.0.0.0.0.0.0.0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.10.1",
        "options": [
            "0.0.10.1.0"
        ],
        "priceAffection": 1.4038593613818084,
        "priceAffectionType": "multiplication",
        "value": "Elektronikschrott gemischt",
        "parent": "0.0.10"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.10.1.0",
        "options": [
            "0.0.10.1.0.0"
        ],
        "priceAffection": 0.8090738043905816,
        "priceAffectionType": "multiplication",
        "value": "Gitterbox 800 Liter",
        "parent": "0.0.10.1"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.10.1.0.0",
        "options": [
            "0.0.10.1.0.0.0"
        ],
        "priceAffection": 45,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.10.1.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.10.1.0.0.0",
        "options": [
            "0.0.10.1.0.0.0.0"
        ],
        "priceAffection": 45,
        "priceAffectionType": "addition",
        "value": "Interzero Deposit Solutions GmbH",
        "parent": "0.0.10.1.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.10.1.0.0.0.0",
        "options": [
            "0.0.10.1.0.0.0.0.0"
        ],
        "priceAffection": 0.6974289597766041,
        "priceAffectionType": "multiplication",
        "value": "Stollwerckstr. 9 a",
        "parent": "0.0.10.1.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.10.1.0.0.0.0.0",
        "options": [
            "0.0.10.1.0.0.0.0.0.0"
        ],
        "priceAffection": 1.0802516434036,
        "priceAffectionType": "multiplication",
        "value": "Köln",
        "parent": "0.0.10.1.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.10.1.0.0.0.0.0.0",
        "options": [
            "0.0.10.1.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.667918865155662,
        "priceAffectionType": "multiplication",
        "value": "Stück",
        "parent": "0.0.10.1.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.10.1.0.0.0.0.0.0.0",
        "options": [
            "0.0.10.1.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.9151729530069534,
        "priceAffectionType": "multiplication",
        "value": "Y",
        "parent": "0.0.10.1.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.10.1.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.10.1.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 97,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.10.1.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.10.1.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 22,
        "priceAffectionType": "addition",
        "value": "Y",
        "parent": "0.0.10.1.0.0.0.0.0.0.0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.10.2",
        "options": [
            "0.0.10.2.0"
        ],
        "priceAffection": 0.8042163851898865,
        "priceAffectionType": "multiplication",
        "value": "Mischholz",
        "parent": "0.0.10"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.10.2.0",
        "options": [
            "0.0.10.2.0.0"
        ],
        "priceAffection": 0.5201912400079083,
        "priceAffectionType": "multiplication",
        "value": "Abrollkipper-Mulde 40 cbm",
        "parent": "0.0.10.2"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.10.2.0.0",
        "options": [
            "0.0.10.2.0.0.0"
        ],
        "priceAffection": 0.9369113558858795,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.10.2.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.10.2.0.0.0",
        "options": [
            "0.0.10.2.0.0.0.0"
        ],
        "priceAffection": 0.6783430744313697,
        "priceAffectionType": "multiplication",
        "value": "Knettenbrech + Gurdulic Rhein Neckar GmbH",
        "parent": "0.0.10.2.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.10.2.0.0.0.0",
        "options": [
            "0.0.10.2.0.0.0.0.0"
        ],
        "priceAffection": 52,
        "priceAffectionType": "addition",
        "value": "Hansastr. 31",
        "parent": "0.0.10.2.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.10.2.0.0.0.0.0",
        "options": [
            "0.0.10.2.0.0.0.0.0.0"
        ],
        "priceAffection": 29,
        "priceAffectionType": "addition",
        "value": "Karlsruhe",
        "parent": "0.0.10.2.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.10.2.0.0.0.0.0.0",
        "options": [
            "0.0.10.2.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.7826495176864194,
        "priceAffectionType": "multiplication",
        "value": "Stück",
        "parent": "0.0.10.2.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.10.2.0.0.0.0.0.0.0",
        "options": [
            "0.0.10.2.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.7717505934705688,
        "priceAffectionType": "multiplication",
        "value": "Y",
        "parent": "0.0.10.2.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.10.2.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.10.2.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 8,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.10.2.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.10.2.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 0.5463336856861607,
        "priceAffectionType": "multiplication",
        "value": "Y",
        "parent": "0.0.10.2.0.0.0.0.0.0.0.0"
    },
    {
        "question": "material type",
        "description": "select a option",
        "id": "0.0.11",
        "options": [
            "0.0.11.0",
            "0.0.11.1",
            "0.0.11.2",
            "0.0.11.3",
            "0.0.11.4"
        ],
        "priceAffection": 1.1631449349474934,
        "priceAffectionType": "multiplication",
        "value": "Verwertung",
        "parent": "0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.11.0",
        "options": [
            "0.0.11.0.0"
        ],
        "priceAffection": 34,
        "priceAffectionType": "addition",
        "value": "Kühl-/Gefriergeräte Stück",
        "parent": "0.0.11"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.11.0.0",
        "options": [
            "0.0.11.0.0.0"
        ],
        "priceAffection": 17,
        "priceAffectionType": "addition",
        "value": "Euro-Pool Tauschpalette",
        "parent": "0.0.11.0"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.11.0.0.0",
        "options": [
            "0.0.11.0.0.0.0"
        ],
        "priceAffection": 1.3630598460246859,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.11.0.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.11.0.0.0.0",
        "options": [
            "0.0.11.0.0.0.0.0"
        ],
        "priceAffection": 0.5474799536089139,
        "priceAffectionType": "multiplication",
        "value": "Interzero Circular Solutions Germany GmbH",
        "parent": "0.0.11.0.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.11.0.0.0.0.0",
        "options": [
            "0.0.11.0.0.0.0.0.0"
        ],
        "priceAffection": 60,
        "priceAffectionType": "addition",
        "value": "Stollwerckstr. 9 a",
        "parent": "0.0.11.0.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.11.0.0.0.0.0.0",
        "options": [
            "0.0.11.0.0.0.0.0.0.0"
        ],
        "priceAffection": 17,
        "priceAffectionType": "addition",
        "value": "Köln",
        "parent": "0.0.11.0.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.11.0.0.0.0.0.0.0",
        "options": [
            "0.0.11.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.4053474380353081,
        "priceAffectionType": "multiplication",
        "value": "Stück",
        "parent": "0.0.11.0.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.11.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.11.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.8669234044810017,
        "priceAffectionType": "multiplication",
        "value": "Y",
        "parent": "0.0.11.0.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.11.0.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.11.0.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 42,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.11.0.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.11.0.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 0.7634829536562795,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.11.0.0.0.0.0.0.0.0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.11.1",
        "options": [
            "0.0.11.1.0"
        ],
        "priceAffection": 1.366381254812906,
        "priceAffectionType": "multiplication",
        "value": "Elektronikschrott gemischt",
        "parent": "0.0.11"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.11.1.0",
        "options": [
            "0.0.11.1.0.0"
        ],
        "priceAffection": 1.330112380946295,
        "priceAffectionType": "multiplication",
        "value": "Gitterbox 1,5 cbm",
        "parent": "0.0.11.1"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.11.1.0.0",
        "options": [
            "0.0.11.1.0.0.0"
        ],
        "priceAffection": 83,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.11.1.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.11.1.0.0.0",
        "options": [
            "0.0.11.1.0.0.0.0"
        ],
        "priceAffection": 5,
        "priceAffectionType": "addition",
        "value": "Interzero Deposit Solutions GmbH",
        "parent": "0.0.11.1.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.11.1.0.0.0.0",
        "options": [
            "0.0.11.1.0.0.0.0.0"
        ],
        "priceAffection": 0.642065445210289,
        "priceAffectionType": "multiplication",
        "value": "Stollwerckstr. 9 a",
        "parent": "0.0.11.1.0.0.0"
    },
    {
        "question": "purchase price index",
        "description": "select a option",
        "id": "0.0.11.1.0.0.0.0.0",
        "options": [
            "0.0.11.1.0.0.0.0.0.0"
        ],
        "priceAffection": 0.8102575621913946,
        "priceAffectionType": "multiplication",
        "value": "Köln",
        "parent": "0.0.11.1.0.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.11.1.0.0.0.0.0.0",
        "options": [
            "0.0.11.1.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.2033885716055324,
        "priceAffectionType": "multiplication",
        "value": "LME Alu 50 %",
        "parent": "0.0.11.1.0.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.11.1.0.0.0.0.0.0.0",
        "options": [
            "0.0.11.1.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1,
        "priceAffectionType": "addition",
        "value": "Kilogramm",
        "parent": "0.0.11.1.0.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.11.1.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.11.1.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.5264468666797679,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.11.1.0.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.11.1.0.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.11.1.0.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 50,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.11.1.0.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.11.1.0.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 71,
        "priceAffectionType": "addition",
        "value": "Y",
        "parent": "0.0.11.1.0.0.0.0.0.0.0.0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.11.2",
        "options": [
            "0.0.11.2.0"
        ],
        "priceAffection": 87,
        "priceAffectionType": "addition",
        "value": "Energiesparlampen / LEDs",
        "parent": "0.0.11"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.11.2.0",
        "options": [
            "0.0.11.2.0.0"
        ],
        "priceAffection": 1.1025451624859484,
        "priceAffectionType": "multiplication",
        "value": "Spannringdeckelfass 120 Liter",
        "parent": "0.0.11.2"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.11.2.0.0",
        "options": [
            "0.0.11.2.0.0.0"
        ],
        "priceAffection": 0.631967625684178,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.11.2.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.11.2.0.0.0",
        "options": [
            "0.0.11.2.0.0.0.0"
        ],
        "priceAffection": 0.8969877993210442,
        "priceAffectionType": "multiplication",
        "value": "Interzero Deposit Solutions GmbH",
        "parent": "0.0.11.2.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.11.2.0.0.0.0",
        "options": [
            "0.0.11.2.0.0.0.0.0"
        ],
        "priceAffection": 1.1703976320342813,
        "priceAffectionType": "multiplication",
        "value": "Stollwerckstr. 9 a",
        "parent": "0.0.11.2.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.11.2.0.0.0.0.0",
        "options": [
            "0.0.11.2.0.0.0.0.0.0"
        ],
        "priceAffection": 1.3230515939964442,
        "priceAffectionType": "multiplication",
        "value": "Köln",
        "parent": "0.0.11.2.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.11.2.0.0.0.0.0.0",
        "options": [
            "0.0.11.2.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.7284295440202369,
        "priceAffectionType": "multiplication",
        "value": "Stück",
        "parent": "0.0.11.2.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.11.2.0.0.0.0.0.0.0",
        "options": [
            "0.0.11.2.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.4435799069874418,
        "priceAffectionType": "multiplication",
        "value": "Y",
        "parent": "0.0.11.2.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.11.2.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.11.2.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.7998091722098339,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.11.2.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.11.2.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 51,
        "priceAffectionType": "addition",
        "value": "Y",
        "parent": "0.0.11.2.0.0.0.0.0.0.0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.11.3",
        "options": [
            "0.0.11.3.0"
        ],
        "priceAffection": 42,
        "priceAffectionType": "addition",
        "value": "gemischte Siedlungsabfälle",
        "parent": "0.0.11"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.11.3.0",
        "options": [
            "0.0.11.3.0.0"
        ],
        "priceAffection": 0.5371084485623949,
        "priceAffectionType": "multiplication",
        "value": "Abrollkipper-Mulde 20 cbm",
        "parent": "0.0.11.3"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.11.3.0.0",
        "options": [
            "0.0.11.3.0.0.0"
        ],
        "priceAffection": 1.09049672484116,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.11.3.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.11.3.0.0.0",
        "options": [
            "0.0.11.3.0.0.0.0"
        ],
        "priceAffection": 1.3143762751247272,
        "priceAffectionType": "multiplication",
        "value": "Knettenbrech + Gurdulic Rhein Neckar GmbH",
        "parent": "0.0.11.3.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.11.3.0.0.0.0",
        "options": [
            "0.0.11.3.0.0.0.0.0"
        ],
        "priceAffection": 0.5939221314537948,
        "priceAffectionType": "multiplication",
        "value": "Verbindungskanal Linkes Ufer 43-45",
        "parent": "0.0.11.3.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.11.3.0.0.0.0.0",
        "options": [
            "0.0.11.3.0.0.0.0.0.0"
        ],
        "priceAffection": 51,
        "priceAffectionType": "addition",
        "value": "Mannheim",
        "parent": "0.0.11.3.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.11.3.0.0.0.0.0.0",
        "options": [
            "0.0.11.3.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.7735236439493673,
        "priceAffectionType": "multiplication",
        "value": "Kilogramm",
        "parent": "0.0.11.3.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.11.3.0.0.0.0.0.0.0",
        "options": [
            "0.0.11.3.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 0.7620883405022618,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.11.3.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.11.3.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.11.3.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.0775340279815455,
        "priceAffectionType": "multiplication",
        "value": "Y",
        "parent": "0.0.11.3.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.11.3.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 72,
        "priceAffectionType": "addition",
        "value": "N",
        "parent": "0.0.11.3.0.0.0.0.0.0.0.0"
    },
    {
        "question": "collection system",
        "description": "select a option",
        "id": "0.0.11.4",
        "options": [
            "0.0.11.4.0"
        ],
        "priceAffection": 1.4146277117189774,
        "priceAffectionType": "multiplication",
        "value": "Aktenvernichtung",
        "parent": "0.0.11"
    },
    {
        "question": "cycle",
        "description": "select a option",
        "id": "0.0.11.4.0",
        "options": [
            "0.0.11.4.0.0"
        ],
        "priceAffection": 31,
        "priceAffectionType": "addition",
        "value": "Daten-Sicherheitsbehälter 240 cbm",
        "parent": "0.0.11.4"
    },
    {
        "question": "supplier name",
        "description": "select a option",
        "id": "0.0.11.4.0.0",
        "options": [
            "0.0.11.4.0.0.0"
        ],
        "priceAffection": 0.6787092999964732,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.11.4.0"
    },
    {
        "question": "supplier street",
        "description": "select a option",
        "id": "0.0.11.4.0.0.0",
        "options": [
            "0.0.11.4.0.0.0.0"
        ],
        "priceAffection": 26,
        "priceAffectionType": "addition",
        "value": "documentus GmbH Stuttgart",
        "parent": "0.0.11.4.0.0"
    },
    {
        "question": "supplier city",
        "description": "select a option",
        "id": "0.0.11.4.0.0.0.0",
        "options": [
            "0.0.11.4.0.0.0.0.0"
        ],
        "priceAffection": 14,
        "priceAffectionType": "addition",
        "value": "Eisentalstraße 6",
        "parent": "0.0.11.4.0.0.0"
    },
    {
        "question": "uom",
        "description": "select a option",
        "id": "0.0.11.4.0.0.0.0.0",
        "options": [
            "0.0.11.4.0.0.0.0.0.0"
        ],
        "priceAffection": 0.8148934979756806,
        "priceAffectionType": "multiplication",
        "value": "Waiblingen",
        "parent": "0.0.11.4.0.0.0.0"
    },
    {
        "question": "flat rate",
        "description": "select a option",
        "id": "0.0.11.4.0.0.0.0.0.0",
        "options": [
            "0.0.11.4.0.0.0.0.0.0.0"
        ],
        "priceAffection": 29,
        "priceAffectionType": "addition",
        "value": "Kilogramm",
        "parent": "0.0.11.4.0.0.0.0.0"
    },
    {
        "question": "weighing",
        "description": "select a option",
        "id": "0.0.11.4.0.0.0.0.0.0.0",
        "options": [
            "0.0.11.4.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 1.2771704104301649,
        "priceAffectionType": "multiplication",
        "value": "N",
        "parent": "0.0.11.4.0.0.0.0.0.0"
    },
    {
        "question": "MessEG konform?",
        "description": "select a option",
        "id": "0.0.11.4.0.0.0.0.0.0.0.0",
        "options": [
            "0.0.11.4.0.0.0.0.0.0.0.0.0"
        ],
        "priceAffection": 70,
        "priceAffectionType": "addition",
        "value": "Y",
        "parent": "0.0.11.4.0.0.0.0.0.0.0"
    },
    {
        "question": "Purchase price/uom",
        "description": "select a option",
        "id": "0.0.11.4.0.0.0.0.0.0.0.0.0",
        "options": [],
        "priceAffection": 1.0900768129398068,
        "priceAffectionType": "multiplication",
        "value": "Y",
        "parent": "0.0.11.4.0.0.0.0.0.0.0.0"
    }
]

window.onload = () => {
  const element = document.querySelector("iz-pmp-flow-content");
  element.data = FakeData;
  element.root = FakeData[0];
};
