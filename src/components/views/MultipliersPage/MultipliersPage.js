import React from 'react';
import styles from './MultipliersPage.module.scss';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';

class MultipliersPage extends React.Component {
  state = {
    activePage: 0,
    editable: 'no',
    activePageStyle: styles.fadeIn,
  };

  componentDidMount(){
    this.props.fetchMultipliersFromAPI();
  }

  handleMultiplierChange(id, newValue) {
    console.log('id', id);
    console.log('newValue', newValue);
    this.props.changeMultiplierInDB({ id, multiplierValue: newValue });
  }

  render() {
    const {
      multipliers,
    } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope='col'>
                  <p className={styles.header}>Mnożnik</p>
                </th>
                <th scope='col'>
                  <p className={styles.header}>Wartość</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                multipliers.map(item => (
                  <tr key={item.id}>
                    {/* <Link */}
                    <th scope='row'>
                      <p className={styles.header}>{item.multiplierName}</p>
                    </th>
                    <td>
                      <div className={styles.data}>
                        <input id={item._id} defaultValue={item.multiplierValue} ></input>
                      </div>
                    </td>
                    <td>
                      <Button className={styles.button1} variant='outline' onClick={() => this.handleMultiplierChange(item._id, document.getElementById(item._id).value)}>
                        ZMIEŃ
                      </Button>
                    </td>
                    {/* </Link> */}
                  </tr>

                ))
              }
            </tbody>
          </table>
          {/* </ul> */}
        </div>
      </div>
    );
  }
}

MultipliersPage.propTypes = {
  multipliers: PropTypes.array,
  fetchMultipliersFromAPI: PropTypes.func,
  changeMultiplierInDB: PropTypes.func,
  // setScreenType: PropTypes.func,
};

MultipliersPage.defaultProps = {
  multipliers: [],

};

export default MultipliersPage;
