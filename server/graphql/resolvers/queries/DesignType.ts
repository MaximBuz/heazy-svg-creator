import { Context } from '../../../context';

export async function getDesignTypes(
  _parent: any,
  _args: any,
  context: Context
) {
  const designTypes = await context.prisma.designType.findMany();
  return designTypes;
}
