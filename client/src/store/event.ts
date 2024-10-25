import { create } from 'zustand'

import { trpc } from '@/libs/trpc'
import type { Event } from '@server/types'

interface EventState {
  events: Event[]
  getAll: () => void
}

export const useEventStore = create<EventState>((set) => ({
  events: [],
  getAll: async () => {
    const events = await trpc.events.getAllEvents.query()
    set(() => ({ events }))
  }
}))
