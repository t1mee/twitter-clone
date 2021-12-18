import axios from "axios";
import { Dispatch } from "react";
import { PostsAction, PostsActionTypes } from "../types/Posts";

export const addPostAction =  (body: any) => {

    return async (dispatch: Dispatch<PostsAction>) => {
        try{
            await axios.post('https://twitter-app-f242a-default-rtdb.firebaseio.com/tweet.json', {
                title: 'Autor',
                body: body
              })
            
              const {data: myData} = await axios.get('https://twitter-app-f242a-default-rtdb.firebaseio.com/tweet.json')
              const usersData = await axios.get('https://jsonplaceholder.typicode.com/posts')

              const tweets = Object.keys(myData).map(key => ({id: key, title: myData[key].title, body: myData[key].body})).reverse()
              
              dispatch({type: PostsActionTypes.ADD_POST, payload: [...tweets, ...usersData.data]})
        }catch(e){
            console.log(e)
        }
  }
}