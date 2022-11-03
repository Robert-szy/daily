import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './PortionBox.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
// import Button from '../Button/Button';
// import { Link } from 'react-router-dom';


const PortionBox = ({
  porcja1,
  porcja2,
  porcja3,
  porcja4,
  porcja5,
  porcja6,
  porcja7,
  porcja8,
}) => {

  const multipliers = useSelector((state) => state.multipliers.multipliers);

  const water = multipliers.find(item => item.id === 'waterMultiply').multiplierValue;
  const agarSummer = multipliers.find(item => item.id === 'agarSummerMultiply').multiplierValue;
  const agarWinter = multipliers.find(item => item.id === 'agarWinterMultiply').multiplierValue;
  const sugar = multipliers.find(item => item.id === 'sugarMultiply').multiplierValue;
  const fat = multipliers.find(item => item.id === 'fatMultiply').multiplierValue;
  const acid = multipliers.find(item => item.id === 'acidMultiply').multiplierValue;
  const foamProtein = multipliers.find(item => item.id === 'foamProteinMultiply').multiplierValue;
  const jellyProtein = multipliers.find(item => item.id === 'jellyProteinMultiply').multiplierValue;
  const syrup = multipliers.find(item => item.id === 'syrupMultiply').multiplierValue;
  const apple = multipliers.find(item => item.id === 'appleMultiply').multiplierValue;
  const orange = multipliers.find(item => item.id === 'orangeMultiply').multiplierValue;
  const lemon = multipliers.find(item => item.id === 'lemonMultiply').multiplierValue;
  const raspberry = multipliers.find(item => item.id === 'raspberryMultiply').multiplierValue;
  const cherry = multipliers.find(item => item.id === 'cherryMultiply').multiplierValue;
  const vanilla = multipliers.find(item => item.id === 'vanillaMultiply').multiplierValue;
  const kiwi = multipliers.find(item => item.id === 'kiwiMultiply').multiplierValue;




  console.log('water', water);
  console.log('multipliers in portion box', multipliers);


  return (
    <div className={styles.root}>
      <div className = {styles.portionsBorder}>
        <div className='table-responsive'>
          <table className='table'>
            <thead className={styles.portionsHead}>
              <tr className={styles.portionsRow}>
                <th scope='col' className={styles.portionsCell}>
                  <p><span>\</span></p>
                </th>
                <th scope='col' className={styles.portionsCell}>
                  <p><span>Baza</span></p>
                </th>
                <th scope='col' className={styles.portionsCell}>
                  <p><span>Woda (l)</span></p>
                </th>
                <th scope='col' className={styles.portionsCell}>
                  <p><span>Agar (g)</span></p>
                </th>
                <th scope='col' className={styles.portionsCell}>
                  <p><span>Cukier (kg)</span></p>
                </th>
                <th scope='col' className={styles.portionsCell}>
                  <p><span>Tłuszcz (g)</span></p>
                </th>
                <th scope='col' className={styles.portionsCell}>
                  <p><span>Kwasek (g)</span></p>
                </th>
                <th scope='col' className={styles.portionsCell}>
                  <p><span>Białko (g)</span></p>
                </th>
                <th scope='col' className={styles.portionsCell}>
                  <p><span>Syrop (kg)</span></p>
                </th>
                <th scope='col' className={styles.portionsCell}>
                  <p><span>Jab. (g)</span></p>
                </th>
                <th scope='col' className={styles.portionsCell}>
                  <p><span>Cyt. (g)</span></p>
                </th>
                <th scope='col' className={styles.portionsCell}>
                  <p><span>Kiw. (g)</span></p>
                </th>
                <th scope='col' className={styles.portionsCell}>
                  <p><span>Pom. (g)</span></p>
                </th>
                <th scope='col' className={styles.portionsCell}>
                  <p><span>Mal. (g)</span></p>
                </th>
                <th scope='col' className={styles.portionsCell}>
                  <p><span>Wiś. (g)</span></p>
                </th>
                <th scope='col' className={styles.portionsCell}>
                  <p><span>Wan. (g)</span></p>
                </th>
              </tr>
            </thead>
            <tbody className={styles.portionsData}>
              <tr className={styles.portionsRow}>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p><span>P1:</span></p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja1.toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja1 * water).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja1 * agarSummer).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja1 * sugar).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja1 * fat).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja1 * acid).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja1 * jellyProtein).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja1 * syrup).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja1 * apple).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja1 * lemon).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja1 * kiwi).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja1 * orange).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja1 * raspberry).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja1 * cherry).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja1 * vanilla).toFixed(2)}</p>
                  {/* </div> */}
                </td>

                {/* {porcja1.map((value, index2) => (
                  <td key={index2}>
                    <p>{value}</p>
                  </td>
                ))} */}
              </tr>

              <tr className={styles.portionsRow}>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p><span>P2:</span></p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja2.toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja2 * water).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja2 * agarSummer).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja2 * sugar).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja2 * fat).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja2 * acid).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja2 * foamProtein).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja2 * syrup).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja2 * apple).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja2 * lemon).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja2 * kiwi).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja2 * orange).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja2 * raspberry).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja2 * cherry).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja2 * vanilla).toFixed(2)}</p>
                  {/* </div> */}
                </td>
              </tr>

              <tr className={styles.portionsRow}>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p><span>P3:</span></p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja3.toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja3 * water).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja3 * agarSummer).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja3 * sugar).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja3 * fat).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja3 * acid).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja3 * jellyProtein).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja3 * syrup).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja3 * apple).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja3 * lemon).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja3 * kiwi).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja3 * orange).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja3 * raspberry).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja3 * cherry).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja3 * vanilla).toFixed(2)}</p>
                  {/* </div> */}
                </td>
              </tr>

              <tr className={styles.portionsRow}>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p><span>P4:</span></p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja4.toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja4 * water).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja4 * agarSummer).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja4 * sugar).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja4 * fat).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja4 * acid).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja4 * foamProtein).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja4 * syrup).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja4 * apple).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja4 * lemon).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja4 * kiwi).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja4 * orange).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja4 * raspberry).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja4 * cherry).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja4 * vanilla).toFixed(2)}</p>
                  {/* </div> */}
                </td>
              </tr>

              <tr className={styles.portionsRow}>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p><span>P5:</span></p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja5.toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja5 * water).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja5 * agarSummer).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja5 * sugar).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja5 * fat).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja5 * acid).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja5 * jellyProtein).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja5 * syrup).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja5 * apple).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja5 * lemon).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja5 * kiwi).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja5 * orange).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja5 * raspberry).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja5 * cherry).toFixed(2)}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{(porcja5 * vanilla).toFixed(2)}</p>
                  {/* </div> */}
                </td>
              </tr>

              <tr className={styles.portionsRow}>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p><span>P6:</span></p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja6}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja6 * water}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja6 * agarSummer}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja6 * sugar}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja6 * fat}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja6 * acid}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja6 * foamProtein}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja6 * syrup}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja6 * apple}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja6 * lemon}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja6 * kiwi}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja6 * orange}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja6 * raspberry}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja6 * cherry}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja6 * vanilla}</p>
                  {/* </div> */}
                </td>
              </tr>

              <tr className={styles.portionsRow}>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p><span>P7:</span></p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja7}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja7 * water}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja7 * agarSummer}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja7 * sugar}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja7 * fat}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja7 * acid}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja7 * jellyProtein}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja7 * syrup}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja7 * apple}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja7 * lemon}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja7 * kiwi}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja7 * orange}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja7 * raspberry}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja7 * cherry}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja7 * vanilla}</p>
                  {/* </div> */}
                </td>
              </tr>

              <tr className={styles.portionsRow}>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p><span>P8:</span></p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja8}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja8 * water}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja8 * agarSummer}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja8 * sugar}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja8 * fat}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja8 * acid}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja8 * foamProtein}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja8 * syrup}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja8 * apple}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja8 * lemon}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja8 * kiwi}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja8 * orange}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja8 * raspberry}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja8 * cherry}</p>
                  {/* </div> */}
                </td>
                <td className={styles.portionsCell}>
                  {/* <div className={styles.portionsCell}> */}
                  <p>{porcja8 * vanilla}</p>
                  {/* </div> */}
                </td>
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

  porcja1: PropTypes.number,
  porcja2: PropTypes.number,
  porcja3: PropTypes.number,
  porcja4: PropTypes.number,
  porcja5: PropTypes.number,
  porcja6: PropTypes.number,
  porcja7: PropTypes.number,
  porcja8: PropTypes.number,
  multipliers: PropTypes.array,
  // porcja7: PropTypes.number,
  // porcja8: PropTypes.number,
};

export default PortionBox;

