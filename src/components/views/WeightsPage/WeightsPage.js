import React from 'react';
import styles from './WeightsPage.module.scss';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
// import { FaCheck } from 'react-icons/fa';


class WeightsPage extends React.Component {
  state = {
    activePage: 0,
    editable: 'no',
    activePageStyle: styles.fadeIn,
  };

  componentDidMount(){
    this.props.fetchWeightsFromAPI();
  }

  handleWeightValueChange(id, newWeightValue) {
    this.props.changeWeightValueInDB({ id, newWeightValue });
  }

  handleLayerValueChange(id, newLayerValue0, newLayerValue1, newLayerValue2, newLayerValue3, newLayerValue4) {
    const newWeightLayers = [newLayerValue0, newLayerValue1, newLayerValue2, newLayerValue3, newLayerValue4];
    this.props.changeLayerValueInDB({ id, newWeightLayers });
  }

  render() {
    const {
      weights,
    } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope='col'>
                  <p className={styles.header}>Pozycja</p>
                </th>
                <th scope='col'>
                  <p className={styles.header}>Ilość</p>
                </th>
                <th scope='col'>
                  <p className={styles.header}></p>
                </th>
                <th scope='col'>
                  <p className={styles.header}>Jednostka</p>
                </th>
                <th scope='col'>
                  <p className={styles.header}>Kg/Porcja1</p>
                </th>
                <th scope='col'>
                  <p className={styles.header}>Kg/Porcja2</p>
                </th>
                <th scope='col'>
                  <p className={styles.header}>Kg/Porcja3</p>
                </th>
                <th scope='col'>
                  <p className={styles.header}>Kg/Porcja4</p>
                </th>
                <th scope='col'>
                  <p className={styles.header}>Kg/Porcja5</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {weights.map(item => (
                <tr key={item.id}>
                  {/* <Link */}
                  <th scope='row'>
                    <p className={styles.header}>{item.weightName}</p>
                  </th>
                  <td>
                    <div className={styles.data}>
                      <input id={item._id} defaultValue={item.weightValue} ></input>
                    </div>
                  </td>
                  <td>
                    <Button className={styles.button1} variant='outline' onClick={() => this.handleWeightValueChange(item._id, document.getElementById(item._id).value)}>
                        ZMIEŃ
                    </Button>
                  </td>
                  <td>
                    <p className={styles.data}>{item.weightUnit}</p>
                  </td>
                  <td>
                    <input id={`layer_0${item.id}`} defaultValue={item.weightLayers[0]} ></input>
                  </td>
                  <td>
                    <input id={`layer_1${item.id}`} defaultValue={item.weightLayers[1]} ></input>
                  </td>
                  <td>
                    <input id={`layer_2${item.id}`} defaultValue={item.weightLayers[2]} ></input>
                  </td>
                  <td>
                    <input id={`layer_3${item.id}`} defaultValue={item.weightLayers[3]} ></input>
                  </td>
                  <td>
                    <input id={`layer_4${item.id}`} defaultValue={item.weightLayers[4]} ></input>
                  </td>
                  <td>
                    <Button className={styles.button1} variant='outline' onClick={() =>
                      this.handleLayerValueChange(
                        item._id,
                        document.getElementById(`layer_0${item.id}`).value,
                        document.getElementById(`layer_1${item.id}`).value,
                        document.getElementById(`layer_2${item.id}`).value,
                        document.getElementById(`layer_3${item.id}`).value,
                        document.getElementById(`layer_4${item.id}`).value
                      )
                    }>
                      ZMIEŃ
                    </Button>
                  </td>
                  {/* </Link> */}
                </tr>

              ))}
            </tbody>
          </table>
          {/* </ul> */}
        </div>


      </div>
    );
  }
}

WeightsPage.propTypes = {
  weights: PropTypes.array,
  fetchWeightsFromAPI: PropTypes.func,
  changeWeightValueInDB: PropTypes.func,
  changeLayerValueInDB: PropTypes.func,
  // setScreenType: PropTypes.func,
};

WeightsPage.defaultProps = {
  weights: [],
};

export default WeightsPage;
