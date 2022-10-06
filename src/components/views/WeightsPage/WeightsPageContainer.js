import { connect } from 'react-redux';

import WeightsPage from './WeightsPage';

import { fetchWeights } from '../../../redux/weightsRedux.js';
import { getScreenType, setScreenType } from '../../../redux/screenTypeRedux';

const mapStateToProps = state => ({
  // weights: getAllWeights(state),
  weights: state.weights.weights,
  screenType: getScreenType(state),
});

const mapDispatchToProps = dispatch => ({
  setScreenType: payload => dispatch(setScreenType(payload)),
  fetchWeightsFromAPI: () => dispatch(fetchWeights()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeightsPage);
