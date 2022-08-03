
'use strict';
import React from 'react';
import scss from './RandomCard.module.scss';
import { format } from 'date-fns';

export default function RandomCard(props) {
  const {users, count} = props;
  const user = users[count];
  return (
    <article className={scss.card}>
      <section className={scss.card__header}>
        <img className={scss.card__header_avatar} src={user.picture.large} alt={`photo ${user.name.first} ${user.name.last}`} />
      </section>
      <section className={scss.card__info}>
        <h2>{`${user.name.first} ${user.name.last}`}</h2>
        <h3>{`Location: ${user.location.country} ${user.location.state}`}</h3>
        <h3>{`Date of Birth: ${format(new Date(user.dob.date), 'P')} age: ${user.dob.age}`}</h3>
        <h3>{`email: ${user.email}`}</h3>
        <h3>{`phone number: ${user.phone}`}</h3>
        <h3>{`registration date: ${format(new Date(user.registered.date), 'P')}`}</h3>
      </section>
    </article>
  )
}
