import { DesignType } from '@prisma/client';
import { Context } from '../../../../context';

export async function getDesignTypes(
  _parent: never,
  _args: never,
  { prisma }: Context
): Promise<DesignType[]> {
  const designTypes = await prisma.designType.findMany();

  return designTypes;
}
