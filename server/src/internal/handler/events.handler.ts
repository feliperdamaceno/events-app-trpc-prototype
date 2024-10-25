import { router, publicProcedure } from '../app/trpc.js'
import events from '../../database/events.json'

type Event = {
  title: string
  host: string
  date: string
}

export const EventsHandler = router({
  getAllEvents: publicProcedure.query<Event[]>(async () => {
    const data = events as Event[]
    return data
  })
})
