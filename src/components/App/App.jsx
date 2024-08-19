import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from './Feeling';
import Understand from './Understand';
import Supported from './Supported';
import Comments from '../../comments';
import Review from './Review';
import Thankyou from './Thankyou';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>

      <Route exact path='/' >
      <Feeling/>
      </Route>

      <Route path='/understand'>
      <Understand/>
      </Route>

      <Route path='/supported'>
      <Supported/>
      </Route>

      <Route path='/comments'>
      <Comments/>
      </Route>

      <Route path='/review'>
      <Review/>
      </Route>

      <Route path='/thankyou'>
      <Thankyou/>
      </Route>
      
      </Router>

    </div>
  );
}

export default App;