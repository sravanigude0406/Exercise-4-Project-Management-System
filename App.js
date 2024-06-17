// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ProjectList from './components/ProjectList';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ProjectList} />
          {/* Add other routes here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
