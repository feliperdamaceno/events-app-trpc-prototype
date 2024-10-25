import type { TRPCRouter } from './internal/app/routes.js'

export type Event = {
  title: string
  host: string
  date: string
}

export type AppRouter = typeof TRPCRouter
