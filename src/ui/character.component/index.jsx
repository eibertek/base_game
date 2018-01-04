
import { Component } from 'react';
import propTypes from 'prop-types';
import strategies from './strategies';

/*
* Segun la prop strategy, cuando carga el componente deberia:
* selection: traer un form donde aparezcan la lista de personajes o un boton crear
* creation: traer otro form con los fields para poder crear el personaje
* character: debera devolver un componente que el personaje.
* npc: idem anterior pero con un personaje de la maquina
* */
export default class CharacterComponent extends Component {

    getComponentData(strategy, props) {
        const Component = strategies[strategy];
        const newProps = {
            actions: props.actions,
        };
        if(strategy === 'creation') newProps['fields'] = props.characterStructure.fields;
        if(strategy === 'character') newProps['characterData'] = props.characterData;
        return <Component {...newProps} />
    }

    render() {
        const actualStrategy =  this.props.strategy;
        return <div>{this.props.text} {actualStrategy}
            {this.getComponentData(actualStrategy, this.props)}
            </div>;
    }
};

CharacterComponent.propTypes = {
    strategy: propTypes.oneOf(['selection', 'creation', 'character', 'npc']).isRequired,
};

