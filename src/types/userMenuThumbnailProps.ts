import { UseMutationResult } from 'react-query';
import { Exact, UpdateDesignMutation } from '../graphql/generated';

export interface IThumbnailProps {
  mutation: UseMutationResult<
    UpdateDesignMutation,
    unknown,
    Exact<{
      id: number;
      public?: boolean;
      name?: string;
      optionParameters?: any;
      delete?: boolean;
    }>,
    unknown
  >;
  id: number;
  imageSrc: string;
  caption: string;
  set: () => void;
  isPublic: boolean;
  timesCopied: Number;
  copiedFrom: any;
}