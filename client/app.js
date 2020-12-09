import '../public/style.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
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
        <Header hash="header" />
        <Intro hash="intro" />
        <Projects hash="projects" />
        <Publications hash="publications" />
        <Experience hash="experience" />
        <Interests hash="interests" />
        <Footer hash="footer" />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('app')
);

export default App;
