import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search/Search';
import Item from './components/Item/Item';

function App() {
  return (
    <div>
      <Header></Header>
      <Search></Search>
      <Item></Item>
    </div>
  );
}

export default App;
