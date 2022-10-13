import Axios from 'axios';

/* selectors */
export const getAllWeights = ({ weights }) => weights;
export const getCountWeights = ({ weights }) => weights.length;

// action name creator
const reducerName = 'weight';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_WEIGHT_VALUE_IN_DB = createActionName('CHANGE_WEIGHT_VALUE_IN_DB');
export const CHANGE_WEIGHT_VALUE_ERROR = createActionName('CHANGE_WEIGHT_VALUE_ERROR');

export const CHANGE_LAYER_VALUE_IN_DB = createActionName('CHANGE_LAYER_VALUE_IN_DB');
export const CHANGE_LAYER_VALUE_ERROR = createActionName('CHANGE_LAYER_VALUE_ERROR');

export const FETCH_WEIGHTS_FROM_API = createActionName('FETCH_WEIGHTS_FROM_API');
export const FETCH_START = createActionName('FETCH_START');
export const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
export const FETCH_WEIGHTS_ERROR = createActionName('FETCH_POTS_ERROR');

// action creators
export const changeWeightValueInDB = payload => ({ payload, type: CHANGE_WEIGHT_VALUE_IN_DB });
export const changeWeightValueError = payload => ({payload, type: CHANGE_WEIGHT_VALUE_ERROR});

export const changeLayerValueInDB = payload => ({ payload, type: CHANGE_LAYER_VALUE_IN_DB });
export const changeLayerValueError = payload => ({payload, type: CHANGE_LAYER_VALUE_ERROR});

export const fetchWeightsFromAPI = payload => ({ payload, type: FETCH_WEIGHTS_FROM_API });
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchWeightsError = payload => ({ payload, type: FETCH_WEIGHTS_ERROR });

/* thunk creators */
export const fetchWeights = () => {
  return (dispatch) => {
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

export const changeWeightValue = (data) => {
  return (dispatch) => {
    Axios
      .put(`http://localhost:8000/api/weights/${data.id}`, {weightValue: data.newWeightValue})
      .then(res => {
        dispatch(changeWeightValueInDB(data));
      })
      .catch(err => {
        dispatch(changeWeightValueError(err.message || true));
      });
  };
};

export const changeLayerValue = (data) => {
  console.log('id', data.id);
  // console.log('layerNumber', layerNumber);
  console.log('newWeightLayersArray', data.newWeightLayers);
  return (dispatch) => {
    Axios
      .put(`http://localhost:8000/api/weights/${data.id}`, {weightLayers: data.newWeightLayers})
      .then(res => {
        dispatch(changeLayerValueInDB(data));
      })
      .catch(err => {
        dispatch(changeLayerValueError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = []) {
  switch (action.type) {
    case CHANGE_WEIGHT_VALUE_IN_DB: {
      const { id, newWeightValue } = action.payload;
      return {
        ...statePart,
        weights: statePart.weights.map(weights => {
          if (weights._id !== id) {
            return weights;
          }
          return {
            ...weights,
            weightValue: newWeightValue,
          };
        }),
      };
    }
    case CHANGE_WEIGHT_VALUE_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }

    case CHANGE_LAYER_VALUE_IN_DB: {
      const { id, newWeightLayers } = action.payload;

      // console.log('id', id);
      // // console.log('layerNumber', layerNumber);
      // console.log('newWeightLayersArray', newWeightLayers);
      // // console.log('newLayerArray[layerNumber]', newLayerArray[layerNumber]);

      return {
        ...statePart,
        weights: statePart.weights.map(weights => {
          if (weights._id !== id) {
            return weights;
          }
          return {
            ...weights,
            weightLayers: newWeightLayers,
          };
        }),
      };
    }
    case CHANGE_LAYER_VALUE_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
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



