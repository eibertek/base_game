import StructureComponent from "./index.jsx";
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    let component = null;
    if(ownProps.screenData.initial===true) {
        // traer el character creator
        component = <div>HOME COMPONENT {ownProps.screenData.title}</div>
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
