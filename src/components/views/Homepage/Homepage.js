import React from 'react';
import OrderBox from '../../common/OrderBox/OrderBox';
import PortionBox from '../../common/PortionBox/PortionBox';
import styles from './Homepage.module.scss';

const Homepage = () => (
  <div className={styles.root}>

    <p>To jest homepage</p>
    <OrderBox/>
    <PortionBox/>

  </div>
);

export default Homepage;
