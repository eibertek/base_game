import ScreenComponent from "./index.jsx";
import Actions from "./actions/";
import components, {Compose} from 'commons/library';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import './styles.scss';

const renderChildrenComponents = (p) => {
    return p.childComponents ? p.childComponents.map( (c, i) => {
        const Component = components[c.component];
        const { ...props } = c.props;
        return <Component key={i} {...props} />;
    }) : null;
}

const mapStateToProps = (state, ownProps) => {
    console.log('PROPS ON SCREEN', ownProps.screenData.props);
    const childComponents = renderChildrenComponents(ownProps.screenData.props);
    return {
        childComponents,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(Actions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenComponent);
