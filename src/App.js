import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search/Search';
import Item from './components/Item/Item';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Food from './components/Food/Food';
import SingleItem from './components/SingleItem/SingleItem';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/home">  
            <Search></Search>
            <Item></Item>
          </Route>
          <Route path="/food/:productName">
              <SingleItem></SingleItem>
          </Route>
          <Route exact path="/">
            <Search></Search>
            <Item></Item>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
