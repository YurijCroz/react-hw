'use strict'
import React from 'react';
import CardCreate from './CardCreate';
import './Managed.scss';
import text from './text.json';
import db from './db.json';


export default function Managed() {
  return (
    <section className="managed">
      <article className="managed__text">
        <a href={text.titleSrc}>{text.title}</a>
        <h6>{text.subtitle}</h6>
        <p>{text.subtitleText}</p>
      </article>
      <section className="managed__card-container">
        {db.map((card, index) => <CardCreate filling={card} key={index}/>)}
      </section>
      <div>
        <a className="managed__button" href={text.btnSrc}>{text.btnText}</a>
      </div>
    </section>
  )
}

