import {connect} from 'react-redux';
import StructureComponent from "./index.jsx";
import components from 'ui/utils/libray';


const renderChildrenComponents = (p) => {
    return p.childComponents ? p.childComponents.map( (c, i) => {
        const Component = components[c.component];
        return <Component key={i} {...c.props} />;
    }) : null;
}


const mapStateToProps = (state, ownProps) => {
    const { onClick, className, text } = ownProps;
    const component = <div>
        <div onClick={onClick} className={className} >{text}</div>
        {renderChildrenComponents(ownProps)}
        </div>
    return {
        component,
    };
};

export default connect(mapStateToProps, (dispatch)=>{return {}})(StructureComponent);
