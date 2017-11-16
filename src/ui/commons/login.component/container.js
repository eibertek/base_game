import StructureComponent from "./index.jsx";
import {connect} from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

const loginButton = (evt) => {
   return <Redirect to={'/true'}/>
}
const mapStateToProps = (state, ownProps) => {

    const loginButton = (evt) => {
        console.log(evt);
        return <Redirect to={'/true'}/>
    }

/*    const component = <div>
        <div>Login:</div>
        <div>USER:<input /></div>
        <div>PASS:<input /></div>
        <div><button onClick={loginButton}>LOGIN</button></div>
    </div>;*/
    const component = <Redirect to={'/true'}/>;
    return {
        component,
    };
};

export default withRouter(connect(mapStateToProps, (dispatch)=>{return {}})(StructureComponent));
