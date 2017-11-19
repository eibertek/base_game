import StructureComponent from "./index.jsx";
import {connect} from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {

    const loginButton = (evt) => {
        ownProps.login();
        ownProps.history.push(ownProps.history.location.pathname);
    }

    const component = <div>
        <div>Login:</div>
        <div>USER:<input /></div>
        <div>PASS:<input /></div>
        <div><button onClick={loginButton}>LOGIN</button></div>
    </div>;
    return {
        component,
    };
};

export default withRouter(connect(mapStateToProps, (dispatch)=>{return {}})(StructureComponent));
