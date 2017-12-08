import StructureComponent from "./index.jsx";
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    const { onClick, className, text } = ownProps;
     const component = <div onClick={onClick} className={className} >{text}</div>
    return {
        component,
    };
};

export default connect(mapStateToProps, (dispatch)=>{return {}})(StructureComponent);
