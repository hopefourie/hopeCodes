import '../public/style.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Interests from './components/Interests';

class App extends Component {
  render() {
    return (
      <div className="app-component">
        <Header />
        <Intro />
        <Projects />
        <Publications />
        <Experience />
        <Interests />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('app')
);

export default App;
