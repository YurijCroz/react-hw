
import React, { Component } from 'react';
import styles from './Stopwatch.module.css';

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.countdown ? this.props.value : 0,
      finish: this.props.countdown ? 0 : this.props.value,
    };
    this.timerId = null;
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
    if(!this.timerId || !this.props.countdown){
      this.timerId = setInterval(this.next, 1000);
    }
    if(!this.timerId || this.props.countdown){
      this.timerId = setInterval(this.prev, 1000);
    }
  }
  componentDidMount(){
    this.start();
  }
  componentWillUnmount(){
    this.stop();
  }
  render() {
    const {time, finish} = this.state;
    if(time === finish) this.stop();
    return (
      <section className={styles.stopwatch_container}>
        <h1>00:00:{time>=10 ? '' : 0}{time}</h1>
      </section>
    )
  }
}
