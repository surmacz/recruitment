import { User } from '@/model'
import { rest } from 'msw'

const users = [
  {
    id: 1,
    name: 'Jon Snow',
    username: 'Wolf',
    email: 'jon@snow.com',
    city: 'Winterfell',
  },
  {
    id: 2,
    name: 'Darth Vader',
    username: 'Vader',
    email: 'darth@vader.com',
    city: 'Death Star',
  },
  {
    id: 3,
    name: 'Frodo Baggins',
    username: 'Frodo',
    email: 'frodo@baggins.com',
    city: 'Shire',
  },
  {
    id: 4,
    name: 'Indiana Jones',
    username: 'Indy',
    email: 'indiana@jones.com',
    city: 'Venice',
  },
  {
    id: 5,
    name: 'Luke Skywalker',
    username: 'Luke',
    email: 'luke@skywalker.com',
    city: 'Tatooine',
  },
]

export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    return res(
      ctx.delay(500), //to simulate latency
      ctx.json<Array<User>>(users)
    )
  }),
  rest.post('/users', async (req, res, ctx) => {
    const newUser = await req.json()
    const newId = users.length
      ? Math.max(...users.map((user) => user.id)) + 1
      : 1
    users.push({ ...newUser, id: newId })

    return res(
      ctx.delay(500), //to simulate latency
      ctx.json<string>('Done')
    )
  }),
  rest.get('/users/:userId', (req, res, ctx) => {
    const { userId } = req.params
    if (typeof userId !== 'string' || isNaN(userId as unknown as number)) {
      return res(ctx.status(400))
    }
    const user = users.find((user) => user.id === +userId)
    if (!user) {
      return res(ctx.status(400))
    }

    return res(
      ctx.delay(500), //to simulate latency
      ctx.json<User>(user)
    )
  }),
  rest.put('/users/:userId', async (req, res, ctx) => {
    const { userId } = req.params
    if (typeof userId !== 'string' || isNaN(userId as unknown as number)) {
      return res(ctx.status(400))
    }
    const userIndex = users.findIndex((user) => user.id === +userId)
    if (userIndex === -1) {
      return res(ctx.status(400))
    }

    const newUser = await req.json()
    users.splice(userIndex, 1, newUser)

    return res(
      ctx.delay(500), //to simulate latency
      ctx.json<string>('Done')
    )
  }),
  rest.delete('/users/:userId', async (req, res, ctx) => {
    const { userId } = req.params
    if (typeof userId !== 'string' || isNaN(userId as unknown as number)) {
      return res(ctx.status(400))
    }
    const userIndex = users.findIndex((user) => user.id === +userId)
    if (userIndex === -1) {
      return res(ctx.status(400))
    }
    users.splice(userIndex, 1)

    return res(
      ctx.delay(1000), //to simulate latency
      ctx.json<string>('Done')
    )
  }),
]
