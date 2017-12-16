import components from 'ui/commons/library';
import { Component, cloneElement } from 'react';

export default class Compose extends Component {
    constructor() {
        super();
        this.onCustomClick = this.onCustomClick.bind(this);
    }

    onCustomClick(onClick) {
        console.log(onClick);
        if(onClick && onClick.action && onClick.event) {
            return (evt) => {
                this.props.actions[onClick.action](1);
                return onClick.event(evt);
            }
        }
        return onClick;
    }

    render(){
        const { childComponents, actions, ...props } = this.props;
        return <div>
            {childComponents.map( (c, i) => {
                const Component = components[c.component];
                const { onClick, ...cProps } = c.props;
                return <Component key={i} {...cProps} actions={actions} onClick={this.onCustomClick(onClick)} />
            })}
        </div>
    }
}
