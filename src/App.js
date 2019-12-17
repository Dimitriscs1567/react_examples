import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './BurgerExample/hoc/Layout/Layout';
import BurgerBuilder from './BurgerExample/containers/BurgerBuilder/BurgerBuilder';
import Checkout from './BurgerExample/containers/Checkout/Checkout';
import Orders from './BurgerExample/containers/Orders/Orders';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
