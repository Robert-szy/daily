/* selectors */
export const getAllCat = ({ categories }) => categories;
export const getCount = ({ categories }) => categories.length;

/*action name creator */
const reducerName = 'categories';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const GET_CATEGORIES = createActionName('GET_CATEGORIES');

/* action creators */
export const getCategories = payload => ({ payload, type: GET_CATEGORIES });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case GET_CATEGORIES: {
      return action.payload;
    }
    default:
      return statePart;
  }
}


