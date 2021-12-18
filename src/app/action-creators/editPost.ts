import axios from "axios";
import { Dispatch } from "react";
import { PostsAction, PostsActionTypes } from "../types/Posts";

export const editPost =  (id: any, newText: string) => {

    return async (dispatch: Dispatch<PostsAction>) => {
        try{
            await axios.patch(`https://twitter-app-f242a-default-rtdb.firebaseio.com/tweet/${id}.json/`, {body: newText})
            
              const {data: myData} = await axios.get('https://twitter-app-f242a-default-rtdb.firebaseio.com/tweet.json')
              const usersData = await axios.get('https://jsonplaceholder.typicode.com/posts')

              const tweets = Object.keys(myData).map(key => ({id: key, title: myData[key].title, body: myData[key].body})).reverse()
              
              dispatch({type: PostsActionTypes.EDIT_POST, payload: [...tweets, ...usersData.data]})
        }catch(e){
            console.log(e)
        }
  }
}