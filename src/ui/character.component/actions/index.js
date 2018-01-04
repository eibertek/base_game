
export const createCharacter = () => ({ type:'CREATE_CHARACTER'});
export const saveCharacter = (newCharData) => ({ type:'SAVE_CHARACTER', newCharData});

export default {
    createCharacter,
    saveCharacter,
}