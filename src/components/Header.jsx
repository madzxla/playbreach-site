import Logo from "./Logo"

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <nav className="navigation" aria-label="Main navigation">
        </nav>
      </div>
    </header>
  )
}
