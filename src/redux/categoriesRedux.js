import Axios from 'axios';

/* selectors */
export const getAllCat = ({ categories }) => categories;
export const getCount = ({ categories }) => categories.length;

// action name creator
const reducerName = 'categories';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_CATEGORY = createActionName('CHANGE_CATEGORY');

export const FETCH_CATEGORIES_FROM_API = createActionName('FETCH_CATEGORIES_FROM_API');
export const FETCH_START = createActionName('FETCH_START');
export const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
export const FETCH_CATEGORIES_ERROR = createActionName('FETCH_CATEGORIES_ERROR');

// action creators
export const createActionChangeCategory = payload => ({ payload: { ...payload }, type: CHANGE_CATEGORY });

export const fetchCategoriesFromAPI = payload => ({ payload, type: FETCH_CATEGORIES_FROM_API });
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchCategoriesError = payload => ({ payload, type: FETCH_CATEGORIES_ERROR });

/* thunk creators */
export const fetchCategories = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    Axios
      .get('http://localhost:8000/api/categories')
      .then(res => {
        dispatch(fetchCategoriesFromAPI(res.data.categories));
      })
      .catch(err => {
        dispatch(fetchCategoriesError(err.message || true));
      });
  };
};


/* reducer */
export default function reducer(statePart = [], action = []) {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return [...statePart, action.payload];
    case FETCH_CATEGORIES_FROM_API:
      return {
        categories: action.payload,
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
        categories: action.payload,
      };
    }
    case FETCH_CATEGORIES_ERROR: {
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




