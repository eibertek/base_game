import Button from "./index.jsx";
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  //  console.log('data from parent', ownProps);
    return {};
};


export default connect(mapStateToProps, (dispatch)=>{return {}})(Button);
