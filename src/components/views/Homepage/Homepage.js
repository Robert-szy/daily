import React from 'react';
import PropTypes from 'prop-types';

import OrderBox from '../../common/OrderBox/OrderBox';
import PortionBox from '../../common/PortionBox/PortionBox';
import styles from './Homepage.module.scss';
import { SIZE_TYPES } from '../../../screenSettings';



class Homepage extends React.Component {
  state = {
    activePage: 0,
    editable: 'no',
    activePageStyle: styles.fadeIn,
  };

  render() {
    const {
      orders,
      portions,
      // categories,
      screenType,
      // maxOrdersOnPage,
      // maxTotalDisplayedOrders,
    } = this.props;

    console.log('orders w homepage', orders);

    const { activePage, activePageStyle } = this.state;
    let { order, date, portion } = this.state;

    const ordersPerPage = {
      [SIZE_TYPES.MOBILE]: 2,
      [SIZE_TYPES.TABLET]: 3,
      [SIZE_TYPES.DESKTOP]: 6,
    };

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.homePage}>
            <div className={styles.mainBlock}>

              {order = orders[orders.length-1],
              date = order.data,


              // .slice(
              //   activePage * actualOrdersOnPage,
              //   (activePage + 1) * actualOrdersOnPage
              // )
              // .map(item => (
              console.log('id ostatniego w map', order),
              console.log('data w id', date),

              // <div key={item.id} className={styles.ordersTable}>
              <OrderBox {...order}/>
                // </div>
              // ))
              }

              {portion = portions[portions.indexOf(date)],
              console.log('all portions', portions),
              console.log('portions[0]', portions[2]),
              // tmp1 = portions[2],
              // tmp2 = tmp1.indexOf(date),
              // console.log('tmp1', tmp1),
              // console.log('tmp2', tmp2),

              portion = portions.find(portion => {
                return portion.data === date;
              }),

              // console.log('result', result),
              console.log('portion', portion),

              /* <OrderBox/> */
              <PortionBox {...portion}/>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}


Homepage.propTypes = {
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
  portions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      data: PropTypes.string,
      porcja1: PropTypes.array,
      porcja2: PropTypes.array,
      porcja3: PropTypes.array,
      porcja4: PropTypes.array,
      porcja5: PropTypes.array,
      porcja6: PropTypes.array,
      porcja7: PropTypes.array,
      porcja8: PropTypes.array,
    }),
  ),
  screenType: PropTypes.string,
  setScreenType: PropTypes.func,
  maxOrdersOnPage: PropTypes.number,
  maxTotalDisplayedOrders: PropTypes.number,

};

Homepage.defaultProps = {
  orders: [],
  portions: [],
  categories: [],
  maxOrdersOnPage: 8,
  maxTotalDisplayedOrders: 32,
};

export default Homepage;
