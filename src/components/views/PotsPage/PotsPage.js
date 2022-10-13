import React from 'react';
import styles from './PotsPage.module.scss';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';


class PotsPage extends React.Component {
  state = {
    activePage: 0,
    editable: 'no',
    activePageStyle: styles.fadeIn,
  };

  componentDidMount(){
    this.props.fetchPotsFromAPI();
  }

  handlePotChange(id, newPotValue) {
    this.props.changePotInDB({ id, newPotValue });
  }

  render() {
    const {
      pots,
    } = this.props;

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
                    <div className={styles.data}>
                      <input id={item._id} defaultValue={item.potValue} ></input>
                    </div>
                  </td>
                  <td>
                    <p className={styles.data}>kg</p>
                  </td>
                  <td>
                    <Button className={styles.button1} variant='outline' onClick={() => this.handlePotChange(item._id, document.getElementById(item._id).value)}>
                      ZMIEŃ
                    </Button>
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
  pots: PropTypes.array,
  fetchPotsFromAPI: PropTypes.func,
  changePotInDB: PropTypes.func,

  // setScreenType: PropTypes.func,
};

PotsPage.defaultProps = {
  pots: [],
};

export default PotsPage;
