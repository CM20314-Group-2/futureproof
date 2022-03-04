import { UserReview } from "@prisma/client"
import { createMercuriusTestClient } from "mercurius-integration-testing"
import { Context, createMockContext, MockContext } from "../src/context"
import { app } from "../src/index"

let mockCtx: MockContext
let ctx: Context

const reviews: UserReview[] = [
  {
    id: 1,
    userId: 1,
    ReviewData: "review 1",
    businessId: 1,
    createdAt: new Date(),
    businessName: "business 1",
    reputation: 0,
  },
]

beforeEach(() => {
  mockCtx = createMockContext()
  ctx = mockCtx as unknown as Context
})

describe("resolvers", () => {
  it("gets reviews", async () => {
    //@ts-ignore
    mockCtx.prisma.userReview.findMany.mockResolvedValueOnce(reviews)

    await expect(ctx.prisma.userReview.findMany()).resolves.toEqual(reviews)
  })
})

describe("API", () => {
  const client = createMercuriusTestClient(app)

  it("gets reviews", async () => {
    mockCtx.prisma.userReview.findMany.mockResolvedValueOnce(reviews)

    const response = await client.query(
      `query {
          reviews {
            id
          }
      }`
    )

    expect(response.data).toEqual({
      reviews: reviews.map((r) => ({ id: r.id.toString() })),
    })
  })
})
