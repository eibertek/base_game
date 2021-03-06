import { Component, cloneElement } from 'react';
export default class Render extends Component {
    constructor() {
        super();
        this.onCustomClick = this.onCustomClick.bind(this);
    }

    onCustomClick({ onClick }) {
        if(onClick && onClick.action && onClick.event) {
            return (evt) => {
                this.props.actions[onClick.action](onClick.params);
                return onClick.event(evt);
            }
        }
        return onClick;
    }

    render(){
        const { childComponents, actions, ...props } = this.props;
        return <div>
            {childComponents.map( c => {
                return cloneElement(c, { actions, onClick: this.onCustomClick(c.props), parentProps: props })
            })}
        </div>
    }
}

