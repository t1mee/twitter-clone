import axios from "axios";
import { Dispatch } from "react";
import { PostsAction, PostsActionTypes } from "../types/Posts";


export const fetchPosts = () => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try{
            dispatch({type: PostsActionTypes.FETCH_POSTS})
            const usersData = await axios.get('https://jsonplaceholder.typicode.com/posts')
            const {data: myData} = await axios.get('https://twitter-app-f242a-default-rtdb.firebaseio.com/tweet.json')
            const tweets = Object.keys(myData).map(key => ({id: key, title: myData[key].title, body: myData[key].body})).reverse()
            dispatch({type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: [...tweets, ...usersData.data]})
        }catch(e){
            dispatch({
                type: PostsActionTypes.FETCH_POSTS_ERROR,
                payload: `Произошла ошибка при загрузке: ${e}`
            })
        }
    }
}