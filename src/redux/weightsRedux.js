import Axios from 'axios';

/* selectors */
export const getAllWeights = ({ weights }) => weights;
export const getCountWeights = ({ weights }) => weights.length;

// action name creator
const reducerName = 'weight';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_WEIGHT = createActionName('CHANGE_WEIGHT');

export const FETCH_WEIGHTS_FROM_API = createActionName('FETCH_WEIGHTS_FROM_API');
export const FETCH_START = createActionName('FETCH_START');
export const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
export const FETCH_WEIGHTS_ERROR = createActionName('FETCH_POTS_ERROR');

// action creators
export const createActionChangePot = payload => ({ payload: { ...payload }, type: CHANGE_WEIGHT });

export const fetchWeightsFromAPI = payload => ({ payload, type: FETCH_WEIGHTS_FROM_API });
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchWeightsError = payload => ({ payload, type: FETCH_WEIGHTS_ERROR });

/* thunk creators */
export const fetchWeights = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    Axios
      .get('http://localhost:8000/api/weights')
      .then(res => {
        dispatch(fetchWeightsFromAPI(res.data.weights));
      })
      .catch(err => {
        dispatch(fetchWeightsError(err.message || true));
      });
  };
};


/* reducer */
export default function reducer(statePart = [], action = []) {
  switch (action.type) {
    case CHANGE_WEIGHT:
      return [...statePart, action.payload];
    case FETCH_WEIGHTS_FROM_API:
      return {
        weights: action.payload,
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
        weights: action.payload,
      };
    }
    case FETCH_WEIGHTS_ERROR: {
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



