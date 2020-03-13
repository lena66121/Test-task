export interface NewPost {
    title?: string;
    body?: string;
  }

  export interface Post extends NewPost {
    id?: number;
  }
  
export interface NewComment {
    postId?: number;
    body?: string;
  }

  export interface Comment extends NewComment {
    id?: number;
  }

  export interface ApplicationState {
    posts: Array<Post>;
    error: null | object;
  }

