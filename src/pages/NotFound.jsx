import { Link } from "react-router-dom"
import Header from "../components/Header"

export default function NotFound() {
  return (
    <div className="page not-found-page">
      <Header />

      <main className="not-found">
        <div className="not-found-number">404</div>

        <div className="not-found-content">

          <h1>
            Mēs nevarējām atrast šo lapu.
          </h1>

          <p>
Meklētā lapa neeksistē vai, iespējams, ir pārvietota.
          </p>

          <Link to="/" className="primary-button">
            Atpakaļ uz sākumu
          </Link>
        </div>
      </main>
    </div>
  )
}