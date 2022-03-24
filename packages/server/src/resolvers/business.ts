import { PrismaSelect } from '@paljs/plugins'
import { Business, Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { Context } from '../context'

/**
 * Calculates the weighted sustainability score for a business.
 *
 * @param business Business with all scores normalised between 0 and 1.
 * @returns The weighted sustainability score of the business
 */
const calculateSustainabilityScore = ({
  humanRightsScore,
  carbonScore,
  certificateScore,
  envProtectionScore,
  diversityScore,
  productSafetyScore,
  equalPayScore,
  taxScore,
  dataPrivacyScore,
  charitableScore,
}: Pick<
  Business,
  | 'humanRightsScore'
  | 'carbonScore'
  | 'certificateScore'
  | 'envProtectionScore'
  | 'diversityScore'
  | 'productSafetyScore'
  | 'equalPayScore'
  | 'taxScore'
  | 'dataPrivacyScore'
  | 'charitableScore'
>) => {
  const humanRightsCmp = humanRightsScore * 0.14028
  const carbonCmp = carbonScore * 0.137483
  const certificateCmp = certificateScore * 0.121399
  const envProtectionCmp = envProtectionScore * 0.121119
  const diversityCmp = diversityScore * 0.10979
  const productSafetyCmp = productSafetyScore * 0.096224
  const equalPayCmp = equalPayScore * 0.091888
  const taxCmp = taxScore * 0.067552
  const dataPrivacyCmp = dataPrivacyScore * 0.061818
  const charitableCmp = charitableScore * 0.052448
  return (
    (humanRightsCmp +
      carbonCmp +
      certificateCmp +
      envProtectionCmp +
      diversityCmp +
      productSafetyCmp +
      equalPayCmp +
      taxCmp +
      dataPrivacyCmp +
      charitableCmp) *
    100
  )
}

const defaultFields: { Business: { [k in keyof Business]?: boolean } } = {
  Business: {
    humanRightsScore: true,
    carbonScore: true,
    certificateScore: true,
    envProtectionScore: true,
    diversityScore: true,
    productSafetyScore: true,
    equalPayScore: true,
    taxScore: true,
    dataPrivacyScore: true,
    charitableScore: true,
  },
}

export default {
  Query: {
    businesses: (
      _parent: any,
      _args: any,
      { prisma }: Context,
      info: GraphQLResolveInfo
    ) => {
      const select = new PrismaSelect(info, { defaultFields }).value
      return prisma.business.findMany({
        ...select,
      })
    },
    business: (
      _parent: any,
      { id }: { id: number },
      { prisma }: Context,
      info: GraphQLResolveInfo
    ) => {
      const select = new PrismaSelect(info, { defaultFields }).value
      return prisma.business.findUnique({
        where: { id: Number(id) },
        ...select,
      })
    },
    businessByName: async (
      _parent: any,
      { name }: { name: string },
      { prisma }: Context,
      info: GraphQLResolveInfo
    ) => {
      const select = new PrismaSelect(info, { defaultFields }).value
      return prisma.business.findFirst({
        where: {
          name: {
            mode: 'insensitive',
            contains: name,
          },
        },
        ...select,
      })
    },
  },
  Mutation: {
    createBusiness: (
      _parent: any,
      { businessInput }: { businessInput: Prisma.BusinessCreateInput },
      { prisma }: Context
    ) => {
      return prisma.business.create({
        data: {
          ...businessInput,
        },
      })
    },
    updateBusiness: (
      _parent: any,
      {
        id,
        businessInput,
      }: { id: number; businessInput: Prisma.BusinessUpdateInput },
      { prisma }: Context
    ) => {
      return prisma.business.update({
        data: {
          ...businessInput,
        },
        where: { id: id },
      })
    },
    deleteBusiness: (
      _parent: any,
      { id }: { id: number },
      { prisma }: Context
    ) => {
      return prisma.business.delete({
        where: { id: Number(id) || undefined },
      })
    },
  },
  Business: {
    sustainabilityScore: (parent: Business) => {
      return calculateSustainabilityScore(parent)
    },
  },
}
