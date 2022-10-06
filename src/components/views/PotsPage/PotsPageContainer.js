import { connect } from 'react-redux';

import PotsPage from './PotsPage';

import { fetchPots } from '../../../redux/potsRedux.js';
import { getScreenType, setScreenType } from '../../../redux/screenTypeRedux';

const mapStateToProps = state => ({
  pots: state.pots.pots,
  screenType: getScreenType(state),
});

const mapDispatchToProps = dispatch => ({
  setScreenType: payload => dispatch(setScreenType(payload)),
  fetchPotsFromAPI: () => dispatch(fetchPots()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PotsPage);
