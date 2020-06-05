import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './Containers/Home/Home';
import Header from './Components/Header/Header';
import Register from './Containers/Register/Register';
import Login from './Containers/Login/Login';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

        <Header /> 

        <Switch>

          <section className="Switch">

            <Route path="/" component={ Home } exact/>
            <Route path="/register" component={ Register } exact/>
            <Route path="/login" component={ Login } exact />
          
          </section>

        </Switch> 

      </BrowserRouter>

  

    </div>
  );
}

export default App;
