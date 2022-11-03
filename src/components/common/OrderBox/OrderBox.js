import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './OrderBox.module.scss';
import PortionBox from '../PortionBox/PortionBoxContainer';
// import { get } from 'http';
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

  const weights = useSelector((state) => state.weights.weights);

  const babeczkiValue = weights.find(item => item.id === 'babeczki').weightValue;
  const babeczkiNewValue = babeczkiValue;
  const babeczkiLayers = weights.find(item => item.id === 'babeczki').weightLayers;

  const b1Value = weights.find(item => item.id === 'b1').weightValue;
  const b1NewValue = b1Value;
  const b1Layers = weights.find(item => item.id === 'b1').weightLayers;

  const b2Value = weights.find(item => item.id === 'b2').weightValue;
  const b2NewValue = b2Value;
  const b2Layers = weights.find(item => item.id === 'b2').weightLayers;

  const danusiaValue = weights.find(item => item.id === 'danusia').weightValue;
  const danusiaNewValue = danusiaValue;
  const danusiaLayers = weights.find(item => item.id === 'danusia').weightLayers;

  const slomkaValue = weights.find(item => item.id === 'slomka').weightValue;
  const slomkaNewValue = slomkaValue;
  const slomkaLayers = weights.find(item => item.id === 'slomka').weightLayers;

  const kosteczkaValue = weights.find(item => item.id === 'kosteczka').weightValue;
  const kosteczkaNewValue = kosteczkaValue;
  const kosteczkaLayers = weights.find(item => item.id === 'kosteczka').weightLayers;

  const weronkiValue = weights.find(item => item.id === 'weronki').weightValue;
  const weronkiNewValue = weronkiValue;
  const weronkiLayers = weights.find(item => item.id === 'weronki').weightLayers;

  const miniValue = weights.find(item => item.id === 'mini').weightValue;
  const miniNewValue = miniValue;
  const miniLayers = weights.find(item => item.id === 'mini').weightLayers;

  const kolorValue = weights.find(item => item.id === 'kolor').weightValue;
  const kolorNewValue = kolorValue;
  const kolorLayers = weights.find(item => item.id === 'kolor').weightLayers;

  const piankaValue = weights.find(item => item.id === 'pianka').weightValue;
  const piankaNewValue = piankaValue;
  const piankaLayers = weights.find(item => item.id === 'pianka').weightLayers;


  // const pots = useState(1);
  const porcja1 = b1Layers[0]*b1NewValue/b1Value +
                  b2Layers[0]*b2NewValue/b2Value +
                  danusiaLayers[0]*danusiaNewValue/danusiaValue +
                  slomkaLayers[0]*slomkaNewValue/slomkaValue +
                  kosteczkaLayers[0]*kosteczkaNewValue/kosteczkaValue +
                  weronkiLayers[0]*weronkiNewValue/weronkiValue +
                  miniLayers[0]*miniNewValue/miniValue +
                  babeczkiLayers[0]*babeczkiNewValue/babeczkiValue +
                  kolorLayers[0]*kolorNewValue/kolorValue +
                  piankaLayers[0]*piankaNewValue/piankaValue;
  const porcja2 = b1Layers[1]*b1NewValue/b1Value +
                  b2Layers[1]*b2NewValue/b2Value +
                  danusiaLayers[1]*danusiaNewValue/danusiaValue +
                  slomkaLayers[1]*slomkaNewValue/slomkaValue +
                  kosteczkaLayers[1]*kosteczkaNewValue/kosteczkaValue +
                  weronkiLayers[1]*weronkiNewValue/weronkiValue +
                  miniLayers[1]*miniNewValue/miniValue +
                  babeczkiLayers[1]*babeczkiNewValue/babeczkiValue +
                  kolorLayers[1]*kolorNewValue/kolorValue +
                  piankaLayers[1]*piankaNewValue/piankaValue;
  const porcja3 = b1Layers[2]*b1NewValue/b1Value +
                  b2Layers[2]*b2NewValue/b2Value +
                  danusiaLayers[2]*danusiaNewValue/danusiaValue +
                  slomkaLayers[2]*slomkaNewValue/slomkaValue +
                  kosteczkaLayers[2]*kosteczkaNewValue/kosteczkaValue +
                  weronkiLayers[2]*weronkiNewValue/weronkiValue +
                  miniLayers[2]*miniNewValue/miniValue +
                  babeczkiLayers[2]*babeczkiNewValue/babeczkiValue +
                  kolorLayers[2]*kolorNewValue/kolorValue +
                  piankaLayers[2]*piankaNewValue/piankaValue;
  const porcja4 = b1Layers[3]*b1NewValue/b1Value +
                  b2Layers[3]*b2NewValue/b2Value +
                  danusiaLayers[3]*danusiaNewValue/danusiaValue +
                  slomkaLayers[3]*slomkaNewValue/slomkaValue +
                  kosteczkaLayers[3]*kosteczkaNewValue/kosteczkaValue +
                  weronkiLayers[3]*weronkiNewValue/weronkiValue +
                  miniLayers[3]*miniNewValue/miniValue +
                  babeczkiLayers[3]*babeczkiNewValue/babeczkiValue +
                  kolorLayers[3]*kolorNewValue/kolorValue +
                  piankaLayers[3]*piankaNewValue/piankaValue;
  const porcja5 = b1Layers[4]*b1NewValue/b1Value +
                  b2Layers[4]*b2NewValue/b2Value +
                  danusiaLayers[4]*danusiaNewValue/danusiaValue +
                  slomkaLayers[4]*slomkaNewValue/slomkaValue +
                  kosteczkaLayers[4]*kosteczkaNewValue/kosteczkaValue +
                  weronkiLayers[4]*weronkiNewValue/weronkiValue +
                  miniLayers[4]*miniNewValue/miniValue +
                  babeczkiLayers[4]*babeczkiNewValue/babeczkiValue +
                  kolorLayers[4]*kolorNewValue/kolorValue +
                  piankaLayers[4]*piankaNewValue/piankaValue;
  const porcja6 = b1Layers[5]*b1NewValue/b1Value +
                  b2Layers[5]*b2NewValue/b2Value +
                  danusiaLayers[5]*danusiaNewValue/danusiaValue +
                  slomkaLayers[5]*slomkaNewValue/slomkaValue +
                  kosteczkaLayers[5]*kosteczkaNewValue/kosteczkaValue +
                  weronkiLayers[5]*weronkiNewValue/weronkiValue +
                  miniLayers[5]*miniNewValue/miniValue +
                  babeczkiLayers[5]*babeczkiNewValue/babeczkiValue +
                  kolorLayers[5]*kolorNewValue/kolorValue +
                  piankaLayers[5]*piankaNewValue/piankaValue;
  const porcja7 = b1Layers[6]*b1NewValue/b1Value +
                  b2Layers[6]*b2NewValue/b2Value +
                  danusiaLayers[6]*danusiaNewValue/danusiaValue +
                  slomkaLayers[6]*slomkaNewValue/slomkaValue +
                  kosteczkaLayers[6]*kosteczkaNewValue/kosteczkaValue +
                  weronkiLayers[6]*weronkiNewValue/weronkiValue +
                  miniLayers[6]*miniNewValue/miniValue +
                  babeczkiLayers[6]*babeczkiNewValue/babeczkiValue +
                  kolorLayers[6]*kolorNewValue/kolorValue +
                  piankaLayers[6]*piankaNewValue/piankaValue;
  const porcja8 = b1Layers[7]*b1NewValue/b1Value +
                  b2Layers[7]*b2NewValue/b2Value +
                  danusiaLayers[7]*danusiaNewValue/danusiaValue +
                  slomkaLayers[7]*slomkaNewValue/slomkaValue +
                  kosteczkaLayers[7]*kosteczkaNewValue/kosteczkaValue +
                  weronkiLayers[7]*weronkiNewValue/weronkiValue +
                  miniLayers[7]*miniNewValue/miniValue +
                  babeczkiLayers[7]*babeczkiNewValue/babeczkiValue +
                  kolorLayers[7]*kolorNewValue/kolorValue +
                  piankaLayers[7]*piankaNewValue/piankaValue;
  const portions = {porcja1, porcja2, porcja3, porcja4, porcja5, porcja6, porcja7, porcja8};
  // console.log('portions in orderbox', portions);
  // console.log('b1 in orderbox', yola);

  return (
    <div className={styles.root}>
      <div className = {styles.ordersBorder}>
        <div className={styles.ordersData}>
          <p><span>Data produkcji:</span></p><p>{data}</p>
          <p>Aktualny czas: {new Date().toLocaleTimeString()}.</p>
        </div>
        <div className={styles.ordersBlock}>
          <div className={styles.ordersGelly}>

            <thead className={styles.ordersHead}>
              <tr className={styles.ordersRow}>
                <th scope='col' className={styles.cellData}><p>\</p></th>
                <th scope='col' className={styles.cellData}>
                  <p><span>Ilość</span></p>
                </th>
                <th scope='col' className={styles.cellData}>
                  <p><span>P1</span></p>
                </th>
                <th scope='col' className={styles.cellData}>
                  <p><span>P2</span></p>
                </th>
                <th scope='col' className={styles.cellData}>
                  <p><span>P3</span></p>
                </th>
                <th scope='col' className={styles.cellData}>
                  <p><span>P4</span></p>
                </th>
                <th scope='col' className={styles.cellData}>
                  <p><span>P5</span></p>
                </th>
                <th scope='col' className={styles.cellData}>
                  <p><span>P6</span></p>
                </th>
                <th scope='col' className={styles.cellData}>
                  <p><span>P7</span></p>
                </th>
                <th scope='col' className={styles.cellData}>
                  <p><span>P8</span></p>
                </th>
              </tr>
            </thead>
            <tbody className={styles.ordersBody}>
              <tr className={styles.ordersRow}>
                <td className={styles.cellData}>
                  <p><span>B1:</span></p>
                </td>

                {/* {b1.map((value, index2) => (
                  <td key={index2} className={styles.cellData}>
                    <p>{value}</p>
                  </td>
                ))} */}
                <td className={styles.cellData}>
                  <input id={'b10'} defaultValue={b1Value}></input>
                </td>
                <td className={styles.cellData}>
                  <p>{b1Layers[0]*b1NewValue/b1Value}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{b1Layers[1]*b1NewValue/b1Value}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{b1Layers[2]*b1NewValue/b1Value}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{b1Layers[3]*b1NewValue/b1Value}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{b1Layers[4]*b1NewValue/b1Value}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{b1Layers[5]*b1NewValue/b1Value}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{b1Layers[6]*b1NewValue/b1Value}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{b1Layers[7]*b1NewValue/b1Value}</p>
                </td>
              </tr>
              <tr className={styles.ordersRow}>
                <td className={styles.cellData}>
                  <p><span>B2:</span></p>
                </td>

                <td className={styles.cellData}>
                  <input id={'b20'} defaultValue={b2Value}></input>
                </td>
                <td className={styles.cellData}>
                  <p>{b2Layers[0]*b2NewValue/b2Value}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{b2Layers[1]*b2NewValue/b2Value}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{b2Layers[2]*b2NewValue/b2Value}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{b2Layers[3]*b2NewValue/b2Value}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{b2Layers[4]*b2NewValue/b2Value}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{b2Layers[5]*b2NewValue/b2Value}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{b2Layers[6]*b2NewValue/b2Value}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{b2Layers[7]*b2NewValue/b2Value}</p>
                </td>
              </tr>
              <tr className={styles.ordersRow}>
                <td className={styles.cellData}>
                  <p><span>Danusia:</span></p>
                </td>

                <td className={styles.cellData}>
                  <input id={'danusia0'} defaultValue={danusiaValue}></input>
                </td>
                <td className={styles.cellData}>
                  <p>{danusiaLayers[0]*danusiaNewValue/danusiaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{danusiaLayers[1]*danusiaNewValue/danusiaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{danusiaLayers[2]*danusiaNewValue/danusiaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{danusiaLayers[3]*danusiaNewValue/danusiaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{danusiaLayers[4]*danusiaNewValue/danusiaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{danusiaLayers[5]*danusiaNewValue/danusiaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{danusiaLayers[6]*danusiaNewValue/danusiaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{danusiaLayers[7]*danusiaNewValue/danusiaValue}</p>
                </td>
              </tr>
              <tr className={styles.ordersRow}>
                <td className={styles.cellData}>
                  <p><span>Słomka:</span></p>
                </td>

                <td className={styles.cellData}>
                  <input id={'slomka0'} defaultValue={slomkaValue}></input>
                </td>
                <td className={styles.cellData}>
                  <p>{slomkaLayers[0]*slomkaNewValue/slomkaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{slomkaLayers[1]*slomkaNewValue/slomkaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{slomkaLayers[2]*slomkaNewValue/slomkaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{slomkaLayers[3]*slomkaNewValue/slomkaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{slomkaLayers[4]*slomkaNewValue/slomkaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{slomkaLayers[5]*slomkaNewValue/slomkaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{slomkaLayers[6]*slomkaNewValue/slomkaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{slomkaLayers[7]*slomkaNewValue/slomkaValue}</p>
                </td>
              </tr>
              <tr className={styles.ordersRow}>
                <td className={styles.cellData}>
                  <p><span>Kostka:</span></p>
                </td>

                <td className={styles.cellData}>
                  <input id={'kostka0'} defaultValue={kosteczkaValue}></input>
                </td>
                <td className={styles.cellData}>
                  <p>{kosteczkaLayers[0]*kosteczkaNewValue/kosteczkaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{kosteczkaLayers[1]*kosteczkaNewValue/kosteczkaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{kosteczkaLayers[2]*kosteczkaNewValue/kosteczkaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{kosteczkaLayers[3]*kosteczkaNewValue/kosteczkaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{kosteczkaLayers[4]*kosteczkaNewValue/kosteczkaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{kosteczkaLayers[5]*kosteczkaNewValue/kosteczkaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{kosteczkaLayers[6]*kosteczkaNewValue/kosteczkaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{kosteczkaLayers[7]*kosteczkaNewValue/kosteczkaValue}</p>
                </td>
              </tr>
              <tr className={styles.ordersRow}>
                <td className={styles.cellData}>
                  <p><span>Weronki:</span></p>
                </td>

                <td className={styles.cellData}>
                  <input id={'weronki0'} defaultValue={weronkiValue}></input>
                </td>
                <td className={styles.cellData}>
                  <p>{weronkiLayers[0]*weronkiNewValue/weronkiValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{weronkiLayers[1]*weronkiNewValue/weronkiValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{weronkiLayers[2]*weronkiNewValue/weronkiValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{weronkiLayers[3]*weronkiNewValue/weronkiValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{weronkiLayers[4]*weronkiNewValue/weronkiValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{weronkiLayers[5]*weronkiNewValue/weronkiValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{weronkiLayers[6]*weronkiNewValue/weronkiValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{weronkiLayers[7]*weronkiNewValue/weronkiValue}</p>
                </td>
              </tr>
              <tr className={styles.ordersRow}>
                <td className={styles.cellData}>
                  <p><span>Mini:</span></p>
                </td>

                <td className={styles.cellData}>
                  <input id={'mini0'} defaultValue={miniValue}></input>
                </td>
                <td className={styles.cellData}>
                  <p>{miniLayers[0]*miniNewValue/miniValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{miniLayers[1]*miniNewValue/miniValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{miniLayers[2]*miniNewValue/miniValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{miniLayers[3]*miniNewValue/miniValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{miniLayers[4]*miniNewValue/miniValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{miniLayers[5]*miniNewValue/miniValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{miniLayers[6]*miniNewValue/miniValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{miniLayers[7]*miniNewValue/miniValue}</p>
                </td>
              </tr>
              <tr className={styles.ordersRow}>
                <td className={styles.cellData}>
                  <p><span>Babeczki:</span></p>
                </td>

                <td className={styles.cellData}>
                  <input id={'babeczki0'} defaultValue={babeczkiValue}></input>
                </td>
                <td className={styles.cellData}>
                  <p>{babeczkiLayers[0]*babeczkiNewValue/babeczkiValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{babeczkiLayers[1]*babeczkiNewValue/babeczkiValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{babeczkiLayers[2]*babeczkiNewValue/babeczkiValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{babeczkiLayers[3]*babeczkiNewValue/babeczkiValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{babeczkiLayers[4]*babeczkiNewValue/babeczkiValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{babeczkiLayers[5]*babeczkiNewValue/babeczkiValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{babeczkiLayers[6]*babeczkiNewValue/babeczkiValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{babeczkiLayers[7]*babeczkiNewValue/babeczkiValue}</p>
                </td>
              </tr>
              <tr className={styles.ordersRow}>
                <td className={styles.cellData}>
                  <p><span>Kolor:</span></p>
                </td>

                <td className={styles.cellData}>
                  <input id={'kolor0'} defaultValue={kolorValue}></input>
                </td>
                <td className={styles.cellData}>
                  <p>{kolorLayers[0]*kolorNewValue/kolorValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{kolorLayers[1]*kolorNewValue/kolorValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{kolorLayers[2]*kolorNewValue/kolorValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{kolorLayers[3]*kolorNewValue/kolorValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{kolorLayers[4]*kolorNewValue/kolorValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{kolorLayers[5]*kolorNewValue/kolorValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{kolorLayers[6]*kolorNewValue/kolorValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{kolorLayers[7]*kolorNewValue/kolorValue}</p>
                </td>
              </tr>
              <tr className={styles.ordersRow}>
                <td className={styles.cellData}>
                  <p><span>Pianka:</span></p>
                </td>

                <td className={styles.cellData}>
                  <input id={'pianka0'} defaultValue={piankaValue}></input>
                </td>
                <td className={styles.cellData}>
                  <p>{piankaLayers[0]*piankaNewValue/piankaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{piankaLayers[1]*piankaNewValue/piankaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{piankaLayers[2]*piankaNewValue/piankaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{piankaLayers[3]*piankaNewValue/piankaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{piankaLayers[4]*piankaNewValue/piankaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{piankaLayers[5]*piankaNewValue/piankaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{piankaLayers[6]*piankaNewValue/piankaValue}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{piankaLayers[7]*piankaNewValue/piankaValue}</p>
                </td>
              </tr>
              <tr className={styles.ordersRow}>
                <td className={styles.cellData}>
                  <p><span>Suma:</span></p>
                </td>
                <td className={styles.cellData}>
                  <p> </p>
                </td>
                <td className={styles.cellData}>
                  <p>{porcja1}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{porcja2}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{porcja3}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{porcja4}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{porcja5}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{porcja6}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{porcja7}</p>
                </td>
                <td className={styles.cellData}>
                  <p>{porcja8}</p>
                </td>
              </tr>
            </tbody>
          </div>
          <div className={styles.portionBox}>
            <PortionBox
              {...portions}
            />
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
                  <p><span>BJ:</span></p>
                </td>
                <td className={styles.cellData}>
                  <p><span>BCM:</span></p>
                </td>
                <td className={styles.cellData}>
                  <p><span>BJM:</span></p>
                </td>
                <td className={styles.cellData}>
                  <p><span>BCBC:</span></p>
                </td>
                <td className={styles.cellData}>
                  <p><span>Yola:</span></p>
                </td>

              </tr>
              <tr className={styles.ordersRow}>
                <td className={styles.cellData}>
                  <input id={'bc'} defaultValue={bc}></input>
                </td>
                <td className={styles.cellData}>
                  <input id={'bj'} defaultValue={bj}></input>
                </td>
                <td className={styles.cellData}>
                  <input id={'bcm'} defaultValue={bcm}></input>
                </td>
                <td className={styles.cellData}>
                  <input id={'bjm'} defaultValue={bjm}></input>
                </td>
                <td className={styles.cellData}>
                  <input id={'bcbc'} defaultValue={bcbc}></input>
                </td>
                <td className={styles.cellData}>
                  <input id={'yola'} defaultValue={yola}></input>
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









