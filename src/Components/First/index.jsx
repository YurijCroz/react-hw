'use strict'

import React, { Component } from 'react'
import './First.css'

export default class First extends Component {
  constructor(props){
    super(props)
  }
  reverseMode = () => this.props.reverse ? 'reverse' : 'row'
  render() {
    const {img, h3, h2, p} = this.props.block
    return (
      <div className={`mobile-section ${this.reverseMode()}`}>
        <img src={img} alt="mobile" />
        <div className='mobile-info'>
          <h3>{h3}</h3>
          <h2>{h2}</h2>
          <p>{p}</p>
        </div>
      </div>
    )
  }
}
