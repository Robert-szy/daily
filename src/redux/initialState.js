import { SIZE_TYPES } from '../screenSettings';

const initialState = {

  categories: [
    { id: '/multipliers', name: 'Mnożniki' },
    { id: '/weights', name: 'Współczynniki' },
    { id: '/pots', name: 'Garnki' },

  ],

  screenType: SIZE_TYPES.DESKTOP,

  multipliers: [
    {
      id: 'sugarMultiply',
      multiplierName: 'Cukier',
      multiplierValue: 0.9,
    },
    {
      id: 'fatMultiply',
      multiplierName: 'Tłuszcz',
      multiplierValue: 0.05,
    },
    {
      id: 'acidMultiply',
      multiplierName: 'Kwasek',
      multiplierValue: 0.02,
    },
    {
      id: 'jellyProteinMultiply',
      multiplierName: 'Białko w galarecie',
      multiplierValue: 0.58,
    },
    {
      id: 'foamProteinMultiply',
      multiplierName: 'Białko w piance',
      multiplierValue: 0.65,
    },
    {
      id: 'syrupMultiply',
      multiplierName: 'Syrop',
      multiplierValue: 0.43,
    },
    {
      id: 'agarSummerMultiply',
      multiplierName: 'Agar letni',
      multiplierValue: 0.017,
    },
    {
      id: 'agarWinterMultiply',
      multiplierName: 'Agar zimowy',
      multiplierValue: 0.014,
    },
    {
      id: 'waterMultiply',
      multiplierName: 'Woda',
      multiplierValue: 0.55,
    },
    {
      id: 'appleMultiply',
      multiplierName: 'Aromat jabłkowy',
      multiplierValue: 0.003,
    },
    {
      id: 'lemonMultiply',
      multiplierName: 'Aromat cytrynowy',
      multiplierValue: 0.0013,
    },
    {
      id: 'orangeMultiply',
      multiplierName: 'Aromat pomarańczowy',
      multiplierValue: 0.004,
    },
    {
      id: 'raspberryMultiply',
      multiplierName: 'Aromat malinowy',
      multiplierValue: 0.004,
    },
    {
      id: 'cherryMultiply',
      multiplierName: 'Aromat wiśniowy',
      multiplierValue: 0.002,
    },
    {
      id: 'vanillaMultiply',
      multiplierName: 'Aromat waniliowy',
      multiplierValue: 0.75,
    },
    {
      id: 'kiwiMultiply',
      multiplierName: 'Aromat kiwi',
      multiplierValue: 0.005,
    },
  ],

  pots: [
    {
      id: 'smallPot',
      potName: 'Mały',
      potValue: 22,

    },
    {
      id: 'mediumPot',
      potName: 'Średni',
      potValue: 30,
    },
    {
      id: 'bigPot',
      potName: 'Duży',
      potValue: 38,
    },
    {
      id: 'doubleSmallPot',
      potName: 'Podwójny mały',
      potValue: 42,
    },
  ],

  weights: [
    {
      id: 'babeczki',
      weightName: 'Babeczki',
      weightValue: 1,
      weightUnit: 'blach',
      weightLayers: [0, 0, 4, 4, 0],
    },
    {
      id: 'b1',
      weightName: 'B1',
      weightValue: 56,
      weightUnit: 'sztuk',
      weightLayers: [10, 4.5, 12, 4.5, 14],
    },
    {
      id: 'b2',
      weightName: 'B2',
      weightValue: 30,
      weightUnit: 'sztuk',
      weightLayers: [8, 3.7, 10, 3.7, 12],
    },
    {
      id: 'danusia',
      weightName: 'Danusia',
      weightValue: 5,
      weightUnit: 'blach',
      weightLayers: [6.5, 3, 6.5, 3, 6.5],
    },
    {
      id: 'kosteczka',
      weightName: 'Kosteczka',
      weightValue: 2,
      weightUnit: 'blach',
      weightLayers: [2, 1.5, 4, 1.5, 2],
    },
    {
      id: 'mini',
      weightName: 'Mini',
      weightValue: 1,
      weightUnit: 'blach',
      weightLayers: [3.5, 2.5, 8.5, 0, 0],
    },
    {
      id: 'owocowa',
      weightName: 'Owocowa',
      weightValue: 1,
      weightUnit: 'blach',
      weightLayers: [0, 0, 10, 0, 0],
    },
    {
      id: 'pianka',
      weightName: 'Pianka',
      weightValue: 1,
      weightUnit: 'blach',
      weightLayers: [10, 12, 0, 0, 0],
    },
    {
      id: 'slomka',
      weightName: 'Słomka',
      weightValue: 6,
      weightUnit: 'blach',
      weightLayers: [4.5, 2.5, 4.5, 1.3, 4.5],
    },
    {
      id: 'weronki',
      weightName: 'Weronki',
      weightValue: 1,
      weightUnit: 'partia',
      weightLayers: [4, 3, 10, 0, 0],
    },
    {
      id: 'zwijana',
      weightName: 'Zwijana',
      weightValue: 1,
      weightUnit: 'blach',
      weightLayers: [1, 1, 0, 0, 0],
    },
  ],

  orders: [
    {
      data: '2021/05/01',
      b1: 1,
      b2: 0,
      danusia: 0,
      slomka: 0,
      kostka: 7,
      weronki: 0,
      babeczki: 0,
      kolor: 0,
      pianka: 0,
      bc: 0,
      bj: 0,
      bcm: 0,
      bjm: 0,
      bcbc: 1,
      yola: 1,
    },
    {
      data: '2021/06/01',
      b1: 2,
      b2: 1,
      danusia: 22,
      slomka: 0,
      kostka: 0,
      weronki: 1,
      babeczki: 0,
      kolor: 0,
      pianka: 0,
      bc: 0,
      bj: 0,
      bcm: 0,
      bjm: 0,
      bcbc: 0,
      yola: 0,
    },
    {
      data: '2021/07/01',
      b1: 1,
      b2: 0,
      danusia: 0,
      slomka: 0,
      kostka: 7,
      weronki: 0,
      babeczki: 0,
      kolor: 0,
      pianka: 0,
      bc: 0,
      bj: 0,
      bcm: 0,
      bjm: 0,
      bcbc: 1,
      yola: 1,
    },
  ],

  portions: [
    {
      data: '2021/05/01',
      porcja1: [],
      porcja2: [],
      porcja3: [],
      porcja4: [],
      porcja5: [],
      porcja6: [],
      porcja7: [],
      porcja8: [],
    },
    {
      data: '2021/06/01',
      porcja1: [],
      porcja2: [1],
      porcja3: [],
      porcja4: [],
      porcja5: [],
      porcja6: [7],
      porcja7: [],
      porcja8: [],
    },
    {
      data: '2021/07/01',
      porcja1: [],
      porcja2: [1, 2, 2, 4, 3, 5, 23, 33, 11, 10, 5, 5, 11, 234, 15, 1, 17],
      porcja3: [],
      porcja4: [],
      porcja5: [],
      porcja6: [],
      porcja7: [],
      porcja8: [2],
    },
  ],

};

export default initialState;
