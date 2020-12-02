/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// Your code here
const createEmployeeRecord = function(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = function(arr) {
    return arr.map(data => {
        return createEmployeeRecord(data)
    })
}

const createTimeInEvent = function(time) {
    const [date, hour] = time.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date
    })
    return this
}

const createTimeOutEvent = function(time) {
    const [date, hour] = time.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date
    })
    return this
}

const hoursWorkedOnDate = function(date) {
    let timeIn = this.timeInEvents.find(time => time.date === date)
    let timeOut = this.timeOutEvents.find(time => time.date === date)
    return (timeOut.hour - timeIn.hour) / 100
}

const wagesEarnedOnDate = function(date) {
    console.log('this?', this)
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

const findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find(data => data.firstName === firstName)
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const calculatePayroll = function(arr) {
    return arr.reduce((total, employee) => {
        return total + allWagesFor.call(employee)
    }, 0)
}