import { CreateNewDesignMutation, Design, IncrementTimesCopiedMutation } from '../graphql/generated';
import { UseMutationResult } from 'react-query';
import { Exact } from '../graphql/generated';

export interface IExploreThumbnailProps {
  copyTemplate: UseMutationResult<
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
  increment: UseMutationResult<
    IncrementTimesCopiedMutation,
    unknown,
    Exact<{
      id: number;
    }>,
    unknown
  >;
  design: Design;
}
