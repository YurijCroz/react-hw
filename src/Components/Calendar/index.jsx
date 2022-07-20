'use strict'
import React, { Component } from 'react';
import { format } from 'date-fns';
import { getDaysInMonth } from 'date-fns';
import { startOfMonth } from 'date-fns';
import './Calendar.css';
import * as addon from './addon.js';
import classnames from 'classnames';

export default class Calendar extends Component {
  static defaultProps = {
    weekDayNames: addon.WEEK_DAY_NAMES,
    day: new Date(),
  }
  constructor(props){
    super(props);
    this.state = {
      daysInMonth: getDaysInMonth(this.props.day),
      startOfMonth: startOfMonth(this.props.day)
    }
  }
  render() {
    const {weekDayNames, day} = this.props;
    const {daysInMonth, startOfMonth} = this.state;
    const startOfMonthNum = format(startOfMonth, 'e')
    const monthData = addon.getMonthData(daysInMonth, startOfMonthNum);
    const today = format(day, 'd')
    return (
      <article className='calendar__container'>
        <section className='calendar__month'><h1>{format(day, 'MMMM yyyy')}</h1></section>
        <section className='calendar__line'>{weekDayNames.map((name, index) =>
          <div className='calendar__day-week' key={index}><h3>{name}</h3></div>
        )}
        </section>
        {monthData.map((week, index) => 
          <section className='calendar__line' key={index}>
            {week.map((date, index) => 
              <div className={classnames('calendar__day-week', {'calendar__today': date == today})} key={index}>
                {!undefined ? date : ''}
              </div>
            )}
          </section>
        )}
      </article>
    )
  }
}

