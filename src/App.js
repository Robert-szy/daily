import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';

// import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/HomepageContainer';
import OrdersPage from './components/views/OrdersPage/OrdersPageContainer';
import PortionsPage from './components/views/PortionsPage/PortionsPageContainer';
import ConfigPage from './components/views/ConfigPage/ConfigPageContainer';

import MultipliersPage from './components/views/MultipliersPage/MultipliersPageContainer';
import PotsPage from './components/views/PotsPage/PotsPageContainer';
import WeightsPage from './components/views/WeightsPage/WeightsPageContainer';

const App = () => (
  // <Provider store={store}>
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path={'/'} component={Homepage} />
        <Route exact path={'/orders'} component={OrdersPage} />
        {/* <Route exact path={'/orders/:id'} component={OrdersPage} /> */}

        <Route exact path={'/portions'} component={PortionsPage} />
        {/* <Route exact path={'/portions/:id'} component={PortionsPage} /> */}

        <Route exact path={'/config'} component={ConfigPage} />

        <Route exact path={'/multipliers'} component={MultipliersPage} />
        <Route exact path={'/pots'} component={PotsPage} />
        <Route exact path={'/weights'} component={WeightsPage} />

      </Switch>
    </MainLayout>
  </BrowserRouter>
  // </Provider>
);


export default App;
