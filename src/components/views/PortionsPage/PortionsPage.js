import React from 'react';
import styles from './PortionsPage.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swipeable from '../../common/Swipeable/Swipeable';
import PortionBox from '../../common/PortionBox/PortionBox';


import { SIZE_TYPES } from '../../../screenSettings';


class PortionsPage extends React.Component {
  state = {
    activePage: 0,
    editable: 'no',
    activePageStyle: styles.fadeIn,
  };

  handlePageChange(newPage) {
    this.setState({ activePageStyle: styles.fadeOut });
    setTimeout(() => {
      this.setState({ activePage: newPage, activePageStyle: styles.fadeIn });
    }, 1000);
  }

  selectActualScreenType = () => {
    const width = window.innerWidth;
    if (width < 768) {
      return SIZE_TYPES.MOBILE;
    } else if (width < 992) {
      return SIZE_TYPES.TABLET;
    } else {
      return SIZE_TYPES.DESKTOP;
    }
  };

  handleSizeChange = storedType => {
    const actualType = this.selectActualScreenType();
    if (actualType !== storedType) {
      this.props.setScreenType(actualType);
    }
  };

  componentDidMount() {
    this.handleSizeChange(this.props.screenType);
    window.addEventListener('resize', () =>
      this.handleSizeChange(this.props.screenType)
    );
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () =>
      this.handleSizeChange(this.props.screenType)
    );
  }

  render() {
    const {
      portions,
      // categories,
      screenType,
      maxPortionsOnPage,
      maxTotalDisplayedPortions,
    } = this.props;

    const { activePage, activePageStyle } = this.state;

    const portionsPerPage = {
      [SIZE_TYPES.MOBILE]: 2,
      [SIZE_TYPES.TABLET]: 3,
      [SIZE_TYPES.DESKTOP]: 6,
    };

    const actualPortionsOnPage = Math.min(
      portionsPerPage[screenType],
      maxPortionsOnPage,
    );
    console.log('screenType', screenType);
    console.log('portionsPerPage[screenType]', portionsPerPage[screenType]);
    console.log('maxPortionsOnPage', maxPortionsOnPage);


    const maxPortionsForDisplay = Math.min (portions.length, maxTotalDisplayedPortions);
    const pagesCount = Math.ceil(maxPortionsForDisplay / actualPortionsOnPage);
    console.log('portions.length', portions.length);
    console.log('actualPortionsOnPage', actualPortionsOnPage);
    console.log('maxTotalDisplayedPortions', maxTotalDisplayedPortions);

    console.log('maxPortionsForDisplay', maxPortionsForDisplay);



    const rightAction = () => {
      const newPage = activePage - 1;
      if (newPage >= 0) {
        this.setState({ activePage: newPage });
      }
    };

    const leftAction = () => {
      const newPage = activePage + 1;
      if (newPage < pagesCount) {
        this.setState({ activePage: newPage });
      }
    };

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      console.log('dots number', dots.length);
      dots.push(
        <li key={i}>
          <Link
            to='/#'
            onClick={() => {
              this.handlePageChange(i);
            }}
            className={i === activePage ? styles.active : ''}
          >
            page {i}
          </Link>
        </li>
      );
    }
    console.log('pagesCount', pagesCount);
    console.log('dots number', dots);

    return (
      <Swipeable leftAction={leftAction} rightAction={rightAction}>

        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                {/* <div className={'col-auto col-md ' + styles.menu}>
                  Aqq2
                  <ul>
                    {categories.map(item => (
                      <li key={item.id}>
                        <Link
                          to='/#'
                          className={
                            item.id === activeCategory ? styles.active : undefined
                          }
                          onClick={() => {
                            this.handleCategoryChange(item.id);
                          }}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div> */}
                <div className={'col-12 col-sm-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            <div className={'row ' + activePageStyle}>
              <div className={styles.portionsPage}>
                {portions
                  .slice(
                    activePage * actualPortionsOnPage,
                    (activePage + 1) * actualPortionsOnPage
                  )
                  .map(item => (
                    <div key={item.id} className={styles.portionsTable}>
                      <PortionBox
                        {...item}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Swipeable>

    );
  }
}

PortionsPage.propTypes = {
  screenType: PropTypes.string,
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  portions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      data: PropTypes.string,
      porcja1: PropTypes.array,
      porcja2: PropTypes.array,
      porcja3: PropTypes.array,
      porcja4: PropTypes.array,
      porcja5: PropTypes.array,
      porcja6: PropTypes.array,
      porcja7: PropTypes.array,
      porcja8: PropTypes.array,
    }),
  ),
  setScreenType: PropTypes.func,
  maxPortionsOnPage: PropTypes.number,
  maxTotalDisplayedPortions: PropTypes.number,

};

PortionsPage.defaultProps = {
  portions: [],
  // categories: [],
  maxPortionsOnPage: 8,
  maxTotalDisplayedPortions: 32,
};

export default PortionsPage;
