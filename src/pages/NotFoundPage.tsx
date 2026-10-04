import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <section className="card">
      <h1 className="display">404 – Page not found</h1>

      <p className="bio">There is nothing at this address.</p>

      <div className="link-row">
        <Link to="/">Back to Home</Link>
      </div>
    </section>
  )
}

export default NotFoundPage
