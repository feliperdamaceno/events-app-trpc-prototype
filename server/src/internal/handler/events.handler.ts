import { router, publicProcedure } from '../app/trpc.js'
import events from '../../database/events.json'
import type { Event } from '../../types.js'

export const EventsHandler = router({
  getAllEvents: publicProcedure.query<Event[]>(async () => {
    const data = events as Event[]
    return data
  })
})
