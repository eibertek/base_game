export default (state={},action)=>{
    switch (action.type) {
        case 'SET_LEVEL':
            return Object.assign(state, {}, { storeme: action.data++})
        default:
            return state;
    }
}