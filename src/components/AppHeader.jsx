import { NavLink } from "react-router-dom"

export default function AppHeader() {

  const menu = [
    {
      id: 1,
      text: 'Home',
      link: '/'
    },
    {
      id: 2,
      text: 'Characters',
      link: '/characters'
    },
    {
      id: 3,
      text: 'About',
      link: '/about'
    },
    {
      id: 4,
      text: 'Contacts',
      link: '/contacts'
    }
  ]

  return (
    <header className="py-2">
      <nav className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <strong>Rick and Morty</strong>
        </div>
        <ul className="list-unstyled d-flex gap-2">
          {
            menu.map(item => 
              <li key={item.id}>
              <NavLink className="nav-link"  to={item.link}>{item.text}</NavLink>
            </li>)
          }

        </ul>
      </nav>
    </header>
  )
}