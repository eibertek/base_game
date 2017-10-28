import StructureComponent from "./structure.component/index";

export default class App extends React.PureComponent {
    render() {
        return <div><StructureComponent location={this.props.location} /></div>
    }
}