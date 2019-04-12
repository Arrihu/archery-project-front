import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import './App.scss';

// loading
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
// Containers
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout'),
  loading
});

// pages
const HomePage = React.lazy(() => import('./app/HomePage/HomePage'))


class App extends Component {

  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route exact path="/home" name="Home Page" render={props => <HomePage {...props}/>} />
            <Route path="/" name="Home" component={DefaultLayout} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
