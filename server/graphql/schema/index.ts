// Type Definitions
import { Bubble } from './Bubble';
import { Corners } from './Corners';
import { Marker } from './Marker';
import { Mutation } from './Mutation';
import { Query } from './Query';
import { User } from './User';
import { Waves } from './Waves';

export const typeDefs = `
  ${User}

  ${Bubble}

  ${Waves}

  ${Corners}

  ${Marker}

  ${Query}

  ${Mutation}
`;