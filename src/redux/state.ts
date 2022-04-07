import { FC } from "react";

let state = {
    posts: [
        { id: 1, message: 'Hello hello my friend', likeCount: 1000 },
        { id: 2, message: 'Nice to meet you', likeCount: 922 },
        { id: 3, message: 'Bye', likeCount: 13 }
    ],
    dialogs: [
        {id: 1, message: 'A dont know'},
        {id: 2, message: 'Achieve - достигать'},
        {id: 3, message: 'and up - вести себя как дурак'}
    ]
}

export let addFunc = (messagePost: string) =>{
    let newPost = {
        id: 4,
        message: messagePost,
        likeCount: 99
    }
    state.posts.push(newPost);
}

export default state;