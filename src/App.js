import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index';
import NavBar from './components/NavBar'
import Categories from './components/Categories'
import Favourites from './components/favourites'
import Search from './components/Search'
import { COLORS } from './resources/theme'
import './App.css'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: COLORS.ghibliTheme
    },
    secondary: {
      main: COLORS.white
    },
    text: {
      primary: COLORS.black,
      secondary: COLORS.white,
      tertiary: COLORS.grey1
    }
  },
  typography: {
    body2: {
      fontWeight: 400,
      fontSize: 16,
      color: COLORS.black
    },
    body1: {
      fontWeight: 300,
      fontSize: 14,
      color: COLORS.grey1
    },
    title: {
      fontWeight: 500,
      fontSize: 18
    }
  }
});


export const Store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Router>
          <MuiThemeProvider theme={theme}>
            <NavBar />
            <Switch>
              <Route path="/favourites" render={() => <Favourites />} />
              <Route path="/search" component={Search} />
              <Route path="/" render={() => (
                <div>
                  <Categories />
                </div>
              )
              } />
            </Switch>
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;