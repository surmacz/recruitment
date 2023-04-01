import { setupWorker } from 'msw'
import { handlers } from './handlers'

export const installMocks = () => {
  if (!(window as any)._mswWorkerInstalled) {
    const worker = setupWorker(...handlers)
    worker.start()
    ;(window as any)._mswWorkerInstalled = 1
  }
}
