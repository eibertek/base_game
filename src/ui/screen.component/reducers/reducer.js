export default (state={},action)=>{
    switch (action.type) {
        case 'SET_LEVEL':
            return { storeme: state.storeme + action.data};
        case 'SAVE_CHARACTER':
            return { storeme: state.storeme + 1};
        default:
            return state;
    }
}