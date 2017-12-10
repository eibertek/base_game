import components from 'ui/utils/libray';

const renderChildrenComponents = (p) => {
    console.log('props del padre', p);
    return p.childComponents ? p.childComponents.map( (c, i) => {
        const Component = components[c.component];
        const { onClick, ...props } = c.props;
        const customClick = (evt) => {
                console.log('onClick compose component -', c.props);
                return onClick();
        }
        return <Component key={i} {...props} onClick={customClick} />;
    }) : null;
}

export const ComposeComponent = (props) => {
  console.log('props del compose', props);
  return  <div>{renderChildrenComponents(props)}</div>;
};

export default ComposeComponent;

