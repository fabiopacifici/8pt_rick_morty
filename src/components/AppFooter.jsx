import { Link } from "react-router-dom"

export default function AppFooter(){


  return (
    <footer className="bg-dark py-5 mt-5 text-white">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          <div className="col">
            <h3>Rick And Morty</h3>
            <p>This is rick and morty</p>

          </div>
          <div className="col">
            <h3>Menu</h3>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/characters">Characters</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contacts">Contact</Link></li>
            </ul>

          </div>
          <div className="col">
            <h3>Legal</h3>
            <ul className="list-unstyled">
              <li><a href="">Privacy</a></li>
              <li><a href="">T&C</a></li>
            </ul>

          </div>
        </div>
      </div>
    </footer>
  )
}