import axios from "axios";
import { use, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavouritesContext from "../contexts/FavouritesContext";


export default function CharactersPage() {

  // makle a state variable where store the characters list

  const [currentPage, setCurrentPage] = useState(1)
  const { toggleFavourites, isFavourite, characters, fetchData } = useContext(FavouritesContext)


  useEffect(() => {
    fetchData(currentPage)
  }, [])


  return (

    <>


      <main>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container py-5">
            <h1 className="display-5 fw-bold">Rick and Morty Characters</h1>
            <p className="col-md-8 fs-4">
              Here is our list of characters
            </p>
          </div>
        </div>

        <section id="characters">
          <div className="container">
            <div className="row g-4">

              {characters.map(character =>

                <div className="col-12 col-sm-6 col-md-4" key={character.id}>
                  <div className="card h-100">
                    <Link to={`/characters/${character.id}`}>
                      <img className="card-img-top" src={character.image} alt="" />
                    </Link>

                    <div className="card-body">
                      <h3>
                        <Link className="text-decoration-none text-dark" to={`/characters/${character.id}`}>
                          {character.name}
                        </Link>
                      </h3>

                      <div className="d-flex justify-content-between align-items-center">
                        <span>
                          Specie:  <strong> {character.species}</strong>
                        </span>

                        <span className="badge bg-dark btn-sm position-relative">
                          Alive
                          <span className="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
                            <span className="visually-hidden">New alerts</span>
                          </span>
                        </span>
                      </div>

                      <span onClick={() => toggleFavourites(character.id)}>
                        {isFavourite(character.id) ? '💖' : '🤍'}
                      </span>
                    </div>
                  </div>
                </div>

              )}

            </div>
          </div>
        </section>

      </main>

      {/* Print the data */}

    </>
  )
}