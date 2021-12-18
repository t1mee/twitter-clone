export enum PostsActionTypes {
    ADD_POST = 'ADD_POST',
    DELETE_POST = 'DELETE_POST',
    EDIT_POST = 'EDIT_POST', 
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR'
    }

export interface PostsState {
    posts: any[];
    loading: boolean;
    error: null | string;
}

interface AddPostAction {
    type: PostsActionTypes.ADD_POST;
    payload: any;
}

interface deletePostAction {
    type: PostsActionTypes.DELETE_POST;
    payload: any;
}
interface editPostAction {
    type: PostsActionTypes.EDIT_POST;
    payload: any;
}

interface FetchPostsAction {
    type: PostsActionTypes.FETCH_POSTS;
}
interface FetchPostsSuccessAction {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS;
    payload: any
}
interface FetchPostsErrorAction {
    type: PostsActionTypes.FETCH_POSTS_ERROR;
    payload: string;
}

export type  PostsAction = AddPostAction | deletePostAction| editPostAction | FetchPostsAction | FetchPostsSuccessAction | FetchPostsErrorAction