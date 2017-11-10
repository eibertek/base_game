import React from 'react';
import Screen from "./screen.component/index";

export default class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
           screenData: props.screenNumber && props.screens[props.screenNumber] ? props.screens[props.screenNumber] : props.screens[0],
        }
    }

    render() {
        return <div><Screen location={this.props.location} screenData={this.state.screenData} /></div>
    }
}