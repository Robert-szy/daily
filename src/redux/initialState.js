const initialState = {

  multipliers: {
    sugarMultiply: 0.9,
    fatMultiply: 0.05,
    acidMultiply: 0.02,
    jellyProteinMultiply: 0.58,
    foamProteinMultiply: 0.65,
    syrupMultiply: 0.43,
    appleMultiply: 0.003,
    lemonMultiply: 0.0013,
    orangeMultiply: 0.004,
    raspberryMultiply: 0.004,
    cherryMultiply: 0.002,
    vanillaMultiply: 0.75,
    kiwiMultiply: 0.005,
    waterMultiply: 0.55,
    agarSummerMultiply: 0.017,
    agarWinterMultiply: 0.014,
  },

  pots: {
    smallPot: 22,
    bigPot: 38,
    mediumPot: 30,
    doubleSmallPot: 42,
  },

  weights: {
    babeczki: [1, 0, 0, 4, 4, 0],
    baton1: [56, 10, 4.5, 12, 4.5, 14],
    baton2: [30, 8, 3.7, 10, 3.7, 12],
    danusia: [5, 6.5, 3, 6.5, 3, 6.5],
    kosteczka: [2, 2, 1.5, 4, 1.5, 2],
    mini: [1, 3.5, 2.5, 8.5, 0, 0],
    owocowa: [1, 0, 0, 10, 0, 0],
    pianka: [1, 10, 12, 0, 0, 0],
    slomka: [6, 4.5, 2.5, 4.5, 1.3, 4.5],
    weronki: [1, 4, 3, 10, 0, 0],
    zwijana: [1, 1, 1, 0, 0, 0],
  },

  orders: [
    {
      Data: '2021-05-01T22:00:00Z',
      B1: 0,
      B2: 0,
      Danusia: 0,
      Slomka: 0,
      Kostka: 0,
      Weronki: 0,
      Babeczki: 0,
      Kolor: 0,
      Pianka: 0,
      BC: 0,
      BJ: 0,
      BCM: 0,
      BJM: 0,
    },
  ],

  portions: [
    {
      Data: '2021-05-01T22:00:00Z',
      Porcja1: [],
      Porcja2: [],
      Porcja3: [],
      Porcja4: [],
      Porcja5: [],
      Porcja6: [],
      Porcja7: [],
      Porcja8: [],
    },
  ],

};

export default initialState;
