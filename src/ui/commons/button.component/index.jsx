export const StructureComponent = (props) => props.component;

class Button extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { className, text, onClick } = this.props;
        return <button onClick={onClick} className={className} >{text}</button>
    }
}
export default Button;

