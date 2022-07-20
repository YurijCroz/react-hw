'use strict'

const DAYS_IN_WEEK = 7;

export const WEEK_DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export function getMonthData(daysInMonth, startOfMonth) {
    let monthData = [];
    const totalDay = Number(daysInMonth);
    const startDay = Number(startOfMonth);
    const totalWeek = Math.ceil((totalDay + (startDay-1)) / DAYS_IN_WEEK);
    for(let i=0, day=1; i < totalWeek ; i++){
        monthData[i] = [];
        for(let j=0; j < DAYS_IN_WEEK ; j++){
            if((i === 0 && j < (startDay-1)) || day > totalDay){
                monthData[i][j] = undefined;
            } else {
                monthData[i][j] = day;
                day++
            }
        }
    }
    return monthData
}

