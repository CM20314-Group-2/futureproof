import { PrismaClient } from "@prisma/client"
import { FastifyReply, FastifyRequest } from "fastify"
import { DeepMockProxy, mockDeep } from "jest-mock-extended"

export type Context = {
  prisma: PrismaClient
}

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
