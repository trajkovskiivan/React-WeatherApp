import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Router>
        <Nav />
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/home'} component={Home} />
          <Route path={'/about'} component={About} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
