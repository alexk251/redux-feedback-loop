import React from 'react';
import axios from 'axios';
import './App.css';

//import components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support'

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
        <Feeling />
      </Route>
      <Route path='/understanding'>
        <Understanding />
      </Route>
      <Route path='/support'>
        <Support />
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
