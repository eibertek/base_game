import ScreenComponent from "./index.jsx";
import Actions from "./actions/";
import components, {Compose} from 'commons/library';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import './styles.scss';

const renderChildrenComponents = (p) => {
    return p.childComponents ? p.childComponents.map( (c, i) => {
        const Component = components[c.component];
        const { onClick, ...props } = c.props;
        const customClick = (evt) => {
                console.log('onClick screen component -', c.props);
                return onClick();
        }
        return <Component key={i} {...props} onClick={customClick} />;
    }) : null;
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps.screenData.props);
    
    const Component = <Compose>{renderChildrenComponents(ownProps.screenData.props)}</Compose>
    return {
        Component,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(Actions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenComponent);
