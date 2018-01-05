import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import App from "./App.container.js";
import AboutComponent from './about.jsx';
import config from './mock.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import structureReducer from './structure.component/reducers/structure.reducer';
import characterReducer from './character.component/reducers/reducer';
import screenReducer from './screen.component/reducers/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({config: combineReducers({ structure:structureReducer,
        character: characterReducer, savedCharacters: (state={}, action) => state, }),
    screen:screenReducer}), config, composeEnhancers(applyMiddleware(thunk)));

export const AppProvider = ({ store }) => {
    return <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/:loggedIn?" component={App} />
                <Route exact path="/screen/:number" render={(props) => (
                    <App {...props} screenNumber={props.match.params.number} />)}/>
                />
                <Route path="/about" component={AboutComponent} />
            </Switch>
        </Router>
    </Provider>;
}

render(<AppProvider store={store} />, document.getElementById('react-app'));