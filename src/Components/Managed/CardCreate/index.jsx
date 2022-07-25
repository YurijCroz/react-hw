

import React from 'react';
import "../Managed.scss";

export default function CardCreate(props) {
  const {head, body, iconSrc} = props.filling
  return (
    <article className="managed__card">
      <section className="managed__card-header">
        <img src={iconSrc} alt="icon" />
        <h6>{head}</h6>
      </section>
      <section className="managed__card-footer">
        <p>{body}</p>
      </section>
    </article>
  )
}
