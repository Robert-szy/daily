import Axios from 'axios';

/* selectors */
export const getAllOrders = ({ orders }) => orders;
export const getCountOrders = ({ orders }) => orders.length;

// action name creator
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
// export const CHANGE_WEIGHT_VALUE_IN_DB = createActionName('CHANGE_WEIGHT_VALUE_IN_DB');
// export const CHANGE_WEIGHT_VALUE_ERROR = createActionName('CHANGE_WEIGHT_VALUE_ERROR');

// export const CHANGE_LAYER_VALUE_IN_DB = createActionName('CHANGE_LAYER_VALUE_IN_DB');
// export const CHANGE_LAYER_VALUE_ERROR = createActionName('CHANGE_LAYER_VALUE_ERROR');

export const FETCH_ORDERS_FROM_API = createActionName('FETCH_ORDERS_FROM_API');
export const FETCH_START = createActionName('FETCH_START');
export const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
export const FETCH_ORDERS_ERROR = createActionName('FETCH_ORDERS_ERROR');

// action creators
// export const changeWeightValueInDB = payload => ({ payload, type: CHANGE_WEIGHT_VALUE_IN_DB });
// export const changeWeightValueError = payload => ({payload, type: CHANGE_WEIGHT_VALUE_ERROR});

// export const changeLayerValueInDB = payload => ({ payload, type: CHANGE_LAYER_VALUE_IN_DB });
// export const changeLayerValueError = payload => ({payload, type: CHANGE_LAYER_VALUE_ERROR});

export const fetchOrdersFromAPI = payload => ({ payload, type: FETCH_ORDERS_FROM_API });
export const fetchStart = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchOrdersError = payload => ({ payload, type: FETCH_ORDERS_ERROR });

/* thunk creators */
export const fetchOrders = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    Axios
      .get('http://localhost:8000/api/orders')
      .then(res => {
        dispatch(fetchOrdersFromAPI(res.data.orders));
      })
      .catch(err => {
        dispatch(fetchOrdersError(err.message || true));
      });
  };
};

// export const changeWeightValue = (data) => {
//   return (dispatch) => {
//     Axios
//       .put(`http://localhost:8000/api/orders/${data.id}`, {weightValue: data.newWeightValue})
//       .then(res => {
//         dispatch(changeOrderInDB(data));
//       })
//       .catch(err => {
//         dispatch(changeOrderError(err.message || true));
//       });
//   };
// };

// export const changeLayerValue = (data) => {
//   return (dispatch) => {
//     Axios
//       .put(`http://localhost:8000/api/weights/${data.id}`, {weightLayers: data.newWeightLayers})
//       .then(res => {
//         dispatch(changeLayerValueInDB(data));
//       })
//       .catch(err => {
//         dispatch(changeLayerValueError(err.message || true));
//       });
//   };
// };

/* reducer */
export default function reducer(statePart = [], action = []) {
  switch (action.type) {
    // case CHANGE_WEIGHT_VALUE_IN_DB: {
    //   const { id, newWeightValue } = action.payload;
    //   return {
    //     ...statePart,
    //     weights: statePart.weights.map(weights => {
    //       if (weights._id !== id) {
    //         return weights;
    //       }
    //       return {
    //         ...weights,
    //         weightValue: newWeightValue,
    //       };
    //     }),
    //   };
    // }
    // case CHANGE_WEIGHT_VALUE_ERROR: {
    //   return {
    //     ...statePart,
    //     loading: {
    //       active: false,
    //       error: action.payload,
    //     },
    //   };
    // }

    // case CHANGE_LAYER_VALUE_IN_DB: {
    //   const { id, newWeightLayers } = action.payload;
    //   return {
    //     ...statePart,
    //     weights: statePart.weights.map(weights => {
    //       if (weights._id !== id) {
    //         return weights;
    //       }
    //       return {
    //         ...weights,
    //         weightLayers: newWeightLayers,
    //       };
    //     }),
    //   };
    // }
    // case CHANGE_LAYER_VALUE_ERROR: {
    //   return {
    //     ...statePart,
    //     loading: {
    //       active: false,
    //       error: action.payload,
    //     },
    //   };
    // }

    case FETCH_ORDERS_FROM_API:
      return {
        orders: action.payload,
      };
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        orders: action.payload,
      };
    }
    case FETCH_ORDERS_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}
