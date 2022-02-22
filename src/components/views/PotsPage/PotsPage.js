import React from 'react';
import styles from './PotsPage.module.scss';
import PropTypes from 'prop-types';


class PotsPage extends React.Component {
  state = {
    activePage: 0,
    editable: 'no',
    activePageStyle: styles.fadeIn,
    pots: this.props.pots,

  };

  render() {
    const {
      pots,
    } = this.props;
    console.log('pots', pots);
    return (
      <div className={styles.root}>
        <div className='container'>
          <table className={styles.active}>

            {/* <div className={'col-auto col-md ' + styles.menu}> */}
            {/* <ul> */}
            <thead>
              <tr>
                <th scope='col'>
                  <p className={styles.header}>Rodzaj</p>
                </th>
                <th scope='col'>
                  <p className={styles.header}>Pojemność</p>
                </th>
                <th scope='col'>
                  <p className={styles.header}>Jednostka</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {pots.map(item => (
                <tr key={item.id}>
                  {/* <Link */}
                  <th scope='row'>
                    <p className={styles.header}>{item.potName}</p>
                  </th>
                  <td>
                    <p className={styles.data}>{item.potValue}</p>
                  </td>
                  <td>
                    <p className={styles.data}>kg</p>
                  </td>
                  {/* </Link> */}
                </tr>

              ))}
            </tbody>
          </table>
          {/* </ul> */}
          {/* </div> */}
        </div>
      </div>


    );
  }
}

PotsPage.propTypes = {
  pots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      potsName: PropTypes.string,
      potsValue: PropTypes.number,
    }),
  ),
  // setScreenType: PropTypes.func,
  // maxProductsOnPage: PropTypes.number,
};

PotsPage.defaultProps = {
  pots: [],
};

export default PotsPage;
