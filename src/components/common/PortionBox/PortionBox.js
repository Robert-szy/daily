import React from 'react';
import PropTypes from 'prop-types';
import styles from './PortionBox.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
// import Button from '../Button/Button';
// import { Link } from 'react-router-dom';


const PortionBox = ({
  id,
  data,
  porcja1,
  porcja2,
  porcja3,
  porcja4,
  porcja5,
  porcja6,
  porcja7,
  porcja8,
  // handleAddClick,
}) => (
  <div className={styles.root}>
    <div className = {styles.portionsBorder}>
      <div className={styles.portionsRow}>
        <p><span>Data:</span></p><p>{data}</p>
      </div>
      <div className={styles.portionsRow}>
        <p><span>Porcja 1:</span></p><p>{porcja1}</p>
      </div>
      <div className={styles.portionsRow}>
        <p><span>Porcja 2:</span></p><p>{porcja2}</p>
      </div>
      <div className={styles.portionsRow}>
        <p><span>Porcja 3:</span></p><p>{porcja3}</p>
      </div>
      <div className={styles.portionsRow}>
        <p><span>Porcja 4:</span></p><p>{porcja4}</p>
      </div>
      <div className={styles.portionsRow}>
        <p><span>Porcja 5:</span></p><p>{porcja5}</p>
      </div>
      <div className={styles.portionsRow}>
        <p><span>Porcja 6:</span></p><p>{porcja6}</p>
      </div>
      <div className={styles.portionsRow}>
        <p><span>Porcja 7:</span></p><p>{porcja7}</p>
      </div>
      <div className={styles.portionsRow}>
        <p><span>Porcja 8:</span></p><p>{porcja8}</p>
      </div>
    </div>
  </div>

);

PortionBox.propTypes = {
  id: PropTypes.string,
  handleAddClick: PropTypes.func,
  data: PropTypes.string,
  porcja1: PropTypes.array,
  porcja2: PropTypes.array,
  porcja3: PropTypes.array,
  porcja4: PropTypes.array,
  porcja5: PropTypes.array,
  porcja6: PropTypes.array,
  porcja7: PropTypes.array,
  porcja8: PropTypes.array,
};

export default PortionBox;

