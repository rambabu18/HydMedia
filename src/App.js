import React from 'react';
//import './App.css';
import '../src/Components/Header/header.css';
import Header from './Components/Header/Header';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import HomePage from './Components/Pages/HomePage';


function App() {
  return (
    
   <Router>
      <Header/>
     <Switch>
      <Route path='/' exact component={HomePage} />
     </Switch>
   </Router>
    
  );
}

export default App;
