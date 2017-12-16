import { Component, cloneElement } from 'react';
export default class Render extends Component {
    constructor() {
        super();
        this.onCustomClick = this.onCustomClick.bind(this);
    }

    onCustomClick({ onClick }) {
        if(onClick && onClick.action && onClick.event) {
            return (evt) => {
                this.props.actions[onClick.action](1);
                return onClick.event(evt);
            }
        }
        return onClick;
    }

  componentDidUpdate() {
        console.log('WTF???');
  }
  render(){
    const { childComponents, actions, storeMe, ...props } = this.props;
    console.log('LEVEL???', storeMe);
    return <div>
        {childComponents.map( c => {
          return cloneElement(c, { actions, onClick: this.onCustomClick(c.props) })
        })}
    </div>
  }
}

