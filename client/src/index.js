import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import postReducer from './redux/reducers/posts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import FullPost from './components/FullPost/FullPost';

const rootreducer = combineReducers({ posts: postReducer });

const store = createStore(rootreducer, {}, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/' exact component={App} />
                <Route path='/blogdetails/:id' component={FullPost} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
