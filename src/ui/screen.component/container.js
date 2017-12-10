import ScreenComponent from "./index.jsx";
import Actions from "./actions/";
import components, {compose} from 'commons/library';
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
    const Component = <compose>{renderChildrenComponents(ownProps.screenData.props)}</compose>
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
