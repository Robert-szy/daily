import { connect } from 'react-redux';

import PortionBox from './PortionBox';

import { getPortions } from '../../../redux/portionsRedux.js';
import { getMultipliers } from '../../../redux/multipliersRedux.js';
import { fetchMultipliers } from '../../../redux/multipliersRedux.js';

import { getScreenType, setScreenType } from '../../../redux/screenTypeRedux';
// import { getNew} from '../../../redux/productsRedux.js';
// import { addProduct } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  multipliers: state.multipliers.multipliers,
  portions: state.portions.portions,
  screenType: getScreenType(state),
});

const mapDispatchToProps = dispatch => ({
  setScreenType: payload => dispatch(setScreenType(payload)),
  fetchMultipliersFromAPI: () => dispatch(fetchMultipliers()),

  // fetchOrdersFromAPI: () => dispatch(fetchOrders()),

  // addToCart: payload => dispatcher(addProduct(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PortionBox);
// export default connect(mapStateToProps)(OrdersPage);
