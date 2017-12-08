import Button from "./index.jsx";
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {};
};

const dispatchToProps = (dispatch, props) => {
    return {
        goNext: dispatch(props.goNext),
    }
}

export default connect(mapStateToProps, (dispatch)=>{return {}})(Button);
