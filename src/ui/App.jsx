import React from 'react';

export default class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
           screenData: props.screenNumber && props.screens[props.screenNumber] ? props.screens[props.screenNumber] : props.screens[0],
        }
    }

    render() {
        const Component = this.props.loginComponent ? this.props.loginComponent : this.props.componentsWillUse[this.props.screenNumber];
        return <div><Component location={this.props.location} screenData={this.state.screenData} /></div>
    }
}


