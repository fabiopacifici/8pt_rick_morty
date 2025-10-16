import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import CharacterCard from "../components/CharacterCard";
import { Cardio } from 'ldrs/react'


export default function CharacterPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [character, setCharacter] = useState(null)
  console.log(id);
  const endpoint = `https://rickandmortyapi.com/api/character/${id}`
  console.log(endpoint);

  useEffect(() => {
    //fetchData(endpoint)

    //Activate this instead to delay the fetch and preview the loader
    setTimeout(() => {
      fetchData(endpoint)
    }, 2000)

  }, [id])


  function fetchData(endpoint) {
    axios.get(endpoint)
      .then(res => {
        console.log(res.data);
        setCharacter(res.data)
      }).catch(err => {
        console.log(err);
        navigate(-1)
      })
  }

  return (
    <div>
      <div className="p-5 mb-4 bg-light">
        <div className="container py-5">
          <h1 className="display-5 fw-bold">Discover The character</h1>
          <p className="col-md-8 fs-4">
            Here is our list of characters
          </p>
        </div>
      </div>

      {character != null ?
        (
          <CharacterCard character={character} />
        ) :
        (
          <div className="vh-100 text-center">
            <Cardio
              size="50"
              stroke="4"
              speed="2"
              color="black"
            />
            <div>Loading ...</div>
          </div>
        )
      }
    </div>
  )
}