import styles from './EventList.module.css'

import { EventCard } from '@/components'
import { useEventStore } from '@/store/event'

export default function EventsList() {
  const events = useEventStore((state) => state.events)

  return (
    <section className={styles.events}>
      {events.map((event) => (
        <EventCard event={event} key={event.title + event.host} />
      ))}
    </section>
  )
}
