import React from 'react';
import { FC } from 'react';
import { createRef, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isContext } from 'vm';
import styles from '../AboutService/AboutService.module.sass'

interface Props{
  post: any
  func: any
}

const AboutService = () => {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash)
  const addCash = ()  => {
    dispatch({type:'ADD_CASH', payload: 5})
  }
  const getCash = () => {
    dispatch({type: 'GET_CASH', payload: 5})
  }
  return (
    <div className={styles.container}>
      <p>{cash}</p>
      <button onClick={addCash}>plus</button>
      <button onClick={getCash}>minus</button>
    </div>

  )
}

export default AboutService;