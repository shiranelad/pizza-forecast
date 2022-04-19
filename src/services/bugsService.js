'use strict'

import axios from 'axios'

const DUE_HOUR = 17
const MINS_PER_BUG = 10 //personal decision for how long it takes to solve a bug

export const bugService = {
    getBugs,
    calcPizzaForecast
}

async function getBugs() {
    var currTime = new Date()
    if (currTime.getHours() >= DUE_HOUR) return
    const bugs = await axios.get('http://www.randomnumberapi.com/api/v1.0/random?min=1&max=99&count=1&cors=true')
    return +bugs.data[0];
}

function calcPizzaForecast(bugsCount) {
    var currTime = new Date()
    if (currTime.getHours() >= DUE_HOUR) return { minsLeft: 0, rainChance: 0, DUE_HOUR, msg: `${DUE_HOUR}:00 has passed, try again tomorrow` }
    var minsLeft = (DUE_HOUR - currTime.getHours()) * 60 - currTime.getMinutes()

    var totalBugsTime = MINS_PER_BUG * bugsCount
    var pizzaForecast = (1 - (minsLeft / totalBugsTime) < 0) ? 0 : 1 - (minsLeft / totalBugsTime)
    return { minsLeft, rainChance: Math.round(pizzaForecast * 100.0), DUE_HOUR, msg: '' }
}