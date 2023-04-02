import { User } from '@/model'
import { rest } from 'msw'
import { db } from './db'

export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    return res(
      ctx.delay(500), //to simulate latency
      ctx.json<Array<User>>(db.user.getAll())
    )
  }),
  rest.post('/users', async (req, res, ctx) => {
    let id = 0
    try {
      ;({ id } = db.user.findFirst({
        orderBy: {
          id: 'desc',
        },
        where: {},
        strict: true,
      }))
    } catch (e) {}

    const newUser = await req.json()
    db.user.create({ ...newUser, id: id + 1 })

    return res(
      ctx.delay(500), //to simulate latency
      ctx.json<string>('Done')
    )
  }),
  rest.get('/users/:userId', (req, res, ctx) => {
    const { userId } = req.params

    let user
    try {
      user = db.user.findFirst({
        where: {
          id: {
            equals: +userId,
          },
        },
        strict: true,
      })
    } catch (e) {
      return res(ctx.status(400))
    }

    return res(
      ctx.delay(500), //to simulate latency
      ctx.json<User>(user)
    )
  }),
  rest.put('/users/:userId', async (req, res, ctx) => {
    const { userId } = req.params
    const newUser = await req.json()

    try {
      db.user.update({
        where: {
          id: {
            equals: +userId,
          },
        },
        data: newUser,
        strict: true,
      })
    } catch (e) {
      return res(ctx.status(400))
    }

    return res(
      ctx.delay(500), //to simulate latency
      ctx.json<string>('Done')
    )
  }),
  rest.delete('/users/:userId', async (req, res, ctx) => {
    const { userId } = req.params

    try {
      db.user.delete({
        where: {
          id: {
            equals: +userId,
          },
        },
        strict: true,
      })
    } catch (e) {
      return res(ctx.status(400))
    }

    return res(
      ctx.delay(500), //to simulate latency
      ctx.json<string>('Done')
    )
  }),
]
