import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './Containers/Home/Home';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

        <Header /> 

        <Switch>
          
        <Route path="/" component={ Home } exact/>
          
          
        </Switch> 

      </BrowserRouter>

  

    </div>
  );
}

export default App;
