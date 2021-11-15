import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import {Route, Switch} from 'react-router-dom';

const HatsPage = () => {
   return <h1>HATS PAGE</h1>
}

function App() {
  return (
    <div>
         <Switch>
           <Route exact path='/' component={HomePage}/>
           <Route path='/hats' component={HatsPage}/>
          </Switch> 
      </div>  
    
  );
}

export default App;
