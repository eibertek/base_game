import App from "./App.jsx";
import {connect} from 'react-redux';
import gameConfig from './gameConfig';
import components from './utils/libray';
import { withRouter } from 'react-router-dom'

const loginPageProps = () => {
    console.log('capaz entra aca');
    return {
        loginComponent: components['login'],
        screens: [{dad:true,}],
    };
}

const normalProps = (state, props) => {
    const componentsWillUse = gameConfig.screen.map( screen => components[screen.component]);
    return {
        characters: state.charStructure.characters,
        screens: gameConfig.screen,
        componentsWillUse,
        screenNumber: props.screenNumber ? props.screenNumber : 0,
    };
}

const mapStateToProps = (state, props) => {
    const loggedIn = !!props.match.params.loggedIn;
    if(loggedIn === true) {
        return normalProps(state, props);
    }else{
        return loginPageProps(state, props);
    }
};

export default withRouter(connect(mapStateToProps,
        (dispatch)=>{return {}}
    )(App));
