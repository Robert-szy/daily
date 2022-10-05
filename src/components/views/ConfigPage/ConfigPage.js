import React from 'react';
import styles from './ConfigPage.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import Swipeable from '../../common/Swipeable/Swipeable';



import { SIZE_TYPES } from '../../../screenSettings';

import MultipliersPage from '../MultipliersPage/MultipliersPageContainer';
import WeightsPage from '../WeightsPage/WeightsPageContainer';
import PotsPage from '../PotsPage/PotsPageContainer';


class ConfigPage extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'mnozniki',
    editable: 'no',
    activePageStyle: styles.fadeIn,
    isMultipliers: true,
    isPots: false,
    isWeights: false,
  };

  // handlePageChange(newPage) {
  //   this.setState({ activePageStyle: styles.fadeOut });
  //   setTimeout(() => {
  //     this.setState({ activePage: newPage, activePageStyle: styles.fadeIn });
  //   }, 1000);
  // }

  handleCategoryChange(newCategory) {
    console.log('itemID', newCategory);
    switch (newCategory) {
      case '/multipliers':
        this.setState({isMultipliers: true, isPots: false, isWeights: false});
        break;
      case '/pots':
        this.setState({isMultipliers: false, isPots: true, isWeights: false});
        break;
      case '/weights':
        this.setState({isMultipliers: false, isPots: false, isWeights: true});
        break;
      default:
        this.setState({isMultipliers: true, isPots: false, isWeights: false});
        break;
    }

    // this.setState({ activePageStyle: styles.fadeOut });
    // setTimeout(() => {
    //   this.setState({ activeCategory: newCategory, activePage: 0, activePageStyle: styles.fadeIn });
    // }, 1000);

  }

  selectActualScreenType = () => {
    const width = window.innerWidth;
    if (width < 768) {
      return SIZE_TYPES.MOBILE;
    } else if (width < 992) {
      return SIZE_TYPES.TABLET;
    } else {
      return SIZE_TYPES.DESKTOP;
    }
  };

  handleSizeChange = storedType => {
    const actualType = this.selectActualScreenType();
    if (actualType !== storedType) {
      this.props.setScreenType(actualType);
    }
  };

  componentDidMount() {
    this.handleSizeChange(this.props.screenType);
    window.addEventListener('resize', () =>
      this.handleSizeChange(this.props.screenType)
    );
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () =>
      this.handleSizeChange(this.props.screenType)
    );
  }

  render() {
    const {
      orders,
      categories,
      screenType,
      // maxOrdersOnPage,
    } = this.props;

    const { activeCategory, isMultipliers, isPots, isWeights, activePage, activePageStyle } = this.state;

    const ordersPerPage = {
      [SIZE_TYPES.MOBILE]: 2,
      [SIZE_TYPES.TABLET]: 3,
      [SIZE_TYPES.DESKTOP]: 6,
    };

    // const actualOrdersOnPage = Math.min(
    //   ordersPerPage[screenType],
    //   maxOrdersOnPage,
    // );

    // console.log('screenType', screenType);
    // console.log('ordersPerPage[screenType]', ordersPerPage[screenType]);
    // console.log('this.props', this.props);
    // console.log('this.state', this.state);
    // console.log('categories w configpage', categories);


    // const pagesCount = Math.ceil(orders.length / actualOrdersOnPage);
    // console.log('orders.length', orders.length);
    // console.log('actualOrdersOnPage', actualOrdersOnPage);


    // const rightAction = () => {
    //   const newPage = activePage - 1;
    //   if (newPage >= 0) {
    //     this.setState({ activePage: newPage });
    //   }
    // };

    // const leftAction = () => {
    //   const newPage = activePage + 1;
    //   if (newPage < pagesCount) {
    //     this.setState({ activePage: newPage });
    //   }
    // };

    // const dots = [];
    // for (let i = 0; i < pagesCount; i++) {
    //   console.log('dots number', dots);
    //   dots.push(
    //     <li key={i}>
    //       <Link
    //         to='/#'
    //         onClick={() => {
    //           this.handlePageChange(i);
    //         }}
    //         className={i === activePage ? styles.active : ''}
    //       >
    //         page {i}
    //       </Link>
    //     </li>
    //   );
    // }
    // console.log('pagesCount', pagesCount);
    // console.log('dots number', dots);

    return (
    // <Swipeable leftAction={leftAction} rightAction={rightAction}>

      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto col-md ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <Link
                        to='/config'
                        onClick={() => {
                          this.handleCategoryChange(item.id);
                        }}
                        className={styles.panelBar}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className={'col-12 col-sm-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div> */}
            </div>
          </div>
          {isMultipliers && <MultipliersPage />}
          {isPots && <PotsPage />}
          {isWeights && <WeightsPage />}

          {/* <div className={'row ' + activePageStyle}>
              <div className={styles.ConfigPage}>
                {orders
                  .slice(
                    activePage * actualOrdersOnPage,
                    (activePage + 1) * actualOrdersOnPage
                  )
                  .map(item => (
                    <div key={item.id} className={styles.ordersTable}>
                      <div>
                        <div className={styles.ordersRow}>
                          <p><span>Data:</span></p><p>{item.id}</p>
                        </div>
                        <div className={styles.ordersRow}>
                          <p><span>B1:</span></p><p>{item.b1}</p>
                        </div>
                        <div className={styles.ordersRow}>
                          <p><span>B2:</span></p><p>{item.b2}</p>
                        </div>
                        <div className={styles.ordersRow}>
                          <p><span>Danusia:</span></p><p>{item.danusia}</p>
                        </div>
                        <div className={styles.ordersRow}>
                          <p><span>Słomka:</span></p><p>{item.slomka}</p>
                        </div>
                        <div className={styles.ordersRow}>
                          <p><span>Kostka:</span></p><p>{item.kostka}</p>
                        </div>
                        <div className={styles.ordersRow}>
                          <p><span>Weronki:</span></p><p>{item.weronki}</p>
                        </div>
                        <div className={styles.ordersRow}>
                          <p><span>Babeczki:</span></p><p>{item.babeczki}</p>
                        </div>
                        <div className={styles.ordersRow}>
                          <p><span>Kolor:</span></p><p>{item.kolor}</p>
                        </div>
                        <div className={styles.ordersRow}>
                          <p><span>Pianka:</span></p><p>{item.pianka}</p>
                        </div>
                        <div className={styles.ordersRow}>
                          <p><span>BC:</span></p><p>{item.bc}</p>
                        </div>
                        <div className={styles.ordersRow}>
                          <p><span>BJ:</span></p><p>{item.bj}</p>
                        </div>
                        <div className={styles.ordersRow}>
                          <p><span>BCM:</span></p><p>{item.bcm}</p>
                        </div>
                        <div className={styles.ordersRow}>
                          <p><span>BJM:</span></p><p>{item.bjm}</p>
                        </div>
                        <div className={styles.ordersRow}>
                          <p><span>BCBC:</span></p><p>{item.bcbc}</p>
                        </div>
                        <div className={styles.ordersRow}>
                          <p><span>Yola:</span></p><p>{item.yola}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div> */}
        </div>
      </div>
      // </Swipeable>

    );
  }
}

ConfigPage.propTypes = {
  screenType: PropTypes.string,
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      B1: PropTypes.number,
      B2: PropTypes.number,
      Danusia: PropTypes.number,
      Slomka: PropTypes.number,
      Kostka: PropTypes.number,
      Weronki: PropTypes.number,
      Babeczki: PropTypes.number,
      Kolor: PropTypes.number,
      Pianka: PropTypes.number,
      BC: PropTypes.number,
      BJ: PropTypes.number,
      BCM: PropTypes.number,
      BJM: PropTypes.number,
    }),
  ),
  setScreenType: PropTypes.func,
  // maxOrdersOnPage: PropTypes.number,

};

ConfigPage.defaultProps = {
  // orders: [],
  // categories: [],
  // maxOrdersOnPage: 8,
  // maxOrdersDisplay: 32,
};

export default ConfigPage;
