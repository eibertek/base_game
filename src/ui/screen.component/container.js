import StructureComponent from "./index.jsx";
import components from 'commons/library';
import {connect} from 'react-redux';
import './styles.scss';

const renderChildrenComponents = (p) => {
    return p.childComponents ? p.childComponents.map( (c, i) => {
        const Component = components[c.component];
        return <Component key={i} {...c.props} />;
    }) : null;
}

const mapStateToProps = (state, ownProps) => {
    let component = null;
    console.log(ownProps);
    if(ownProps.screenData.initial===true) {
        // traer el character creator
        component = <div>{renderChildrenComponents(ownProps.screenData.props)}</div>
    }else{
        // traer el scenary con los datos de scenary y dentro de este los datos de object y characters
        component = <div><div>{ownProps.screenData.title}</div> <div>Personajes <button>CREAR</button></div>
            <div>{state.charStructure.characters ? state.charStructure.characters.map((character) =>
                <div key={character.name}>{character.name} - {character.power}</div>) : null }</div>
        </div>
    }
    return {
        component,
    };
};

export default connect(mapStateToProps, (dispatch)=>{return {}})(StructureComponent);
