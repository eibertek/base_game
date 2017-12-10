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

const normalProps = (state, props) => {
    const componentsWillUse = gameConfig.screen.map( screen => components[screen.component]);
    return {
    //    characters: state.charStructure.characters,
        screens: gameConfig.screen,
        componentsWillUse,
        screenNumber: props.screenNumber ? props.screenNumber : 0,
    };
}

const mapStateToProps = (state, props) => {
    const loggedIn = !!state.login;
    const screenNumber = props.screenNumber || 0;
    if(gameConfig.screen[screenNumber].auth && loggedIn !== true) {
        return loginPageProps(state, props);
    }else{
        return normalProps(state, props);
    }
};

export default withRouter(connect(mapStateToProps,
        (dispatch)=>{return {
            login: () => dispatch({ type:'LOGIN', login:true}),
        }}
    )(App));
