import React from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import GroceryList from './components/pages/grocery-list';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header title="Grocery List App" />
        <main>
          <GroceryList />
        </main>
        <Footer />
    </div>
  );
}

export default App;
