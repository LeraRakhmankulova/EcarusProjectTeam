import React from 'react';
import { FC } from 'react';
import { createRef, useRef } from 'react';
import styles from '../AboutService/AboutService.module.sass'


interface Props{
  post: any
  func: any
}

const AboutService:FC<Props> = ({post, func}) => {


  return (
    <div className={styles.container}>
      <h1>Add new posts</h1>
      <div><textarea ></textarea></div>
      <div>
        <button onClick={func}>add new</button>
      </div>
      <div>
        <h3>All my posts:</h3>
        {post.map((el:any) => <div><h5>User id:{el.id} </h5> User message :{el.message}<br/>  Like count : {el.likeCount}</div>)}
      </div>
    </div>

  )
}

export default AboutService;