import {connect} from 'react-redux';
import textComponent from "./index.jsx";
import components from 'ui/utils/libray';

const renderChildrenComponents = (p) => {
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
    const component = <div>
        <div onClick={onClick} className={className} >{text}</div>
        {renderChildrenComponents(ownProps)}
        </div>
    return {
        component,
    };
};

export default connect(mapStateToProps, (dispatch)=>{return {}})(textComponent);