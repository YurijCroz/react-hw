'use strict'
import React, { Component } from 'react';
import styles from './Stopwatch.module.css';
import require from "hh-mm-ss"

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.countdown ? this.props.value : 0,
      finish: this.props.countdown ? 0 : this.props.value,
    };
    this.timerId = null;
    this.timeFormat = require('hh-mm-ss')
  }
  next = () => {
    this.setState({time: this.state.time + 1})
  }
  prev = () => {
    this.setState({time: this.state.time - 1})
  }
  stop = () => {
    clearInterval(this.timerId);
    this.timerId = null;
  }
  start = () => {
    this.props.countdown
    ? this.timerId = setInterval(this.prev, 1000)
    : this.timerId = setInterval(this.next, 1000);
  }
  componentDidMount(){
    this.start();
  }
  componentWillUnmount(){
    this.stop();
  }
  componentDidUpdate(){
    const {time, finish} = this.state;
    if(time === finish) {
      this.stop();
    };
  }
  render() {
    const {time, finish} = this.state;
    const displayTime = this.timeFormat.fromS(time, 'hh:mm:ss')
    return (
      <section className={styles.stopwatch_container}>
        <h1>{displayTime}</h1>
        <h1 className={time === finish ? styles.text_uncover : styles.text_cover}>Game Over</h1>
      </section>
    )
  }
}

Stopwatch.defaultProps = {
  value: 10,
}
