import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './Containers/Home/Home';
import HeaderMain from './Components/Header/Header';
import Register from './Containers/Register/Register';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

        <section className="Header">

          <HeaderMain /> 

        </section>


        <Switch>

          <section className="Switch">

            <Route path="/" component={ Home } exact/>
            <Route path="/register" component={ Register } exact/>
           
          </section>

        </Switch> 

      </BrowserRouter>

  

    </div>
  );
}

export default App;
