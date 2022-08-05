
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
  const [buttonClickIndex, setButtonClickIndex] = useState();

  const buttonClickHandler = (i) => buttonClickIndex===i ? scss.active : scss.deactive;

  useEffect(()=> {
    if(buttonClickIndex===1){
      setInfoText(`phone number: ${user.phone}`);
    } else
    if(buttonClickIndex===2){
      setInfoText(`email: ${user.email}`);
    } else
    if(buttonClickIndex===3){
      setInfoText(`Location: ${user.location.country} ${user.location.state}`);
    } else 
    if(buttonClickIndex===4){
      setInfoText(`Date of Birth: ${format(new Date(user.dob.date), 'P')} age: ${user.dob.age}`);
    } else {
      setInfoText();
    }
  },[buttonClickIndex, setInfoText, user]);

  return (
    <article className={scss.card}>
      <section className={classnames(scss.card__header, user.gender==='male' ? scss.male : scss.female)}>
        <img className={scss.card__header_avatar} src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
      </section>
      <section className={scss.card__info}>
        <h2>{`${user.name.first} ${user.name.last}`}</h2>
        <h3>{infoText}</h3>
        <section className={classnames(scss.card__info_nav, user.gender==='male' ? scss.male : scss.female)}>
          <button className={classnames(buttonClickHandler(1))} onClick={()=>buttonClickIndex === 1 ? setButtonClickIndex(0) : setButtonClickIndex(1)}><FontAwesomeIcon icon={faPhone} /></button>
          <button className={classnames(buttonClickHandler(2))} onClick={()=>buttonClickIndex === 2 ? setButtonClickIndex(0) : setButtonClickIndex(2)}><FontAwesomeIcon icon={faEnvelope} /></button>
          <button className={classnames(buttonClickHandler(3))} onClick={()=>buttonClickIndex === 3 ? setButtonClickIndex(0) : setButtonClickIndex(3)}><FontAwesomeIcon icon={faMapLocationDot} /></button>
          <button className={classnames(buttonClickHandler(4))} onClick={()=>buttonClickIndex === 4 ? setButtonClickIndex(0) : setButtonClickIndex(4)}><FontAwesomeIcon icon={faCakeCandles} /></button>
        </section>
      </section>
    </article>
  )
}
