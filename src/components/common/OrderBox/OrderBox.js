import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderBox.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
// import Button from '../Button/Button';
// import { Link } from 'react-router-dom';


const OrderBox = ({
  id,
  data,
  b1,
  b2,
  danusia,
  slomka,
  kostka,
  weronki,
  babeczki,
  kolor,
  pianka,
  bc,
  bj,
  bcm,
  bjm,
  bcbc,
  yola,
  // handleAddClick,
}) => (
  <div className={styles.root}>
    <div className = {styles.ordersBorder}>
      <div className={styles.ordersRow}>
        <p><span>Data:</span></p><p>{data}</p>
      </div>
      <div className={styles.ordersRow}>
        <p><span>B1:</span></p><p>{b1}</p>
      </div>
      <div className={styles.ordersRow}>
        <p><span>B2:</span></p><p>{b2}</p>
      </div>
      <div className={styles.ordersRow}>
        <p><span>Danusia:</span></p><p>{danusia}</p>
      </div>
      <div className={styles.ordersRow}>
        <p><span>Słomka:</span></p><p>{slomka}</p>
      </div>
      <div className={styles.ordersRow}>
        <p><span>Kostka:</span></p><p>{kostka}</p>
      </div>
      <div className={styles.ordersRow}>
        <p><span>Weronki:</span></p><p>{weronki}</p>
      </div>
      <div className={styles.ordersRow}>
        <p><span>Babeczki:</span></p><p>{babeczki}</p>
      </div>
      <div className={styles.ordersRow}>
        <p><span>Kolor:</span></p><p>{kolor}</p>
      </div>
      <div className={styles.ordersRow}>
        <p><span>Pianka:</span></p><p>{pianka}</p>
      </div>
      <div className={styles.ordersRow}>
        <p><span>BC:</span></p><p>{bc}</p>
      </div>
      <div className={styles.ordersRow}>
        <p><span>BJ:</span></p><p>{bj}</p>
      </div>
      <div className={styles.ordersRow}>
        <p><span>BCM:</span></p><p>{bcm}</p>
      </div>
      <div className={styles.ordersRow}>
        <p><span>BJM:</span></p><p>{bjm}</p>
      </div>
      <div className={styles.ordersRow}>
        <p><span>BCBC:</span></p><p>{bcbc}</p>
      </div>
      <div className={styles.ordersRow}>
        <p><span>Yola:</span></p><p>{yola}</p>
      </div>
    </div>
  </div>
);

OrderBox.propTypes = {
  id: PropTypes.string,
  handleAddClick: PropTypes.func,
  data: PropTypes.string,
  b1: PropTypes.string,
  b2: PropTypes.string,
  danusia: PropTypes.string,
  slomka: PropTypes.string,
  kostka: PropTypes.string,
  weronki: PropTypes.string,
  babeczki: PropTypes.string,
  kolor: PropTypes.string,
  pianka: PropTypes.string,
  bc: PropTypes.string,
  bj: PropTypes.string,
  bcm: PropTypes.string,
  bjm: PropTypes.string,
  bcbc: PropTypes.string,
  yola: PropTypes.string,
};

export default OrderBox;









