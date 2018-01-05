import CharacterComponent from "./index.jsx";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import Actions from "./actions/";

const mapStateToProps = (state, ownProps) => {
    const strategy = state.config.character.strategy || ownProps.strategy || '';
    return {
        characterStructure: state.config.structure.character,
        characterData: state.config.character.newChar,
        savedCharacters: state.config.savedCharacters,
        strategy,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Actions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterComponent);
