import { Component } from 'react';
import propTypes from 'prop-types';

export default class selectionComponent extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.create = this.create.bind(this);
        this.choose = this.choose.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = this.props.savedCharacters[0];
    }

    create(evt) {
        this.props.actions.createCharacter();
    }

    choose(evt) {
        this.props.actions.saveCharacter(this.state);
    }

    onChange(v) {
        const char = this.props.savedCharacters[v.target.value];
        this.setState({
            name: char.name,
            power: char.power,
        });

        return v;
    }

    render() {
       return <div>
           <select onChange={this.onChange} name="character">
               {this.props.savedCharacters && this.props.savedCharacters.map((char, index)=>
                   <option value={index}>{char.name}</option>)}
           </select>
           <button onClick={this.choose}>CHOOSE!</button>
           <button onClick={this.create}>Create a new One!</button>
       </div>;
    }
}
