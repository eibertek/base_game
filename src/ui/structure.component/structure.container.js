import StructureComponent from "./index.jsx";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {characters: state.charStructure.characters};
};

export default connect(mapStateToProps, (dispatch)=>{return {}})(StructureComponent);
