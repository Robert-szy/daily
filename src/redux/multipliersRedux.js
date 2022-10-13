import Axios from 'axios';

/* selectors */
export const getAllMultipliers = ({ multipliers }) => multipliers;
export const getCountMultipliers = ({ multipliers }) => multipliers.length;

// action name creator
const reducerName = 'multipliers';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_MULTIPLIER_IN_DB = createActionName('CHANGE_MULTIPLIER_IN_DB');
export const CHANGE_MULTIPLIER_ERROR = createActionName('CHANGE_MULTIPLIER_ERROR');

export const FETCH_MULTIPLIERS_FROM_API = createActionName('FETCH_MULTIPLIERS_FROM_API');
export const FETCH_START = createActionName('FETCH_START');
export const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
export const FETCH_MULTIPLIERS_ERROR = createActionName('FETCH_MULTIPLIERS_ERROR');

// action creators
export const changeMultiplierInDB = payload => ({payload, type: CHANGE_MULTIPLIER_IN_DB });
export const changeMultiplierError = payload => ({ payload, type: CHANGE_MULTIPLIER_ERROR });

export const fetchMultipliersFromAPI = payload => ({ payload, type: FETCH_MULTIPLIERS_FROM_API });
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchMultipliersError = payload => ({ payload, type: FETCH_MULTIPLIERS_ERROR });

/* thunk creators */
export const fetchMultipliers = () => {
  return (dispatch) => {
    dispatch(fetchStarted());
    Axios
      .get('http://localhost:8000/api/multipliers')
      .then(res => {
        dispatch(fetchMultipliersFromAPI(res.data.multipliers));
      })
      .catch(err => {
        dispatch(fetchMultipliersError(err.message || true));
      });
  };
};

export const changeMultiplier = (data) => {
  return (dispatch) => {
    Axios
      .put(`http://localhost:8000/api/multipliers/${data.id}`, {multiplierValue: data.newMultiplierValue})
      .then(res => {
        dispatch(changeMultiplierInDB(data));
      })
      .catch(err => {
        dispatch(changeMultiplierError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = []) {
  switch (action.type) {
    case CHANGE_MULTIPLIER_IN_DB: {
      const { id, newMultiplierValue } = action.payload;
      return {
        ...statePart,
        multipliers: statePart.multipliers.map(multipliers => {
          if (multipliers._id !== id) {
            return multipliers;
          }
          return {
            ...multipliers,
            multiplierValue: newMultiplierValue,
          };
        }),
      };
    }
    case CHANGE_MULTIPLIER_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
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


