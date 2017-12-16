import { PureComponent } from 'react';


export default class textComponent extends PureComponent {

    render() {
        const { className, onClick, text, storeMe } = this.props;
        return <div onClick={onClick} className={className} >{text} - {storeMe}</div>
    }
}

