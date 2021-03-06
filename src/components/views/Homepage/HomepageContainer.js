import { connect } from 'react-redux';

import Homepage from './Homepage';

import { getAllOrders } from '../../../redux/ordersRedux.js';
import { getAllPortions } from '../../../redux/portionsRedux.js';

// import { getAllCat } from '../../../redux/categoriesRedux.js';
import { getScreenType, setScreenType } from '../../../redux/screenTypeRedux';
import { getAllPots } from '../../../redux/potsRedux';
import { getAllWeights } from '../../../redux/weightsRedux';
import { getAllMultipliers } from '../../../redux/multipliersRedux';
// import { getNew} from '../../../redux/productsRedux.js';
// import { addProduct } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  orders: getAllOrders(state),
  portions: getAllPortions(state),
  pots: getAllPots(state),
  weights: getAllWeights(state),
  multipliers: getAllMultipliers(state),
  // categories: getAllCat(state),
  screenType: getScreenType(state),
});

const mapDispatcherToProps = dispatcher => ({
  setScreenType: payload => dispatcher(setScreenType(payload)),
  // addToCart: payload => dispatcher(addProduct(payload)),
});

export default connect(mapStateToProps, mapDispatcherToProps)(Homepage);
// export default connect(mapStateToProps)(OrdersPage);
