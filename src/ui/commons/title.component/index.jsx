import { PureComponent } from 'react';


export default class titleComponent extends PureComponent {

    render() {
        const { className, onClick, text} = this.props;
        return <div onClick={onClick} className={className} >{text}</div>
    }
}

