export default (state={},action)=>{
    switch (action.type) {
        case 'CREATE_CHARACTER':
            return { strategy: 'creation'};
        case 'SAVE_CHARACTER':
            return { newChar: action.newCharData };
        default:
            return state;
    }
}