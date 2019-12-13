import React, { Component } from 'react';
import Assignment1 from './Assignment1/Assignment1';
import Assignment2 from './Assignment2/Assignment2';
import Layout from './BurgerExample/components/Layout/Layout'
import BurgerBuilder from './BurgerExample/containers/BurgerBuilder/BurgerBuilder'

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder></BurgerBuilder>
        </Layout>
      </div>
    );
  } 
}

export default App;