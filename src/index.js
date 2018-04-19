import React from 'react';
import ReactDOM from 'react-dom';
import Header from './model/Header';
import Footer from './model/Footer';
import Main from './model/Main';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const About = () => (
  <MuiThemeProvider>
    <Header />
    <Main />
    <Footer />
  </MuiThemeProvider>
);

ReactDOM.render(<About />, document.getElementById('about'));
registerServiceWorker();
