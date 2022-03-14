import { User, user_types } from '@prisma/client'
import { createMercuriusTestClient } from 'mercurius-integration-testing'
import { Context, createMockContext, MockContext } from '../src/context'
import { app } from '../src/index'

let mockCtx: MockContext
let ctx: Context

const users: User[] = [
  {
    id: 1,
    email: 'john@doe.com',
    password: '',
    firstName: 'John',
    lastName: 'Doe',
    profilePhoto: null,
    roles: user_types.BUSINESS,
  },
]

beforeEach(() => {
  mockCtx = createMockContext()
  ctx = mockCtx as unknown as Context
})

describe('resolvers', () => {
  it('gets users', async () => {
    //@ts-ignore
    mockCtx.prisma.user.findMany.mockResolvedValueOnce(users)

    await expect(ctx.prisma.user.findMany()).resolves.toEqual(users)
  })
})

describe('API', () => {
  const client = createMercuriusTestClient(app)

  it('gets users', async () => {
    mockCtx.prisma.user.findMany.mockResolvedValueOnce(users)

    const response = await client.query(
      `query {
          users {
            id
          }
      }`
    )

    expect(response.data).toEqual({
      users: users.map((u) => ({ id: u.id.toString() })),
    })
  })
})
