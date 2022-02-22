import React from 'react';
import PropTypes from 'prop-types';
import styles from './PortionBox.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
// import Button from '../Button/Button';
// import { Link } from 'react-router-dom';


// const portionNumb = ['porcja1', 'porcja2', 'porcja3', 'porcja4', 'porcja5', 'porcja6'];
// const portionIngr = [1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

const PortionBox = props => {

  const { id, porcja1, porcja2, porcja3, porcja4, porcja5, porcja6, porcja7, porcja8 } = props;
  // const portionNumb = ['porcja1', 'porcja2', 'porcja3', 'porcja4', 'porcja5', 'porcja6', 'porcja7','porcja8'];
  // const portionIngr = [1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  // const portionBox = portion;
  // console.log('portionBox (portion)', portionBox);

  return (
    <div className={styles.root}>
      <div className = {styles.portionsBorder}>
        <div className='table-responsive'>
          <table className='table'>
            <thead className={styles.portionsHead}>
              <tr className={styles.portionsRow}>
                <th scope='col' className='align-middle text-left'><p></p></th>
                <th scope='col' className='align-middle + text-center'>
                  <p className={styles.portionsBaza}><span>Baza</span></p>
                </th>
                <th scope='col' className='align-middle text-left'>
                  <p><span>Woda (l)</span></p>
                </th>
                <th scope='col' className='align-middle text-left'>
                  <p><span>Agar (g)</span></p>
                </th>
                <th scope='col' className='align-middle text-left'>
                  <p><span>Cukier (kg)</span></p>
                </th>
                <th scope='col' className='align-middle text-left'>
                  <p><span>Tłuszcz (g)</span></p>
                </th>
                <th scope='col' className='align-middle text-left'>
                  <p><span>Kwasek (g)</span></p>
                </th>
                <th scope='col' className='align-middle text-left'>
                  <p><span>Białko (g)</span></p>
                </th>
                <th scope='col' className='align-middle text-left'>
                  <p><span>Syrop (kg)</span></p>
                </th>
                <th scope='col' className='align-middle text-left'>
                  <p><span>Jab. (g)</span></p>
                </th>
                <th scope='col' className='align-middle text-left'>
                  <p><span>Cyt. (g)</span></p>
                </th>
                <th scope='col' className='align-middle text-left'>
                  <p><span>Kiw. (g)</span></p>
                </th>
                <th scope='col' className='align-middle text-left'>
                  <p><span>Pom. (g)</span></p>
                </th>
                <th scope='col' className='align-middle text-left'>
                  <p><span>Mal. (g)</span></p>
                </th>
                <th scope='col' className='align-middle text-left'>
                  <p><span>Wiś. (g)</span></p>
                </th>
                <th scope='col' className='align-middle text-left'>
                  <p><span>Wan. (g)</span></p>
                </th>
              </tr>
            </thead>
            <tbody className={styles.portionsData}>
              <tr className={styles.portionsRow}>
                <td>
                  <p><span>Porcja 1:</span></p>
                </td>
                {porcja1.map((value, index2) => (
                  <td key={index2}>
                    <p>{value}</p>
                  </td>
                ))}
              </tr>

              <tr className={styles.portionsRow}>
                <td>
                  <p><span>Porcja 2:</span></p>
                </td>

                {porcja2.map((value, index2) => (
                  <td key={index2}>
                    <p>{value}</p>
                  </td>
                ))}
              </tr>

              <tr className={styles.portionsRow}>
                <td>
                  <p><span>Porcja 3:</span></p>
                </td>

                {porcja3.map((value, index2) => (
                  <td key={index2}>
                    <p >{value}</p>
                  </td>
                ))}
              </tr>

              <tr className={styles.portionsRow}>
                <td>
                  <p><span>Porcja 4:</span></p>
                </td>

                {porcja4.map((value, index2) => (
                  <td key={index2}>
                    <p >{value}</p>
                  </td>
                ))}
              </tr>

              <tr className={styles.portionsRow}>
                <td>
                  <p><span>Porcja 5:</span></p>
                </td>

                {porcja5.map((value, index2) => (
                  <td key={index2}>
                    <p >{value}</p>
                  </td>
                ))}
              </tr>

              <tr className={styles.portionsRow}>
                <td>
                  <p><span>Porcja 6:</span></p>
                </td>

                {porcja6.map((value, index2) => (
                  <td key={index2}>
                    <p >{value}</p>
                  </td>
                ))}
              </tr>

              <tr className={styles.portionsRow}>
                <td>
                  <p><span>Porcja 7:</span></p>
                </td>

                {porcja7.map((value, index2) => (
                  <td key={index2}>
                    <p >{value}</p>
                  </td>
                ))}
              </tr>

              <tr className={styles.portionsRow}>
                <td>
                  <p><span>Porcja 8:</span></p>
                </td>

                {porcja8.map((value, index2) => (
                  <td key={index2}>
                    <p >{value}</p>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

};

PortionBox.propTypes = {
  id: PropTypes.string,
  handleAddClick: PropTypes.func,

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

