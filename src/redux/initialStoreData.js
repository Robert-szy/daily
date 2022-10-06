import { SIZE_TYPES } from '../screenSettings';


const categories = [
  { id: '/multipliers', name: 'Mnożniki' },
  { id: '/weights', name: 'Współczynniki' },
  { id: '/pots', name: 'Garnki' },

];

const screenType = SIZE_TYPES.DESKTOP;

const multipliers = [
  // {
  //   id: 'sugarMultiply',
  //   multiplierName: 'Cukier',
  //   multiplierValue: 0.9,
  // },
  // {
  //   id: 'fatMultiply',
  //   multiplierName: 'Tłuszcz',
  //   multiplierValue: 0.05,
  // },
  // {
  //   id: 'acidMultiply',
  //   multiplierName: 'Kwasek',
  //   multiplierValue: 0.02,
  // },
  // {
  //   id: 'jellyProteinMultiply',
  //   multiplierName: 'Białko w galarecie',
  //   multiplierValue: 0.58,
  // },
  // {
  //   id: 'foamProteinMultiply',
  //   multiplierName: 'Białko w piance',
  //   multiplierValue: 0.65,
  // },
  // {
  //   id: 'syrupMultiply',
  //   multiplierName: 'Syrop',
  //   multiplierValue: 0.43,
  // },
  // {
  //   id: 'agarSummerMultiply',
  //   multiplierName: 'Agar letni',
  //   multiplierValue: 0.017,
  // },
  // {
  //   id: 'agarWinterMultiply',
  //   multiplierName: 'Agar zimowy',
  //   multiplierValue: 0.014,
  // },
  // {
  //   id: 'waterMultiply',
  //   multiplierName: 'Woda',
  //   multiplierValue: 0.55,
  // },
  // {
  //   id: 'appleMultiply',
  //   multiplierName: 'Aromat jabłkowy',
  //   multiplierValue: 0.003,
  // },
  // {
  //   id: 'lemonMultiply',
  //   multiplierName: 'Aromat cytrynowy',
  //   multiplierValue: 0.0013,
  // },
  // {
  //   id: 'orangeMultiply',
  //   multiplierName: 'Aromat pomarańczowy',
  //   multiplierValue: 0.004,
  // },
  // {
  //   id: 'raspberryMultiply',
  //   multiplierName: 'Aromat malinowy',
  //   multiplierValue: 0.004,
  // },
  // {
  //   id: 'cherryMultiply',
  //   multiplierName: 'Aromat wiśniowy',
  //   multiplierValue: 0.002,
  // },
  // {
  //   id: 'vanillaMultiply',
  //   multiplierName: 'Aromat waniliowy',
  //   multiplierValue: 0.75,
  // },
  // {
  //   id: 'kiwiMultiply',
  //   multiplierName: 'Aromat kiwi',
  //   multiplierValue: 0.005,
  // },
];

const pots = [
  // {
  //   id: 'smallPot',
  //   potName: 'Mały',
  //   potValue: 22,

  // },
  // {
  //   id: 'mediumPot',
  //   potName: 'Średni',
  //   potValue: 30,
  // },
  // {
  //   id: 'bigPot',
  //   potName: 'Duży',
  //   potValue: 38,
  // },
  // {
  //   id: 'doubleSmallPot',
  //   potName: 'Podwójny mały',
  //   potValue: 42,
  // },
];

const weights = [
  // {
  //   id: 'babeczki',
  //   weightName: 'Babeczki',
  //   weightValue: 1,
  //   weightUnit: 'blach',
  //   weightLayers: [0, 0, 4, 4, 0],
  // },
  // {
  //   id: 'b1',
  //   weightName: 'B1',
  //   weightValue: 56,
  //   weightUnit: 'sztuk',
  //   weightLayers: [10, 4.5, 12, 4.5, 14],
  // },
  // {
  //   id: 'b2',
  //   weightName: 'B2',
  //   weightValue: 30,
  //   weightUnit: 'sztuk',
  //   weightLayers: [8, 3.7, 10, 3.7, 12],
  // },
  // {
  //   id: 'danusia',
  //   weightName: 'Danusia',
  //   weightValue: 5,
  //   weightUnit: 'blach',
  //   weightLayers: [6.5, 3, 6.5, 3, 6.5],
  // },
  // {
  //   id: 'kosteczka',
  //   weightName: 'Kosteczka',
  //   weightValue: 2,
  //   weightUnit: 'blach',
  //   weightLayers: [2, 1.5, 4, 1.5, 2],
  // },
  // {
  //   id: 'mini',
  //   weightName: 'Mini',
  //   weightValue: 1,
  //   weightUnit: 'blach',
  //   weightLayers: [3.5, 2.5, 8.5, 0, 0],
  // },
  // {
  //   id: 'owocowa',
  //   weightName: 'Owocowa',
  //   weightValue: 1,
  //   weightUnit: 'blach',
  //   weightLayers: [0, 0, 10, 0, 0],
  // },
  // {
  //   id: 'pianka',
  //   weightName: 'Pianka',
  //   weightValue: 1,
  //   weightUnit: 'blach',
  //   weightLayers: [10, 12, 0, 0, 0],
  // },
  // {
  //   id: 'slomka',
  //   weightName: 'Słomka',
  //   weightValue: 6,
  //   weightUnit: 'blach',
  //   weightLayers: [4.5, 2.5, 4.5, 1.3, 4.5],
  // },
  // {
  //   id: 'weronki',
  //   weightName: 'Weronki',
  //   weightValue: 1,
  //   weightUnit: 'partia',
  //   weightLayers: [4, 3, 10, 0, 0],
  // },
  // {
  //   id: 'zwijana',
  //   weightName: 'Zwijana',
  //   weightValue: 1,
  //   weightUnit: 'blach',
  //   weightLayers: [1, 1, 0, 0, 0],
  // },
];

const orders = [
  {
    data: '2021/05/01',
    b1: [1, 1, 2, 3, 4, 5, 6],
    b2: [1, 1, 2, 3, 4, 5, 6],
    danusia: [1, 1, 2, 3, 4, 5, 6],
    slomka: [1, 1, 2, 3, 4, 5, 6],
    kostka: [1, 1, 2, 3, 4, 5, 6],
    weronki: [1, 1, 2, 3, 4, 5, 6],
    mini: [1, 1, 2, 3, 4, 5, 6],
    babeczki: [1, 1, 2, 3, 4, 5, 6],
    kolor: [1, 1, 2, 3, 4, 5, 6],
    pianka: [1, 1, 2, 3, 4, 5, 6],
    bc: 0,
    bj: 0,
    bcm: 0,
    bjm: 0,
    bcbc: 1,
    yola: 1,
  },
  {
    data: '2021/06/01',
    b1: [1, 1, 2, 3, 4, 5, 6],
    b2: [1, 1, 2, 3, 4, 5, 6],
    danusia: [1, 1, 2, 3, 4, 5, 6],
    slomka: [1, 1, 2, 3, 4, 5, 6],
    kostka: [1, 1, 2, 3, 4, 5, 6],
    weronki: [1, 1, 2, 3, 4, 5, 6],
    mini: [1, 1, 2, 3, 4, 5, 6],
    babeczki: [1, 1, 2, 3, 4, 5, 6],
    kolor: [1, 1, 2, 3, 4, 5, 6],
    pianka: [1, 1, 2, 3, 4, 5, 6],
    bc: 0,
    bj: 0,
    bcm: 6,
    bjm: 1,
    bcbc: 3,
    yola: 6,
  },
  {
    data: '2021/07/01',
    b1: [1, 1, 2, 3, 4, 5, 6],
    b2: [1, 2, 2, 3, 4, 5, 6],
    danusia: [1, 3, 2, 3, 4, 5, 6],
    slomka: [1, 4, 2, 3, 4, 5, 6],
    kostka: [1, 5, 2, 3, 4, 5, 6],
    weronki: [1, 6, 2, 3, 4, 5, 6],
    mini: [1, 7, 2, 3, 4, 5, 6],
    babeczki: [1, 8, 2, 3, 4, 5, 6],
    kolor: [1, 9, 2, 3, 4, 5, 6],
    pianka: [1, 10, 2, 3, 4, 5, 6],
    bc: 6,
    bj: 6,
    bcm: 1,
    bjm: 1,
    bcbc: 1,
    yola: 1,
  },
];

const portions = [
  {
    data: '2021/05/01',
    porcja1: [1,5,1,1,1,1,1,1,1,10,1,1,1,1,15],
    porcja2: [2,5,2,4,3,5,23,33,11,10,5,5,11,234,15],
    porcja3: [3,5,1,1,1,1,1,1,1,10,1,1,1,1,15],
    porcja4: [4,5,1,1,1,1,1,1,1,10,1,1,1,1,15],
    porcja5: [5,5,1,1,1,1,1,1,1,10,1,1,1,1,15],
    porcja6: [6,5,1,1,1,1,1,1,1,10,1,1,1,1,15],
    porcja7: [7,5,1,1,1,1,1,1,1,10,1,1,1,1,15],
    porcja8: [8,5,1,1,1,1,1,1,1,10,1,1,1,1,15],
  },
  {
    data: '2021/06/01',
    porcja1: [1,6,1,1,1,1,1,1,1,10,1,1,1,1,15],
    porcja2: [1,6,2,2,4,3,5,23,33,11,10,5,5,11,234,15],
    porcja3: [3,6,1,1,1,1,1,1,1,10,1,1,1,1,15],
    porcja4: [4,6,1,1,1,1,1,1,1,10,1,1,1,1,15],
    porcja5: [5,6,1,1,1,1,1,1,1,10,1,1,1,1,15],
    porcja6: [6,6,1,1,1,1,1,1,1,10,1,1,1,1,15],
    porcja7: [7,6,1,1,1,1,1,1,1,10,1,1,1,1,15],
    porcja8: [8,6,1,1,1,1,1,1,1,10,1,1,1,1,15],
  },
  {
    data: '2021/07/01',
    porcja1: [1,7,1,1,1,1,1,1,1,10,1,1,1,1,15],
    porcja2: [1,7,2,4,3,5,23,33,11,10,5,5,11,234,15],
    porcja3: [3,7,1,1,1,1,1,1,1,10,1,1,1,1,15],
    porcja4: [4,7,1,1,1,1,1,1,1,10,1,1,1,1,15],
    porcja5: [5,7,1,1,1,1,1,1,1,10,1,1,1,1,15],
    porcja6: [6,7,1,1,1,1,1,1,1,10,1,1,1,1,15],
    porcja7: [7,7,1,1,1,1,1,1,1,10,1,1,1,1,15],
    porcja8: [8,7,1,1,1,1,1,1,1,10,1,1,1,1,15],
  },
];


const initialStore = {
  categories: [...categories],
  screenType: screenType,
  multipliers: [...multipliers],
  pots: [...pots],
  weights: [...weights],
  orders: [...orders],
  portions: [...portions],
};

export default initialStore;
