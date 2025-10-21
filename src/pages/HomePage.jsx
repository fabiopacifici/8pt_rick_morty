import axios from "axios";
import { useContext, useEffect, useState } from "react";
import FavouritesContext from "../contexts/FavouritesContext";


export default function HomePage() {

  // makle a state variable where store the characters list
  const { characters, fetchData, isFavourite, favourites, setFavourites } = useContext(FavouritesContext)
  const [currentPage, setCurrentPage] = useState(1)


/*   useEffect(() => {
    fetchData(currentPage)
   
    console.log(localStorage.getItem('favourites'));
    // convert from the string to an array from local storage 
    const favouritesArray = JSON.parse(localStorage.getItem('favourites'))
    console.log(favouritesArray);
    

  }, []) */


  return (

    <>


      <main>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container py-5">
            <h1 className="display-5 fw-bold">Welcome to the Rick and Morty Universe</h1>
            <p className="col-md-8 fs-4">
              Dive into the multiverse: discover characters, episodes, and strange new dimensions.
              Click "Fetch Data" to load the latest characters from the Rick and Morty API and start your interdimensional adventure.
            </p>

          </div>
        </div>

        <section id="characters">
          <div className="container">
            <div className="row g-4">
              {characters?.map(character =>

                isFavourite(character.id) &&
                (
                  <div className="col-12 col-sm-6 col-md-4" key={character.id}>
                    <div className="card h-100">
                      <img className="card-img-top" src={character.image} alt="" />
                      <div className="card-body">
                        <h3>{character.name}</h3>

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
                      </div>
                    </div>
                  </div>
                )

              )}


              {favourites.length == 0 && <p>No favourites selected, come back after you liked any</p>}

            </div>
          </div>
        </section>

      </main>

      {/* Print the data */}

    </>
  )
}