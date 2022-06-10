import { CreateNewDesignMutation, Design } from '../graphql/generated';
import { UseMutationResult } from 'react-query';
import { Exact } from '../graphql/generated';

export interface IExploreThumbnailProps {
  mutation: UseMutationResult<
    CreateNewDesignMutation,
    unknown,
    Exact<{
      public?: boolean;
      name: string;
      typeId: number;
      thumbnailUrl: string;
      copiedFromUserId?: number;
      optionParameters: any;
    }>,
    unknown
  >;
  design: Design
}
