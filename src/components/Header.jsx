import { Link } from "react-router-dom"
import Logo from "./Logo"

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="logo-link" aria-label="Penny home">
          <Logo />
        </Link>

        <nav className="navigation" aria-label="Main navigation">

        </nav>
      </div>
    </header>
  )
}
