import React from 'react';
import axios from 'axios';
import './App.css';

// router imports
import {Route, HashRouter as Router} from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Route path='/' exact>
        
      </Route>
      <Route path='/feeling'>

      </Route>
      <Route path='/understanding'>

      </Route>
      <Route path='/support'>

      </Route>
      <Route path='/comments' exact>

      </Route>
      <Route path='/review' exact>

      </Route>
      <Route path='/success' exact>

      </Route>
    </div>
    </Router>
  );
}

export default App;
