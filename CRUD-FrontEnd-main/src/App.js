import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Registration from './component/Registration';
import Display from './component/Display';
import Update from './component/Update';

const App = ()=> {
   return(
     <Switch>
     <Route path="/" component={Registration} exact/>
     <Route path="/Display" component={Display} exact />
     <Route path="/Display/:id" component={Update} exact />
     </Switch>
     

   )
}

export default App;
