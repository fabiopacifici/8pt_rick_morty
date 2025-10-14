import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  // makle a state variable where store the characters list
  const [characters, setCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  function fetchData(page) {
    console.log('Fetch the data');
    // fetch the data with axios
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(res => {
        // log the fetched data
        console.log(res.data.results);
        const { info, results } = res.data

        // update the state
        setCharacters(results)

      })
      .catch(err => {
        console.error(err.message);
      })

  }

  useEffect(()=>{
    fetchData(currentPage)
  }, [])

  return (
    <>

      <header className="py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <strong>Rick and Morty</strong>
          </div>
          <button className="btn btn-dark" onClick={fetchData}>
            <i className="bi bi-download"></i> Fetch Characters
          </button>
        </div>
      </header>

      <main>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container py-5">
            <h1 className="display-5 fw-bold">Welcome to the Rick and Morty Universe</h1>
            <p className="col-md-8 fs-4">
              Dive into the multiverse: discover characters, episodes, and strange new dimensions.
              Click "Fetch Data" to load the latest characters from the Rick and Morty API and start your interdimensional adventure.
            </p>
            <button className="btn btn-dark btn-lg" type="button" onClick={fetchData}>
              Explore Characters
            </button>
          </div>
        </div>

        <section id="characters">
          <div className="container">
            <div className="row g-4">

              {characters.map(character =>

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

              )}


            </div>
          </div>
        </section>

      </main>

      {/* Print the data */}

    </>
  )
}

export default App
