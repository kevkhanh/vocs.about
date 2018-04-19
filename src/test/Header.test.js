import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../model/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MuiThemeProvider>
            <Header />
        </MuiThemeProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
