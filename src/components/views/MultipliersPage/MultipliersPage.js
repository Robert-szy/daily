import React from 'react';
import styles from './MultipliersPage.module.scss';
import PropTypes from 'prop-types';

class MultipliersPage extends React.Component {
  state = {
    activePage: 0,
    editable: 'no',
    activePageStyle: styles.fadeIn,
  };

  componentDidMount(){
    this.props.fetchMultipliersFromAPI();
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
                      <p className={styles.data}>{item.multiplierValue}</p>
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

  // setScreenType: PropTypes.func,
};

MultipliersPage.defaultProps = {
  multipliers: [],

};

export default MultipliersPage;
