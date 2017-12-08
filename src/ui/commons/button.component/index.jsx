export const StructureComponent = (props) => props.component;

class Button extends React.Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
        console.log(props);
    }

    onClick(evt) {
        this.props.goNext();
        this.props.onClick(evt);
    }
    render() {
        const { className, text } = this.props;
        return <button onClick={this.onClick} className={className} >{text}</button>
    }
}
export default Button;

