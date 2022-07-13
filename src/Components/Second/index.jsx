'use strict'

import React, { Component } from 'react';
import './Second.css';

export default class Second extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.start}
  }
  countPlus = () => {
    this.setState((state, props) => ({value: state.value + props.step}))
  }
  countMinus = () => {
    //if(this.state.value <= 0) {return}
    this.setState(state => ({value: state.value - this.props.step}))
  }
  render() {
    //if(this.state.value < 0) this.state.value = 0;
    return (
      <div className='counter'>
        <h2>Value: <span>{this.state.value}</span></h2>
        <div className='btn-container'>
          <button onClick={this.countPlus} className='btn btn-plus'>+</button>
          <button onClick={this.countMinus} className='btn btn-minus'>-</button>
        </div>
      </div>
    )
  }
}
