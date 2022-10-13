import { connect } from 'react-redux';

import WeightsPage from './WeightsPage';

import { fetchWeights, changeWeightValue, changeLayerValue } from '../../../redux/weightsRedux.js';
import { getScreenType, setScreenType } from '../../../redux/screenTypeRedux';

const mapStateToProps = state => ({
  weights: state.weights.weights,
  screenType: getScreenType(state),
});

const mapDispatchToProps = dispatch => ({
  setScreenType: payload => dispatch(setScreenType(payload)),
  fetchWeightsFromAPI: () => dispatch(fetchWeights()),
  changeWeightValueInDB: payload => dispatch(changeWeightValue(payload)),
  changeLayerValueInDB: payload => dispatch(changeLayerValue(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeightsPage);
