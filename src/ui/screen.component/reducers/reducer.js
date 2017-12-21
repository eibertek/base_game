export default (state={},action)=>{
    switch (action.type) {
        case 'SET_LEVEL':
            console.log(state);
            return { storeme: state.storeme + action.data};
        default:
            return state;
    }
}