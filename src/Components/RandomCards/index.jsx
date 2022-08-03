
'use strict';
import React, {useState, useEffect} from 'react';
import RandomCard from './RandomCard';
import scss from './RandomCards.module.scss';


export default function RandomCards() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(undefined);
  const [isFetching, setIsFetching] = useState(true);

  const setPrev = () => {
    setCount(count => {
      const prev = count<=0 ? users.length-1 : count-1;
      return prev;
    })
  }
  const setNext = () => {
    setCount(count => {
      const next = count===users.length-1 ? 0 : count+1;
      return next;
    })
  }

  useEffect(()=>{
    const getData = async () => {
      const response = await fetch("https://randomuser.me/api/?results=20")
        .then(res=>res.json())
        .then(data=>setUsers(data.results))
        .catch(rej=>rej);
      setIsFetching(false);
    }
    if(isFetching){
      getData();
    };
  },[setUsers, setIsFetching, isFetching]);

  if(!isFetching) {
    return (
      <section className={scss.container}>
        <button className={scss.container__btn} onClick={setPrev} >prev</button>
        <RandomCard users={users} count={count}/>
        <button className={scss.container__btn} onClick={setNext} >next</button>
      </section>
    )
  }

  else if(isFetching) {
    return (
      <section className={scss.container}>
        <h1 className={scss.container__loading}>Loading...</h1>
      </section>
    )
  }
}
