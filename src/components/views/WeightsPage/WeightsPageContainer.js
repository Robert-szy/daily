import { connect } from 'react-redux';

import WeightsPage from './WeightsPage';

import { getAllWeights } from '../../../redux/weightsRedux.js';
// import { getScreenType, setScreenType } from '../../../redux/screenTypeRedux';
// import { getNew} from '../../../redux/productsRedux.js';
// import { addProduct } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  weights: getAllWeights(state),

  // products: getNew(state),
  // screenType: getScreenType(state),
});

// const mapDispatcherToProps = dispatcher => ({
//   setScreenType: payload => dispatcher(setScreenType(payload)),
//   addToCart: payload => dispatcher(addProduct(payload)),
// });

// export default connect(mapStateToProps, mapDispatcherToProps)(WeightsPage);
export default connect(mapStateToProps)(WeightsPage);
