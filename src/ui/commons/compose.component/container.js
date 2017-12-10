import {connect} from 'react-redux';
import ComposeComponent from "./index.jsx";
import components from 'ui/utils/libray';

const renderChildrenComponents = (p) => {
    console.log('props del padre', p);
    return p.childComponents ? p.childComponents.map( (c, i) => {
        const Component = components[c.component];
        const { onClick, ...props } = c.props;
        const customClick = (evt) => {
                console.log('onClick text component -', c.props);
                return onClick();
        }
        return <Component key={i} {...props} onClick={customClick} />;
    }) : null;
}


const mapStateToProps = (state, ownProps) => {
    const { onClick, className, text } = ownProps;
    console.log('props del padre', ownProps);
    const component = <div>
        {renderChildrenComponents(ownProps)}
        </div>
    return {
        component,
    };
};

export default connect(mapStateToProps, (dispatch)=>{return {}})(ComposeComponent);
