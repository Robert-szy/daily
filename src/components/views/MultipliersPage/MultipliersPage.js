import React from 'react';
import styles from './MultipliersPage.module.scss';
import PropTypes from 'prop-types';

class MultipliersPage extends React.Component {
  state = {
    activePage: 0,
    editable: 'no',
    activePageStyle: styles.fadeIn,
    multipliers: this.props.multipliers,
  };

  render() {
    const {
      multipliers,
    } = this.props;

    console.log('multipliers wmultiplierspage', multipliers);

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
              {multipliers.map(item => (
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

              ))}
            </tbody>
          </table>
          {/* </ul> */}
        </div>
      </div>
    );
  }
}

MultipliersPage.propTypes = {
  multipliers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      multiplierName: PropTypes.string,
      multiplierValue: PropTypes.number,
    }),
  ),
  // setScreenType: PropTypes.func,
  // maxProductsOnPage: PropTypes.number,
  // addToCart: PropTypes.func,
};

MultipliersPage.defaultProps = {
  multipliers: [],
};

export default MultipliersPage;
