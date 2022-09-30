// import Axios from 'axios';
// import { db } from '../../db';

/* selectors */
export const getAllMultipliers = ({ multipliers }) => multipliers;
export const getCountMultipliers = ({ multipliers }) => multipliers.length;

// action name creator
const reducerName = 'multipliers';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_MULTIPLIER = createActionName('CHANGE_MULTIPLIER');

// const FETCH_START = createActionName('FETCH_START');
// const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
// const FETCH_ERROR = createActionName('FETCH_ERROR');

// action creators
export const createActionChangeMultiplier = payload => ({ payload: { ...payload }, type: CHANGE_MULTIPLIER });

// export const fetchStarted = payload => ({ payload, type: FETCH_START });
// export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
// export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk creators */
// export const fetchFromAPI = () => {
//   return (dispatch, getState) => {
//     dispatch(fetchStarted());

//     Axios
//       .get(db.multipliers)
//       .then(res => {
//         dispatch(fetchSuccess(res.data));
//       })
//       .catch(err => {
//         dispatch(fetchError(err.message || true));
//       });
//   };
// };

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_MULTIPLIER:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}


