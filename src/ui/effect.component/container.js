import StructureComponent from "./index.jsx";
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    console.log(state, ownProps);
    return {characters: state.charStructure.characters};
};

export default connect(mapStateToProps, (dispatch)=>{return {}})(StructureComponent);
