import { PureComponent } from 'react';


export default class titleComponent extends PureComponent {

    render() {
        const { className, onClick, text, actions, action } = this.props;
        const onCustomClick = (evt) => {
            actions[action](1);
            onClick(evt);
        }
        return <div onClick={onClick} className={className} >{text}</div>
    }
}

