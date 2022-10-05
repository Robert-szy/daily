import Axios from 'axios';

/* selectors */
export const getAllMultipliers = ({ multipliers }) => multipliers;
export const getCountMultipliers = ({ multipliers }) => multipliers.length;

// action name creator
const reducerName = 'multipliers';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_MULTIPLIER = createActionName('CHANGE_MULTIPLIER');

export const FETCH_MULTIPLIERS_FROM_API = createActionName('FETCH_MULTIPLIERS_FROM_API');
export const FETCH_START = createActionName('FETCH_START');
export const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
export const FETCH_MULTIPLIERS_ERROR = createActionName('FETCH_MULTIPLIERS_ERROR');

// action creators
export const createActionChangeMultiplier = payload => ({ payload: { ...payload }, type: CHANGE_MULTIPLIER });

export const fetchMultipliersFromAPI = payload => ({ payload, type: FETCH_MULTIPLIERS_FROM_API });
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchMultipliersError = payload => ({ payload, type: FETCH_MULTIPLIERS_ERROR });

/* thunk creators */
export const fetchMultipliers = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    Axios
      .get('http://localhost:8000/api/multipliers')
      .then(res => {
        dispatch(fetchMultipliersFromAPI(res.data.multipliers));
        console.log('res.data', res.data.multipliers);
      })
      .catch(err => {
        dispatch(fetchMultipliersError(err.message || true));
      });
  };
};


/* reducer */
export default function reducer(statePart = [], action = []) {
  switch (action.type) {
    case CHANGE_MULTIPLIER:
      return [...statePart, action.payload];
    case FETCH_MULTIPLIERS_FROM_API:
      return {
        multipliers: action.payload,
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
        mutipliers: action.payload,
      };
    }
    case FETCH_MULTIPLIERS_ERROR: {
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


