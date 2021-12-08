import React from 'react';
import styles from './MultipliersPage.module.scss';
import PropTypes from 'prop-types';


// import AllProducts from '../../features/AllProducts/AllProductsContainer';


class MultipliersPage extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'jelly',
    activePageStyle: styles.fadeIn,
  };

  render() {
    const {
      multipliers,
      // products,
      // maxProductsOnPage,
      // screenType,
    } = this.props;

    console.log('multipliersss', multipliers);
    return (
      <div className={styles.root}>

        <p>To jest MultipliersPage</p>

        <div className={'col-auto col-md ' + styles.menu}>
          <ul>
            <p>To jest MultipliersPage ul {multipliers}</p>
            {multipliers.map(item => (
              <li key={item}>
                {/* <Link */}
                <p>
                To jest item {item}
                </p>
                {/* </Link> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

MultipliersPage.propTypes = {
  multipliers: PropTypes.arrayOf(
    PropTypes.shape({
      sugarMultiply: PropTypes.string,
      fatMultiply: PropTypes.string,
      acidMultiply: PropTypes.string,
      jellyProteinMultiply: PropTypes.string,
      foamProteinMultiply: PropTypes.string,
      syrupMultiply: PropTypes.string,
      appleMultiply: PropTypes.string,
      lemonMultipl: PropTypes.string,
      orangeMultiply: PropTypes.string,
      raspberryMultiply: PropTypes.string,
      cherryMultiply: PropTypes.string,
      vanillaMultiply: PropTypes.string,
      kiwiMultiply: PropTypes.string,
      waterMultiply: PropTypes.string,
      agarSummerMultiply: PropTypes.string,
      agarWinterMultiply: PropTypes.string,
    }),
  ),
  // setScreenType: PropTypes.func,
  // maxProductsOnPage: PropTypes.number,
  // addToCart: PropTypes.func,
};

MultipliersPage.defaultProps = {
  multipliers: [],
};

export default MultipliersPage;
