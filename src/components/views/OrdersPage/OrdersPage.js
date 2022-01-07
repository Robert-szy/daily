import React from 'react';
import styles from './OrdersPage.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swipeable from '../../common/Swipeable/Swipeable';
import OrderBox from '../../common/OrderBox/OrderBox';



import { SIZE_TYPES } from '../../../screenSettings';


class OrdersPage extends React.Component {
  state = {
    activePage: 0,
    editable: 'no',
    activePageStyle: styles.fadeIn,
  };

  handlePageChange(newPage) {
    this.setState({ activePageStyle: styles.fadeOut });
    setTimeout(() => {
      this.setState({ activePage: newPage, activePageStyle: styles.fadeIn });
    }, 1000);
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
      // categories,
      screenType,
      maxOrdersOnPage,
      maxTotalDisplayedOrders,
    } = this.props;

    const { activePage, activePageStyle } = this.state;

    const ordersPerPage = {
      [SIZE_TYPES.MOBILE]: 2,
      [SIZE_TYPES.TABLET]: 3,
      [SIZE_TYPES.DESKTOP]: 6,
    };

    const actualOrdersOnPage = Math.min(
      ordersPerPage[screenType],
      maxOrdersOnPage,
    );
    // console.log('screenType', screenType);
    // console.log('ordersPerPage[screenType]', ordersPerPage[screenType]);
    // console.log('maxOrdersOnPage', maxOrdersOnPage);


    const maxOrdersForDisplay = Math.min (orders.length, maxTotalDisplayedOrders);
    const pagesCount = Math.ceil(maxOrdersForDisplay / actualOrdersOnPage);
    // console.log('orders.length', orders.length);
    // console.log('actualOrdersOnPage', actualOrdersOnPage);
    // console.log('maxTotalDisplayedOrders', maxTotalDisplayedOrders);

    // console.log('maxOrdersForDisplay', maxOrdersForDisplay);



    const rightAction = () => {
      const newPage = activePage - 1;
      if (newPage >= 0) {
        this.setState({ activePage: newPage });
      }
    };

    const leftAction = () => {
      const newPage = activePage + 1;
      if (newPage < pagesCount) {
        this.setState({ activePage: newPage });
      }
    };

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      console.log('dots number', dots.length);
      dots.push(
        <li key={i}>
          <Link
            to='/#'
            onClick={() => {
              this.handlePageChange(i);
            }}
            className={i === activePage ? styles.active : ''}
          >
            page {i}
          </Link>
        </li>
      );
    }
    console.log('pagesCount', pagesCount);
    console.log('dots number', dots);

    return (
      <Swipeable leftAction={leftAction} rightAction={rightAction}>

        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                {/* <div className={'col-auto col-md ' + styles.menu}>
                  Aqq2
                  <ul>
                    {categories.map(item => (
                      <li key={item.id}>
                        <Link
                          to='/#'
                          className={
                            item.id === activeCategory ? styles.active : undefined
                          }
                          onClick={() => {
                            this.handleCategoryChange(item.id);
                          }}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div> */}
                <div className={'col-12 col-sm-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            <div className={'row ' + activePageStyle}>
              <div className={styles.ordersPage}>
                {orders
                  .slice(
                    activePage * actualOrdersOnPage,
                    (activePage + 1) * actualOrdersOnPage
                  )
                  .map(item => (
                    <div key={item.id} className={styles.ordersTable}>
                      <OrderBox
                        {...item}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Swipeable>

    );
  }
}

OrdersPage.propTypes = {
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
      data: PropTypes.string,
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
  maxOrdersOnPage: PropTypes.number,
  maxTotalDisplayedOrders: PropTypes.number,

};

OrdersPage.defaultProps = {
  orders: [],
  categories: [],
  maxOrdersOnPage: 8,
  maxTotalDisplayedOrders: 32,
};

export default OrdersPage;
