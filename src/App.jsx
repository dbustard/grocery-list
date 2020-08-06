import React from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import GroceryList from './components/pages/grocery-list';
import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/pages/about-us';
import Reminder from './components/pages/reminder';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App container">
        <BrowserRouter>
          <Header title="Grocery List App" />
          <main>
            <Switch>

              <Route exact path="/" component={GroceryList}/>
              <Route exact path="/reminder" component={Reminder} />
              <Route exact path="/about-us" component={AboutUs} />
              
            </Switch>
          </main>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
