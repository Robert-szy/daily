import React from 'react';
import styles from './OrdersPage.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swipeable from '../../common/Swipeable/Swipeable';



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
      screenType,
      maxOrdersOnPage,
    } = this.props;

    const { activeCategory, activePage, activePageStyle } = this.state;

    const ordersPerPage = {
      [SIZE_TYPES.MOBILE]: 2,
      [SIZE_TYPES.TABLET]: 3,
      [SIZE_TYPES.DESKTOP]: 6,
    };

    const actualOrdersOnPage = Math.min(
      ordersPerPage[screenType],
      maxOrdersOnPage,
    );
    console.log('screenType', screenType);
    console.log('ordersPerPage[screenType]', ordersPerPage[screenType]);
    console.log('maxOrdersOnPage', maxOrdersOnPage);



    const pagesCount = Math.ceil(orders.length / actualOrdersOnPage);
    console.log('orders.length', orders.length);
    console.log('actualOrdersOnPage', actualOrdersOnPage);


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
      console.log('dots number', dots);
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
              {orders
                .slice(
                  activePage * actualOrdersOnPage,
                  (activePage + 1) * actualOrdersOnPage
                )
                .map(item => (
                  <div key={item.id}>
                    <div className={styles.ordersTable}>
                      <div className={styles.ordersRow}>
                        <p><span>Data:</span> {item.id}</p>
                      </div>
                      <div className={styles.ordersRow}>
                        <p><span>B1:</span>{item.b1}</p>
                      </div>
                      <div className={styles.ordersRow}>
                        <p><span>B2:</span>{item.b2}</p>
                      </div>
                      <div className={styles.ordersRow}>
                        <p><span>Danusia:</span>{item.danusia}</p>
                      </div>
                      <div className={styles.ordersRow}>
                        <p><span>Słomka:</span>{item.slomka}</p>
                      </div>
                      <div className={styles.ordersRow}>
                        <p><span>Kostka:</span>{item.kostka}</p>
                      </div>
                      <div className={styles.ordersRow}>
                        <p><span>Weronki:</span>{item.weronki}</p>
                      </div>
                      <div className={styles.ordersRow}>
                        <p><span>Babeczki:</span>{item.babeczki}</p>
                      </div>
                      <div className={styles.ordersRow}>
                        <p><span>Kolor:</span>{item.kolor}</p>
                      </div>
                      <div className={styles.ordersRow}>
                        <p><span>Pianka:</span>{item.pianka}</p>
                      </div>
                      <div className={styles.ordersRow}>
                        <p><span>BC:</span>{item.bc}</p>
                      </div>
                      <div className={styles.ordersRow}>
                        <p><span>BJ:</span>{item.bj}</p>
                      </div>
                      <div className={styles.ordersRow}>
                        <p><span>BCM:</span>{item.bcm}</p>
                      </div>
                      <div className={styles.ordersRow}>
                        <p><span>BJM:</span>{item.bjm}</p>
                      </div>
                      <div className={styles.ordersRow}>
                        <p><span>BCBC:</span>{item.bcbc}</p>
                      </div>
                      <div className={styles.ordersRow}>
                        <p><span>Yola:</span>{item.yola}</p>
                      </div>
                    </div>
                  </div>
                ))}
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
  maxOrdersOnPage: PropTypes.number,

};

OrdersPage.defaultProps = {
  orders: [],
  maxOrdersOnPage: 8,
};

export default OrdersPage;
