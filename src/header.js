import myImage from './react-logo.png'

function Header() {
  return (
      <header>
          <nav className="nav">
              <img src={myImage} className="nav-logo" width={50} height={50} />
              <ul className="nav-items">
                  <li>Pricing</li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
          </nav>
      </header>
  )
}

export default Header;