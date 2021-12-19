import { connect } from 'react-redux';

import OrdersPage from './OrdersPage';

import { getAllOrders } from '../../../redux/ordersRedux.js';
import { getScreenType, setScreenType } from '../../../redux/screenTypeRedux';
// import { getNew} from '../../../redux/productsRedux.js';
// import { addProduct } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  orders: getAllOrders(state),
  screenType: getScreenType(state),
});

const mapDispatcherToProps = dispatcher => ({
  setScreenType: payload => dispatcher(setScreenType(payload)),
  // addToCart: payload => dispatcher(addProduct(payload)),
});

export default connect(mapStateToProps, mapDispatcherToProps)(OrdersPage);
// export default connect(mapStateToProps)(OrdersPage);
