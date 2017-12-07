import {connect} from 'react-redux';
import StructureComponent from "./index.jsx";
import components from '../../utils/libray';


const renderChildrenComponents = (p) => {
    return p.childComponents ? p.childComponents.map( (c, i) => {
        const Component = components[c.component];
        return <Component key={i} {...c.props} />;
    }) : null;
}


const mapStateToProps = (state, ownProps) => {
    const component = <div>
        <div onClick={ownProps.onClick}>{ownProps.text}</div>
        {renderChildrenComponents(ownProps)}
        </div>
    return {
        component,
    };
};

export default connect(mapStateToProps, (dispatch)=>{return {}})(StructureComponent);
