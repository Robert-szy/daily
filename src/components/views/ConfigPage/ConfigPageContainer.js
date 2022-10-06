import { connect } from 'react-redux';

import ConfigPage from './ConfigPage';

import { fetchCategories } from '../../../redux/categoriesRedux.js';
import { getScreenType, setScreenType } from '../../../redux/screenTypeRedux';


const mapStateToProps = state => ({
  categories: state.categories.categories,
  screenType: getScreenType(state),
});

const mapDispatchToProps = dispatch => ({
  setScreenType: payload => dispatch(setScreenType(payload)),
  fetchCategoriesFromAPI: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfigPage);
