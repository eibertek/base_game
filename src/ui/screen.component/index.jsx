import { Component, cloneElement } from 'react';
export default class Render extends Component {

  render(){
    const { childComponents, actions, ...props } = this.props;
      const onCustomClick = (actions, clickObject) => {
          return (evt) => {
              actions[clickObject.action](1);
              return clickObject.event(evt);
          }
      }
    return <div>
        {childComponents.map( c => {
          console.log(c.props);
          return cloneElement(c, { actions, onClick: onCustomClick(actions, c.onClick) })
        })}
    </div>
  }
}

