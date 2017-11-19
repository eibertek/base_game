export default (state={},action)=>{
    switch (action.type) {
        case 'LOGIN': 
            return Object.assign(state, {}, {
                login: action.login
            });
        default:
            return state;
    }
}