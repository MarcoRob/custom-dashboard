import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter, browserHistory} from 'react-router-dom';


import Home from './components/Home';

class App extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={ Home } />
            </Switch>
        )
    }
}

ReactDOM.render(
    <BrowserRouter history={ browserHistory }>
       <App />
    </BrowserRouter>
  , document.getElementById('app'));

module.hot.accept();