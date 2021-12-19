import { combineReducers, createStore } from 'redux';
import initialState from './initialState';

import multipliersReducer from './multipliersRedux';
import ordersReducer from './ordersRedux';
import potsReducer from './potsRedux';
import portionsReducer from './portionsRedux';
import weightsReducer from './weightsRedux';



// define reducers
const reducers = {
  multipliers: multipliersReducer,
  orders: ordersReducer,
  pots: potsReducer,
  portions: portionsReducer,
  weights: weightsReducer,
};


// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  console.log('initialState', initialState),

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
