/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function() {
    let eligibleDates = this.timeInEvents.map(function(e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d) {
            return memo + wagesEarnedOnDate.call(this, d)
        }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

// Your code here
function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arr) {
    return arr.map(function(inner_arr) {
        return createEmployeeRecord(inner_arr)
    })
}

function createTimeInEvent(dt) {
    let [date, hour] = dt.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}


function createTimeOutEvent(dt) {
    let [date, hour] = dt.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

function hoursWorkedOnDate(date) {
    let inE = this.timeInEvents.find(function(e) { return e.date === date })
    let outE = this.timeOutEvents.find(function(e) { return e.date === date })
    return (outE.hour - inE.hour) / 100
}

function wagesEarnedOnDate(date) {
    let wage = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return parseFloat(wage.toString())
}


function findEmployeeByFirstName(array, firstName) {
    return array.find(function(rec) {
        return rec.firstName === firstName
    })
}

function calculatePayroll(array) {
    return array.reduce(function(x, r) {
        return x + allWagesFor.call(r)
    }, 0)
}