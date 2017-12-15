import { Component, cloneElement } from 'react';
export default class Render extends Component {
    constructor() {
        super();
        this.onCustomClick = this.onCustomClick.bind(this);
    }

    onCustomClick(clickObject) {
        return (evt) => {
            this.props.actions[clickObject.action](1);
            return clickObject.event(evt);
        }
    }

  render(){
    const { childComponents, actions, ...props } = this.props;
    return <div>
        {childComponents.map( c => {
          console.log(c.props);
          return cloneElement(c, { actions, onClick: this.onCustomClick(c) })
        })}
    </div>
  }
}

