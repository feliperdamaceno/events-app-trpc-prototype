import styles from './EventCard.module.css'

import { Event } from '@server/types'

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  const date = new Date(Date.parse(event.date))
  return (
    <article key={event.title + event.host} className={styles.event}>
      <h2 className={styles.title}>{event.title}</h2>
      <small className={styles.date}>{date.toLocaleDateString()}</small>
      <p className={styles.host}>{event.host}</p>
    </article>
  )
}
