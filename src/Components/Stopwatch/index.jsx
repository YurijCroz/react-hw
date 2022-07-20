'use strict'
import React, { Component } from 'react';
import styles from './Stopwatch.module.css';
import PropTypes from 'prop-types';
const timeFormat = require('hh-mm-ss');

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.countdown ? this.props.value : 0,
      finish: this.props.countdown ? 0 : this.props.value,
      value: this.props.value
    };
    this.timerId = null;
    this.value = this.state.time
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
  reset = () => {
    this.setState({time: this.value})
    this.start();
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
    const displayTime = timeFormat.fromS(time, 'hh:mm:ss')
    return (
      <section className={styles.stopwatch_container}>
        <h1>{displayTime}</h1>
        <div className={time === finish ? styles.text_uncover : styles.text_cover}>
          <h1>Game Over</h1>
          <h3 onClick={this.reset}>Press to Continue</h3>
        </div>
      </section>
    )
  }
}

Stopwatch.propTypes = {
  value: PropTypes.number
}

Stopwatch.defaultProps = {
  value: 10,
}
