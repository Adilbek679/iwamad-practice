import { Link } from 'react-router'
import Card from './ui/Card'
import Tag from './ui/Tag'
import type { CampusEvent } from '../data/events'

type EventCardProps = {
  event: CampusEvent
}

function EventCard({ event }: EventCardProps) {
  return (
    <Card>
      <h2 className="display">{event.title}</h2>
      <p className="text-muted">
        {event.date} · {event.place}
      </p>
      <div>
        <Tag label={`${event.seats} seats`} />
      </div>
      <div className="link-row">
        <Link to={`/events/${event.id}`}>Details</Link>
      </div>
    </Card>
  )
}

export default EventCard
