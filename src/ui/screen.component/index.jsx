const Render = ({ Component, ...props}) => {
  console.log('there are props in Screen Render?',props);
  return React.cloneElement(Component, props);
}

export default Render;

