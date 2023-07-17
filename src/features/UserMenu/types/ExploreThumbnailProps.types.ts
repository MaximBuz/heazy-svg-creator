import { UseMutationResult } from 'react-query';
import {
  CreateNewDesignMutation,
  Design,
  Exact,
  IncrementTimesCopiedMutation,
} from '../../../graphql/generated';

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
