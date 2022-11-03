import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import initialStore from './initialStoreData';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import multipliersReducer from './multipliersRedux';
import ordersReducer from './ordersRedux';
import potsReducer from './potsRedux';
import portionsReducer from './portionsRedux';
import weightsReducer from './weightsRedux';
import categoriesReducer from './categoriesRedux';
import screenTypeReducer from './screenTypeRedux';

// define initial state and shallow-merge initial data
const initialState = {
  categories: initialStore.categories,
  multipliers: initialStore.multipliers,
  orders: initialStore.orders,
  pots: initialStore.pots,
  portions: initialStore.portions,
  weights: initialStore.weights,
  screenType: initialStore.screenType,
};

// define reducers
const reducers = {
  multipliers: multipliersReducer,
  orders: ordersReducer,
  pots: potsReducer,
  portions: portionsReducer,
  weights: weightsReducer,
  categories: categoriesReducer,
  screenType: screenTypeReducer,
};


// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// merge all reducers
const storeReducer = combineReducers(reducers);

const middleware = [thunk];

const enhancers = compose(
  composeWithDevTools(applyMiddleware(...middleware))
);


// create store
const store = createStore(
  storeReducer,
  initialState,
  enhancers,

  console.log('initialStateeeee', initialState),
);

export default store;
