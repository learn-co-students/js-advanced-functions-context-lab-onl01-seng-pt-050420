/* Your Code Here */
let createEmployeeRecord = function(arr){
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(arrArr){
    return arrArr.map(e => createEmployeeRecord(e))
}

let createTimeInEvent = function(dateTime){
    let obj = {
        type: "TimeIn",
        hour: Number(dateTime.split(" ")[1]),
        date: dateTime.split(" ")[0]
    }
    this.timeInEvents.push(obj)
    return this
}

let createTimeOutEvent = function(dateTime){
    let obj = {
        type: "TimeOut",
        hour: Number(dateTime.split(" ")[1]),
        date: dateTime.split(" ")[0]
    }
    this.timeOutEvents.push(obj)
    return this
}

let hoursWorkedOnDate = function(date){
    let timeIn = this.timeInEvents.find(e => e.date === date).hour
    let timeOut = this.timeOutEvents.find(e => e.date === date).hour
    let hoursWorked = (timeOut - timeIn)/100
    return hoursWorked
}

let wagesEarnedOnDate = function(date){
    let payOwed = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return payOwed
}

let allWagesFor = function(){
    let datesWorked = this.timeOutEvents.map(e => e.date)
    let wagesArr = datesWorked.map(e => wagesEarnedOnDate.call(this, e))
    let allPayOwed = wagesArr.reduce((memo, val) => memo + val, 0)
    return allPayOwed
}

let findEmployeeByFirstName = function(empArr, firstName){
    return empArr.find(e => e.firstName === firstName)
}

let calculatePayroll = function(empArr){
    let totalPayroll = empArr.map(e => allWagesFor.call(e)).reduce((memo, val) => memo + val, 0)
    return totalPayroll
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


