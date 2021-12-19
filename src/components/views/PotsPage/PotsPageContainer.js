import { connect } from 'react-redux';

import PotsPage from './PotsPage';

import { getAllPots } from '../../../redux/potsRedux.js';
// import { getScreenType, setScreenType } from '../../../redux/screenTypeRedux';
// import { getNew} from '../../../redux/productsRedux.js';
// import { addProduct } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  pots: getAllPots(state),

  // products: getNew(state),
  // screenType: getScreenType(state),
});

// const mapDispatcherToProps = dispatcher => ({
//   setScreenType: payload => dispatcher(setScreenType(payload)),
//   addToCart: payload => dispatcher(addProduct(payload)),
// });

// export default connect(mapStateToProps, mapDispatcherToProps)(PotsPage);
export default connect(mapStateToProps)(PotsPage);
