import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import NotFound from './components/NotFound';
import './App.module.css';

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<h1>rendering component...</h1>}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
