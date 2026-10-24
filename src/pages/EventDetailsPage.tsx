import { Link, useParams } from 'react-router'
import EventSignupForm from '../components/EventSignupForm'
import { events } from '../data/events'

function EventDetailsPage() {
  const { eventId } = useParams()
  const event = events.find((item) => item.id === Number(eventId))

  if (!event) {
    return (
      <section className="card">
        <h1 className="display">Event not found</h1>
        <p>No event with id {eventId}.</p>
        <div className="link-row">
          <Link to="/events">Back to events</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="card">
      <h1 className="display">{event.title}</h1>
      <p className="text-muted">
        {event.date} · {event.place}
      </p>

      <EventSignupForm key={event.id} event={event} />

      <div className="link-row">
        <Link to="/events">Back to events</Link>
      </div>
    </section>
  )
}

export default EventDetailsPage
