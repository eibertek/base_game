import App from "./App.jsx";
import {connect} from 'react-redux';
import gameConfig from './gameConfig';
import components from './utils/libray';
import { withRouter } from 'react-router-dom'

const loginPageProps = (state, props) => {
    return {
        loginComponent: components['login'],
        screens: [{mockData:state,}],
    };
}

const normalProps = (state, number, props) => {
    const componentsWillUse = gameConfig.screen.map( screen => components[screen.component]);
    return {
        screens: gameConfig.screen,
        componentsWillUse,
        screenNumber: number,
    };
}

const mapStateToProps = (state, props) => {
    const loggedIn = !!state.config.structure.login;
    const screenNumber =  state.screen.storeme || 0;
    if(gameConfig.screen[screenNumber].auth && loggedIn !== true) {
        return loginPageProps(state, props);
    }else{
        return normalProps(state, screenNumber, props);
    }
};

export default withRouter(connect(mapStateToProps,
        (dispatch)=>{return {
            login: () => dispatch({ type:'LOGIN', login:true}),
        }}
    )(App));
