import Axios from 'axios';

/* selectors */
export const getAllPots = ({ pots }) => pots;
export const getCountPots = ({ pots }) => pots.length;

// action name creator
const reducerName = 'pots';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_POT_IN_DB = createActionName('CHANGE_POT_IN_DB');
export const CHANGE_POT_ERROR = createActionName('CHANGE_POT_ERROR');


export const FETCH_POTS_FROM_API = createActionName('FETCH_POTS_FROM_API');
export const FETCH_START = createActionName('FETCH_START');
export const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
export const FETCH_POTS_ERROR = createActionName('FETCH_POTS_ERROR');

// action creators
export const changePotInDB = payload => ({ payload: { ...payload }, type: CHANGE_POT_IN_DB });
export const changePotError = payload => ({ payload: { ...payload }, type: CHANGE_POT_ERROR });

export const fetchPotsFromAPI = payload => ({ payload, type: FETCH_POTS_FROM_API });
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchPotsError = payload => ({ payload, type: FETCH_POTS_ERROR });

/* thunk creators */
export const fetchPots = () => {
  return (dispatch) => {
    dispatch(fetchStarted());
    Axios
      .get('http://localhost:8000/api/pots')
      .then(res => {
        dispatch(fetchPotsFromAPI(res.data.pots));
      })
      .catch(err => {
        dispatch(fetchPotsError(err.message || true));
      });
  };
};

export const changePot = (data) => {
  return (dispatch) => {
    Axios
      .put(`http://localhost:8000/api/pots/${data.id}`, {potValue: data.newPotValue})
      .then(res => {
        dispatch(changePotInDB(data));
      })
      .catch(err => {
        dispatch(changePotError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = []) {
  switch (action.type) {
    case CHANGE_POT_IN_DB: {
      const { id, newPotValue } = action.payload;
      return {
        ...statePart,
        pots: statePart.pots.map(pots => {
          if (pots._id !== id) {
            return pots;
          }
          return {
            ...pots,
            potValue: newPotValue,
          };
        }),
      };
    }
    case CHANGE_POT_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case FETCH_POTS_FROM_API:
      return {
        pots: action.payload,
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
        pots: action.payload,
      };
    }
    case FETCH_POTS_ERROR: {
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



