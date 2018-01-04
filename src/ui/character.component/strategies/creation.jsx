import { Component } from 'react';
import propTypes from 'prop-types';

export default class creationComponent extends Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
        this.getFields = this.getFields.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onClick(evt) {
        this.props.actions.createCharacter();
    }

    onChange(v) {
        this.setState({[v.target.name]: v.target.value});
        return v;
    }

    getFields(){
        return this.props.fields.map((field, index)=>{
            return <div>
                <input key={index}
                       onChange={this.onChange}
                       placeholder={field.name}
                       name={field.name} />
            </div>
        })
    }

    render() {
        return <div>
            Creacion del Personaje:
            {this.getFields()}
            <button onClick={(evt) => this.props.actions.saveCharacter(this.state)}>Crear!!</button>
        </div>;
    }
}
