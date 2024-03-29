import { connect } from 'react-redux';

import OrdersPage from './OrdersPage';

import { fetchOrders } from '../../../redux/ordersRedux.js';
import { fetchMultipliers } from '../../../redux/multipliersRedux.js';

import { getAllCat } from '../../../redux/categoriesRedux.js';
import { getScreenType, setScreenType } from '../../../redux/screenTypeRedux';
// import { getNew} from '../../../redux/productsRedux.js';
// import { addProduct } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  orders: state.orders.orders,
  categories: state.categories.categories,
  screenType: getScreenType(state),
});

const mapDispatchToProps = dispatch => ({
  setScreenType: payload => dispatch(setScreenType(payload)),
  fetchOrdersFromAPI: () => dispatch(fetchOrders()),
  fetchMultipliersFromAPI: () => dispatch(fetchMultipliers()),

  // addToCart: payload => dispatcher(addProduct(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
// export default connect(mapStateToProps)(OrdersPage);
