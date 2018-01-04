import { Component } from 'react';
import propTypes from 'prop-types';

export default class selectionComponent extends Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(evt) {
        this.props.actions.createCharacter();
    }

    render() {
       return <div>
           <select>
               <option>1- Megaman</option>
               <option>2- Nitroman</option>
               <option>3- Zero</option>
               <option>4- OmegaMan</option>
           </select>
           <button onClick={this.onClick}>CHOOSE!</button>
       </div>;
    }
}
