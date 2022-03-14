import { Comment } from '@prisma/client'
import { createMercuriusTestClient } from 'mercurius-integration-testing'
import { Context, createMockContext, MockContext } from '../src/context'
import { app } from '../src/index'

let mockCtx: MockContext
let ctx: Context

const comments: Comment[] = [
  {
    id: 1,
    text: 'comment 1',
    userId: 1,
    businessId: 1,
    createdAt: new Date(),
    locationId: 1,
  },
]

beforeEach(() => {
  mockCtx = createMockContext()
  ctx = mockCtx as unknown as Context
})

describe('resolvers', () => {
  it('gets comments', async () => {
    //@ts-ignore
    mockCtx.prisma.comment.findMany.mockResolvedValueOnce(comments)

    await expect(ctx.prisma.comment.findMany()).resolves.toEqual(comments)
  })
})

describe('API', () => {
  const client = createMercuriusTestClient(app)

  it('gets comments', async () => {
    mockCtx.prisma.comment.findMany.mockResolvedValueOnce(comments)

    const response = await client.query(
      `query {
          comments {
            id
          }
      }`
    )

    expect(response.data).toEqual({
      comments: comments.map((c) => ({ id: c.id.toString() })),
    })
  })
})
