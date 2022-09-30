import { connect } from 'react-redux';

import MultipliersPage from './MultipliersPage';

import { getAllMultipliers } from '../../../redux/multipliersRedux.js';
import { getScreenType, setScreenType } from '../../../redux/screenTypeRedux';
// import { getNew} from '../../../redux/productsRedux.js';
// import { addProduct } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  multipliers: getAllMultipliers(state),

  // products: getNew(state),
  screenType: getScreenType(state),
});

const mapDispatchToProps = dispatch => ({
  setScreenType: payload => dispatch(setScreenType(payload)),
  // addToCart: payload => dispatcher(addProduct(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MultipliersPage);
// export default connect(mapStateToProps)(MultipliersPage);
