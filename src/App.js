import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LayoutPanel from './common/navigation'
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">

            <Switch>
              <Route  path="/" name="Home"  component={props => <LayoutPanel {...props} />} />

            </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
