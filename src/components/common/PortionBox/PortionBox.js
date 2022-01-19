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

  const { id, data, portion, porcja1, porcja2, porcja3, porcja4, porcja5, porcja6 } = props;
  const portionNumb = ['porcja1', 'porcja2', 'porcja3', 'porcja4', 'porcja5', 'porcja6'];
  const portionIngr = [1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

  return (
    <div className={styles.root}>
      <div className = {styles.portionsBorder}>

        <div className='table-responsive'>
          <table className='table'>
            <thead className={styles.portionsHead}>
              <tr>
                <th scope='col' className='align-middle text-left'></th>
                <th scope='col' className={'align-middle + text-left' + styles.portionsBaza}>
                  Baza
                </th>
                <th scope='col' className='align-middle text-left'>
                  Woda (l)
                </th>
                <th scope='col' className='align-middle text-left'>
                  Agar (g)
                </th>
                <th scope='col' className='align-middle text-left'>
                  Cukier (kg)
                </th>
                <th scope='col' className='align-middle text-left'>
                  Tłuszcz (g)
                </th>
                <th scope='col' className='align-middle text-left'>
                  Kwasek (g)
                </th>
                <th scope='col' className='align-middle text-left'>
                  Białko (g)
                </th>
                <th scope='col' className='align-middle text-left'>
                  Syrop (kg)
                </th>
                <th scope='col' className='align-middle text-left'>
                  Jabł (g)
                </th>
                <th scope='col' className='align-middle text-left'>
                  Cytr (g)
                </th>
                <th scope='col' className='align-middle text-left'>
                  Kiwi (g)
                </th>
                <th scope='col' className='align-middle text-left'>
                  Poma (g)
                </th>
                <th scope='col' className='align-middle text-left'>
                  Mali (g)
                </th>
                <th scope='col' className='align-middle text-left'>
                  Wiśn (g)
                </th>
                <th scope='col' className='align-middle text-left'>
                  Wani (g)
                </th>
              </tr>
            </thead>
            <tbody>

              <div className={styles.portionsData}>
                {portion.map (layer => (
                  <tr key={layer.id}>
                    <div className={styles.portionsRow}>
                      <p><span>Porcja {layer.id+1}:</span></p>

                      {portionIngr.map((ingrvalue, index2) => {
                        return(<p key={index2}>{porcja1[index2]}</p>
                        );
                      })}
                    </div>
                  </tr>

                  //     {portionIngr.map((ingrvalue, index2) => {
                  //       return(<div key={index2} className={styles.portionsCell}><p>{porcja2[index2]}</p></div>
                  //       );
                  //     })}

                  //     {portionIngr.map((ingrvalue, index2) => {
                  //       return(<p key={index2}>{porcja3[index2]}</p>
                  //       );
                  //     })}

                  //     {portionIngr.map((ingrvalue, index2) => {
                  //       return(<p key={index2}>{porcja4[index2]}</p>
                  //       );
                  //     })}

                  //     {portionIngr.map((ingrvalue, index2) => {
                  //       return(<p key={index2}>{porcja5[index2]}</p>
                  //       );
                  //     })}

                  //     {portionIngr.map((ingrvalue, index2) => {
                  //       return(<p key={index2}>{porcja6[index2]}</p>
                  //       );
                  //     })}

                  //   </div>
                ))}
              </div>



              {/* {portionNumb.map ((value, index1) => {
                return (<div key={index1}>
                  <div className={styles.portionsRow}>
                    <p><span>Porcja {index1+1}:</span></p>



                    {portionIngr.map((ingrvalue, index2) => {
                      return(<p key={index2}>{(value)*1}</p>

                      );
                    })}

                  </div>
                </div>);
                })} */}


              {/* <div className={styles.portionsRow}>
              <p><span>Porcja 1:</span></p><p>{porcja1[0]}</p>
              </div> */}
              {/* <div className={styles.portionsRow}> */}
              {/* <p><span>Porcja 2:</span></p>
                  <p>{porcja2[0]}</p>
                <p>{porcja2[1]}</p>
                <p>{porcja2[2]}</p>
                <p>{porcja2[3]}</p>
                <p>{porcja2[4]}</p>
                <p>{porcja2[5]}</p>
                <p>{porcja2[6]}</p>
                <p>{porcja2[7]}</p>
                <p>{porcja2[8]}</p>
                <p>{porcja2[9]}</p>
                <p>{porcja2[10]}</p>
                <p>{porcja2[11]}</p>
                <p>{porcja2[12]}</p>
                <p>{porcja2[13]}</p>
                <p>{porcja2[14]}</p>
                <p>{porcja2[14]}</p> */}
              {/* </div> */}
              {/* <div className={styles.portionsRow}>
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
                </div> */}
              {/* </div> */}

            </tbody>
          </table>
        </div>

        {/* <div className={styles.portionsHead}>
          <div className={styles.portionsCell}>
            <p><span></span></p>
          </div>
          <div className={styles.portionsCell}>
            <p className={styles.portionsBaza}><span>Baza</span></p>
          </div>
          <div className={styles.portionsCell}>
            <p><span>Woda (l)</span></p>
          </div>
          <div className={styles.portionsCell}>
            <p><span>Agar (g)</span></p>
          </div>
          <div className={styles.portionsCell}>
            <p><span>Cukier (kg)</span></p>
          </div>
          <div className={styles.portionsCell}>
            <p><span>Tłuszcz (g)</span></p>
          </div>
          <div className={styles.portionsCell}>
            <p><span>Kwasek (g)</span></p>
          </div>
          <div className={styles.portionsCell}>
            <p><span>Białko (g)</span></p>
          </div>
          <div className={styles.portionsCell}>
            <p><span>Syrop (kg)</span></p>
          </div>
          <div className={styles.portionsCell}>
            <p><span>Jab (g)</span></p>
          </div>
          <div className={styles.portionsCell}>
            <p><span>Cyt (g)</span></p>
          </div>
          <div className={styles.portionsCell}>
            <p><span>Kiw (g)</span></p>
          </div>
          <div className={styles.portionsCell}>
            <p><span>Pom (g)</span></p>
          </div>
          <div className={styles.portionsCell}>
            <p><span>Mal (g)</span></p>
          </div>
          <div className={styles.portionsCell}>
            <p><span>Wiś (g)</span></p>
          </div>
          <div className={styles.portionsCell}>
            <p><span>Wan (g)</span></p>
          </div>
        </div> */}

        <div className={styles.portionsData}>


          {portionNumb.map ((value, index1) => {
            return (<div key={index1}>
              <div className={styles.portionsRow}>
                <p><span>Porcja {index1+1}:</span></p>

                {portionIngr.map((ingrvalue, index2) => {
                  return(<p key={index2}>{porcja1[index2]}</p>
                  );
                })}

                {portionIngr.map((ingrvalue, index2) => {
                  return(<div key={index2} className={styles.portionsCell}><p>{porcja2[index2]}</p></div>
                  );
                })}

                {portionIngr.map((ingrvalue, index2) => {
                  return(<p key={index2}>{porcja3[index2]}</p>
                  );
                })}

                {portionIngr.map((ingrvalue, index2) => {
                  return(<p key={index2}>{porcja4[index2]}</p>
                  );
                })}

                {portionIngr.map((ingrvalue, index2) => {
                  return(<p key={index2}>{porcja5[index2]}</p>
                  );
                })}

                {portionIngr.map((ingrvalue, index2) => {
                  return(<p key={index2}>{porcja6[index2]}</p>
                  );
                })}

              </div>
            </div>);
          })}


          {/* {portionNumb.map ((value, index1) => {
          return (<div key={index1}>
            <div className={styles.portionsRow}>
              <p><span>Porcja {index1+1}:</span></p>



              {portionIngr.map((ingrvalue, index2) => {
                return(<p key={index2}>{(value)*1}</p>

                );
              })}

            </div>
          </div>);
        })} */}


          {/* <div className={styles.portionsRow}>
          <p><span>Porcja 1:</span></p><p>{porcja1[0]}</p>
        </div> */}
          <div className={styles.portionsRow}>
            {/* <p><span>Porcja 2:</span></p>
            <p>{porcja2[0]}</p>
          <p>{porcja2[1]}</p>
          <p>{porcja2[2]}</p>
          <p>{porcja2[3]}</p>
          <p>{porcja2[4]}</p>
          <p>{porcja2[5]}</p>
          <p>{porcja2[6]}</p>
          <p>{porcja2[7]}</p>
          <p>{porcja2[8]}</p>
          <p>{porcja2[9]}</p>
          <p>{porcja2[10]}</p>
          <p>{porcja2[11]}</p>
          <p>{porcja2[12]}</p>
          <p>{porcja2[13]}</p>
          <p>{porcja2[14]}</p>
          <p>{porcja2[14]}</p> */}
          </div>
          {/* <div className={styles.portionsRow}>
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
        </div> */}
        </div>
      </div>
    </div>
  );

};

PortionBox.propTypes = {
  id: PropTypes.string,
  handleAddClick: PropTypes.func,
  data: PropTypes.string,
  portion: PropTypes.array,

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

