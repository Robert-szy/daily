import { connect } from 'react-redux';

import MultipliersPage from './MultipliersPage';

import { fetchMultipliers, getAllMultipliers } from '../../../redux/multipliersRedux.js';
import { getScreenType, setScreenType } from '../../../redux/screenTypeRedux';


const mapStateToProps = state => ({
  // multipliers: getAllMultipliers(state),
  multipliers: state.multipliers.multipliers,
  screenType: getScreenType(state),
});

const mapDispatchToProps = dispatch => ({
  setScreenType: payload => dispatch(setScreenType(payload)),
  fetchMultipliersFromAPI: () => dispatch(fetchMultipliers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MultipliersPage);
