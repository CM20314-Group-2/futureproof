import { Business, BusinessType } from "@prisma/client"
import { createMercuriusTestClient } from "mercurius-integration-testing"
import { Context, createMockContext, MockContext } from "../src/context"
import { app } from "../src/index"

let mockCtx: MockContext
let ctx: Context

const businesses: Business[] = [
  {
    id: 1,
    name: "Business 1",
    profilePicture: null,
    profileText: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    customerScore: 0,
    locationId: 1,
    sustainabilityScore: 0,
    type: BusinessType.BAR,
    userId: 1,
  },
]

beforeEach(() => {
  mockCtx = createMockContext()
  ctx = mockCtx as unknown as Context
})

describe("resolvers", () => {
  it("gets businesses", async () => {
    //@ts-ignore
    mockCtx.prisma.business.findMany.mockResolvedValueOnce(businesses)

    await expect(ctx.prisma.business.findMany()).resolves.toEqual(businesses)
  })
})

describe("API", () => {
  const client = createMercuriusTestClient(app)

  it("gets businesses", async () => {
    mockCtx.prisma.business.findMany.mockResolvedValueOnce(businesses)

    const response = await client.query(
      `query {
          businesses {
            id
          }
      }`
    )

    expect(response.data).toEqual({
      businesses: businesses.map((b) => ({ id: b.id.toString() })),
    })
  })
})
