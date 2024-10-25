import { useEffect } from 'react'
import { useEventStore } from '@/store/event'
import { EventList } from '@/components'

export default function App() {
  const getAllEvents = useEventStore((state) => state.getAll)

  useEffect(() => {
    getAllEvents()
  }, [getAllEvents])

  return (
    <main>
      <EventList />
    </main>
  )
}
