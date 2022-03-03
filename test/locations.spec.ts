import { Location } from "@prisma/client"
import { createMercuriusTestClient } from "mercurius-integration-testing"
import { Context, createMockContext, MockContext } from "../src/context"
import { app } from "../src/index"

let mockCtx: MockContext
let ctx: Context

const locations: Location[] = [
  {
    id: 1,
    address: "address 1",
    businessId: 1,
    businessName: "business 1",
    createdAt: new Date(),
    latitude: 0,
    longitude: 0,
    updatedAt: new Date(),
  },
]

beforeEach(() => {
  mockCtx = createMockContext()
  ctx = mockCtx as unknown as Context
})

describe("resolvers", () => {
  it("gets locations", async () => {
    //@ts-ignore
    mockCtx.prisma.location.findMany.mockResolvedValueOnce(locations)

    await expect(ctx.prisma.location.findMany()).resolves.toEqual(locations)
  })
})

describe("API", () => {
  const client = createMercuriusTestClient(app)

  it("gets locations", async () => {
    mockCtx.prisma.location.findMany.mockResolvedValueOnce(locations)

    const response = await client.query(
      `query {
          locations {
            id
          }
      }`
    )

    expect(response.data).toEqual({
      locations: locations.map((l) => ({ id: l.id.toString() })),
    })
  })
})
