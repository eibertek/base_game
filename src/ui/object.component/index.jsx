export const StructureComponent = (props) =>
    <div>Personajes <button>CREAR</button>
        <div>{props.characters ? props.characters.map((character) => <div key={character.name}>{character.name} - {character.power}</div>) : null }</div>
    </div>;

export default StructureComponent;

