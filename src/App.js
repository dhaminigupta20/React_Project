import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import Organization from './components/Organization';
import Projects from './components/Projects';
import Example from './components/Example';
import Pages from './components/Pages';
import Settings from './components/Settings';
import People from './components/People';

function App() {
  return (
    <BrowserRouter>
      <People/>
  
      <Routes>
        <Route path="/overview" component={Overview} />
        <Route path="/organization" component={Organization} />
        <Route path="/projects" component={<Projects/>} />
        <Route path="/people" component={<People/>} />
        <Route path="/example" component={Example} />
        <Route path="/pages" component={Pages} />
        <Route path="/settings" component={Settings} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;