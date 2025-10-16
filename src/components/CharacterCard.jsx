export default function CharacterCard({ character }) {

  return (
    <div className="character-card card col-12 col-sm-5 col-md-3 mx-auto p-3 text-center justify-content-center align-items-center" data-bs-theme='dark'>
      <img width={200} className="rounded-circle" src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <div>Specie: {character.species}</div>
      <div>Gender: {character.gender}</div>
      <div>
        Status: {character.status}
      </div>

    </div>
  )
}