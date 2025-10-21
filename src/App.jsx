import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import CharactersPage from "./pages/CharactersPage"
import CharacterPage from "./pages/CharacterPage"
import AboutPage from "./pages/AboutPage"
import ContactsPage from "./pages/ContactsPage"
import { useState } from "react";
import FavouritesContext from "./contexts/FavouritesContext"


function App() {

  const [favourites, setFavourites] = useState([]) // [1, 4 , 6]
  const [characters, setCharacters] = useState([])


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

  function toggleFavourites(id){
    console.log(id);
    
    //setFavourites([...favourites, id])
    // if favourites.includes(id)
    if(favourites.includes(id)){
      // - remove it from the array
      console.log('remove me');
      removeFavourite(id)
    } else {
      // otherwire add it
      console.log('add me');
      addFavourite(id)
    }
  }

  function removeFavourite(id){

    const filtered = favourites.filter(favId => favId !== id)
    console.log(filtered);
    // covert to a string for the local storage
    const filteredArrayString = JSON.stringify(filtered)
    console.log(filteredArrayString);
    // update the local storage
    localStorage.setItem('favourites', filteredArrayString)
    
    setFavourites(filtered)
  }

  function addFavourite(id){

    // create the new array
    const newFavouritesArray = [...favourites, id]
    // for persistency: conversion in string for the local storage
    const newFavouritesArrayString = JSON.stringify(newFavouritesArray)
    console.log(newFavouritesArrayString);
    // set the localstorage value
    localStorage.setItem('favourites', newFavouritesArrayString)
    
    setFavourites(newFavouritesArray)
  }
  
  function isFavourite(id){
   return favourites.includes(id) 
  }

  

  return (
    <FavouritesContext.Provider value={{ favourites, setFavourites, toggleFavourites, isFavourite, fetchData, characters }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/characters/:id" element={<CharacterPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FavouritesContext.Provider>
  )
}

export default App
