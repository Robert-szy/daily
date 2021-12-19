import React from 'react';
import PropTypes from 'prop-types';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-left justify-content-md-left'>
        <div className={'col-9 col-md-auto ' + styles.searchContainer}>

        </div>
        <div className={'col-3 col-md-auto ' + styles.menu}>
          <nav className='navbar navbar-expand-md'>
            <button className='navbar-toggler' type='button' data-toggle='collapse'>
              {/* <FontAwesomeIcon className={styles.icon} icon={faBars} /> */}
            </button>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav'>
                <Link to={`/`}>
                  <li className={'nav-item' + styles.active}>Strona główna</li>
                </Link>
                <Link to={`/orders`}>
                  <li className={'nav-item'}>Zlecenia</li>
                </Link>
                <Link to={`/portions`}>
                  <li className={'nav-item'}>Porcje</li>
                </Link>
                <Link to={`/multipliers`}>
                  <li className={'nav-item'}>Mnożniki</li>
                </Link>
                <Link to={`/weights`}>
                  <li className={'nav-item'}>Współczynniki</li>
                </Link>
                <Link to={`/pots`}>
                  <li className={'nav-item'}>Garnki</li>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
