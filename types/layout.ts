import { PostType } from './post';

export interface MetaProps
  extends Pick<
    PostType,
    'date' | 'description' | 'image' | 'author' | 'title' | 'category'
  > {
  /**
   * For the meta tag `og:type`
   */
  type?: string;
}
