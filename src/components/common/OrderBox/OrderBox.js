import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './OrderBox.module.scss';
import { get } from 'http';
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
  mini,
  babeczki,
  kolor,
  pianka,
  bc,
  bj,
  bcm,
  bjm,
  bcbc,
  yola,

  pots,
  // handleAddClick,
}) => {

  // const pots = useState(1);
  const sumaP1 = b1[1]+b2[1]+danusia[1]+slomka[1]+kostka[1]+weronki[1]+mini[1]+babeczki[1]+kolor[1]+pianka[1];
  const sumaP2 = b1[2]+b2[2]+danusia[2]+slomka[2]+kostka[2]+weronki[2]+mini[2]+babeczki[2]+kolor[2]+pianka[2];
  const sumaP3 = b1[3]+b2[3]+danusia[3]+slomka[3]+kostka[3]+weronki[3]+mini[3]+babeczki[3]+kolor[3]+pianka[3];
  const sumaP4 = b1[4]+b2[4]+danusia[4]+slomka[4]+kostka[4]+weronki[4]+mini[4]+babeczki[4]+kolor[4]+pianka[4];
  const sumaP5 = b1[5]+b2[5]+danusia[5]+slomka[5]+kostka[5]+weronki[5]+mini[5]+babeczki[5]+kolor[5]+pianka[5];
  const sumaP6 = b1[6]+b2[6]+danusia[6]+slomka[6]+kostka[6]+weronki[6]+mini[6]+babeczki[6]+kolor[6]+pianka[6];

  console.log('weights in orderbox', pots);

  return (
    <div className={styles.root}>
      <div className = {styles.ordersBorder}>
        <div className={styles.ordersData}>
          <p><span>Data produkcji:</span></p><p>{data}   </p>
          <p>Aktualny czas: {new Date().toLocaleTimeString()}.</p>
        </div>
        <div className={styles.ordersBlock}>
          <div className={styles.ordersGelly}>

            <thead className={styles.ordersHead}>
              <tr className={styles.ordersRow}>
                <th scope='col' className='align-middle text-left'><p></p></th>
                <th scope='col' className='align-middle text-left'>
                  <p><span>Ilość</span></p>
                </th>
                <th scope='col' className='align-middle text-left'>
                  <p><span>P1</span></p>
                </th>
                <th scope='col' className='align-middle text-left'>
                  <p><span>P2</span></p>
                </th>
                <th scope='col' className='align-middle text-left'>
                  <p><span>P3</span></p>
                </th>
                <th scope='col' className='align-middle text-left'>
                  <p><span>P4</span></p>
                </th>
                <th scope='col' className='align-middle text-left'>
                  <p><span>P5</span></p>
                </th>
                <th scope='col' className='align-middle text-left'>
                  <p><span>P6</span></p>
                </th>
              </tr>
            </thead>
            <tbody className={styles.ordersBody}>
              <tr className={styles.ordersRow}>
                <td className={styles.cellData}>
                  <p><span>B1:</span></p>
                </td>

                {b1.map((value, index2) => (
                  <td key={index2} className={styles.cellData}>
                    <p>{value}</p>
                  </td>
                ))}
              </tr>
              <tr className={styles.ordersRow}>
                <td>
                  <p><span>B2:</span></p>
                </td>

                {b2.map((value, index2) => (
                  <td key={index2}>
                    <p>{value}</p>
                  </td>
                ))}
              </tr>
              <tr className={styles.ordersRow}>
                <td>
                  <p><span>Danusia:</span></p>
                </td>

                {danusia.map((value, index2) => (
                  <td key={index2}>
                    <p>{value}</p>
                  </td>
                ))}
              </tr>
              <tr className={styles.ordersRow}>
                <td>
                  <p><span>Słomka:</span></p>
                </td>

                {slomka.map((value, index2) => (
                  <td key={index2}>
                    <p>{value}</p>
                  </td>
                ))}
              </tr>
              <tr className={styles.ordersRow}>
                <td>
                  <p><span>Kostka:</span></p>
                </td>

                {kostka.map((value, index2) => (
                  <td key={index2}>
                    <p>{value}</p>
                  </td>
                ))}
              </tr>
              <tr className={styles.ordersRow}>
                <td>
                  <p><span>Weronki:</span></p>
                </td>

                {weronki.map((value, index2) => (
                  <td key={index2}>
                    <p>{value}</p>
                  </td>
                ))}
              </tr>
              <tr className={styles.ordersRow}>
                <td>
                  <p><span>Mini:</span></p>
                </td>

                {mini.map((value, index2) => (
                  <td key={index2}>
                    <p>{value}</p>
                  </td>
                ))}
              </tr>
              <tr className={styles.ordersRow}>
                <td>
                  <p><span>Babeczki:</span></p>
                </td>

                {babeczki.map((value, index2) => (
                  <td key={index2}>
                    <p>{value}</p>
                  </td>
                ))}
              </tr>
              <tr className={styles.ordersRow}>
                <td>
                  <p><span>Kolor:</span></p>
                </td>

                {kolor.map((value, index2) => (
                  <td key={index2}>
                    <p>{value}</p>
                  </td>
                ))}
              </tr>
              <tr className={styles.ordersRow}>
                <td>
                  <p><span>Pianka:</span></p>
                </td>

                {pianka.map((value, index2) => (
                  <td key={index2}>
                    <p>{value}</p>
                  </td>
                ))}
              </tr>
              <tr className={styles.ordersRow}>
                <td>
                  <p><span>Suma:</span></p>
                </td>
                <td>
                  <p> </p>
                </td>
                <td>
                  <p>{sumaP1}</p>
                </td>
                <td>
                  <p>{sumaP2}</p>
                </td>
                <td>
                  <p>{sumaP3}</p>
                </td>
                <td>
                  <p>{sumaP4}</p>
                </td>
                <td>
                  <p>{sumaP5}</p>
                </td>
                <td>
                  <p>{sumaP6}</p>
                </td>
              </tr>

            </tbody>
          </div>
          <div className={styles.ordersBars}>
            <thead className={styles.ordersHead}>
              <tr className={styles.ordersRow}>
                <th scope='col' className='align-middle text-left'>
                  <p><span>Bloki/batoniki</span></p>
                </th>
              </tr>
            </thead>
            <tbody className={styles.ordersBody}>
              <tr className={styles.ordersRow}>
                <td className={styles.cellData}>
                  <p><span>BC:</span></p>
                </td>
                <td className={styles.cellData}>
                  <p>{bc}</p>
                </td>
              </tr>
              <tr className={styles.ordersRow}>
                <td className={styles.cellData}>
                  <p><span>BJ:</span></p>
                </td>
                <td className={styles.cellData}>
                  <p>{bj}</p>
                </td>
              </tr>
              <tr className={styles.ordersRow}>
                <td className={styles.cellData}>
                  <p><span>BCM:</span></p>
                </td>
                <td className={styles.cellData}>
                  <p>{bcm}</p>
                </td>
              </tr>
              <tr className={styles.ordersRow}>
                <td className={styles.cellData}>
                  <p><span>BJM:</span></p>
                </td>
                <td className={styles.cellData}>
                  <p>{bjm}</p>
                </td>
              </tr>
              <tr className={styles.ordersRow}>
                <td className={styles.cellData}>
                  <p><span>BCBC:</span></p>
                </td>
                <td className={styles.cellData}>
                  <p>{bcbc}</p>
                </td>
              </tr>
              <tr className={styles.ordersRow}>
                <td className={styles.cellData}>
                  <p><span>Yola:</span></p>
                </td>
                <td className={styles.cellData}>
                  <p>{yola}</p>
                </td>
              </tr>
            </tbody>
          </div>
        </div>
      </div>
    </div>
  );
};

OrderBox.propTypes = {
  id: PropTypes.string,
  handleAddClick: PropTypes.func,
  data: PropTypes.string,
  b1: PropTypes.array,
  b2: PropTypes.array,
  danusia: PropTypes.array,
  slomka: PropTypes.array,
  kostka: PropTypes.array,
  weronki: PropTypes.array,
  mini: PropTypes.array,
  babeczki: PropTypes.array,
  kolor: PropTypes.array,
  pianka: PropTypes.array,
  bc: PropTypes.number,
  bj: PropTypes.number,
  bcm: PropTypes.number,
  bjm: PropTypes.number,
  bcbc: PropTypes.number,
  yola: PropTypes.number,

  pots: PropTypes.array,
};

export default OrderBox;









