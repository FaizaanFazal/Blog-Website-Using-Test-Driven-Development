// src/mocks/server.js
import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

export const server = setupWorker(...handlers)