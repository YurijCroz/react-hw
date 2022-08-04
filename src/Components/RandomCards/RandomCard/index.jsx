
'use strict';
import React, {useState, useEffect} from 'react';
import scss from './RandomCard.module.scss';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapLocationDot, faCakeCandles } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

export default function RandomCard(props) {
  const {users, count} = props;
  const user = users[count];
  const [infoText, setInfoText] = useState();
  const [test, setTest] = useState();

  useEffect(()=> {
    if(test===1){
      setInfoText(`phone number: ${user.phone}`);
    } else
    if(test===2){
      setInfoText(`email: ${user.email}`);
    } else
    if(test===3){
      setInfoText(`Location: ${user.location.country} ${user.location.state}`);
    } else 
    if(test===4){
      setInfoText(`Date of Birth: ${format(new Date(user.dob.date), 'P')} age: ${user.dob.age}`);
    } else {
      setInfoText();
    }
  },[test, setInfoText, user]);

  return (
    <article className={scss.card}>
      <section className={classnames(scss.card__header, user.gender==='male' ? scss.male : scss.female)}>
        <img className={scss.card__header_avatar} src={user.picture.large} alt={`photo ${user.name.first} ${user.name.last}`} />
      </section>
      <section className={scss.card__info}>
        <h2>{`${user.name.first} ${user.name.last}`}</h2>
        <h3>{infoText}</h3>
        <section className={classnames(scss.card__info_nav, user.gender==='male' ? scss.male : scss.female)}>
          <button className={classnames(test===1 ? scss.active : scss.deactive)} onClick={()=>test === 1 ? setTest(0) : setTest(1)}><FontAwesomeIcon icon={faPhone} /></button>
          <button className={classnames(test===2 ? scss.active : scss.deactive)} onClick={()=>test === 2 ? setTest(0) : setTest(2)}><FontAwesomeIcon icon={faEnvelope} /></button>
          <button className={classnames(test===3 ? scss.active : scss.deactive)} onClick={()=>test === 3 ? setTest(0) : setTest(3)}><FontAwesomeIcon icon={faMapLocationDot} /></button>
          <button className={classnames(test===4 ? scss.active : scss.deactive)} onClick={()=>test === 4 ? setTest(0) : setTest(4)}><FontAwesomeIcon icon={faCakeCandles} /></button>
        </section>
      </section>
    </article>
  )
}
