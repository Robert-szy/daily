import React from 'react';
import styles from './WeightsPage.module.scss';
import PropTypes from 'prop-types';


// import AllProducts from '../../features/AllProducts/AllProductsContainer';


class WeightsPage extends React.Component {
  state = {
    activePage: 0,
    editable: 'no',
    activePageStyle: styles.fadeIn,
  };

  componentDidMount(){
    this.props.fetchWeightsFromAPI();
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
                    <p className={styles.data}>{item.weightValue}</p>
                  </td>
                  <td>
                    <p className={styles.data}>{item.weightUnit}</p>
                  </td>
                  <td>
                    <p className={styles.data}>{item.weightLayers[0]}</p>
                  </td>
                  <td>
                    <p className={styles.data}>{item.weightLayers[1]}</p>
                  </td>
                  <td>
                    <p className={styles.data}>{item.weightLayers[2]}</p>
                  </td>
                  <td>
                    <p className={styles.data}>{item.weightLayers[3]}</p>
                  </td>
                  <td>
                    <p className={styles.data}>{item.weightLayers[4]}</p>
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
  // weights: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.string,
  //     weightName: PropTypes.string,
  //     weightValue: PropTypes.number,
  //     weightLayers: PropTypes.array,
  //   }),
  // ),
  weights: PropTypes.array,
  fetchWeightsFromAPI: PropTypes.func,

  // setScreenType: PropTypes.func,
  // maxProductsOnPage: PropTypes.number,
  // addToCart: PropTypes.func,
};

WeightsPage.defaultProps = {
  weights: [],
};

export default WeightsPage;
