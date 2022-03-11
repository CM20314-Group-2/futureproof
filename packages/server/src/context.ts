import { PrismaClient } from "@prisma/client"
import { FastifyReply, FastifyRequest } from "fastify"
import { DeepMockProxy, mockDeep } from "jest-mock-extended"

const prisma = new PrismaClient ()

// Context is used to pass onto the resolvers 
export interface Context  {
  prisma: PrismaClient
}
export const context : Context = {
  prisma : prisma,
}


//MockContext is used for passing it for tests.
export type MockContext = {
  prisma: DeepMockProxy<PrismaClient>
}

export const createMockContext = (): MockContext => {
  return {
    prisma: mockDeep<PrismaClient>(),
  }
}

const buildContext = async (_req: FastifyRequest, _res: FastifyReply) => {
  return {
    prisma: new PrismaClient(),
  }
}

export default buildContext
