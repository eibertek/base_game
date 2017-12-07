import StructureComponent from "./index.jsx";
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
     const component = <div onClick={ownProps.onClick}>{ownProps.text}</div>
    return {
        component,
    };
};

export default connect(mapStateToProps, (dispatch)=>{return {}})(StructureComponent);
