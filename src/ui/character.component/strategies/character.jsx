import { Component } from 'react';
import propTypes from 'prop-types';

export default class characterComponent extends Component {
    constructor(props){
        super(props);
        this.renderCharacterData = this.renderCharacterData.bind(this);
    }

    renderCharacterData(){
        console.log(this.props.characterData);
        return <div>
            {this.props.characterData.name} - {this.props.characterData.power}
        </div>;
    }

    render() {
        return <div>
            Personaje:
            {this.renderCharacterData()}
        </div>;
    }
}
