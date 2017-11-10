import App from "./App.jsx";
import {connect} from 'react-redux';
import gameConfig from './gameConfig';
console.log(gameConfig);
const mapStateToProps = (state) => {
    return {
        characters: state.charStructure.characters,
        screens: gameConfig.screen,
    };
};

export default connect(mapStateToProps, (dispatch)=>{return {}})(App);
