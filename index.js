/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
  
function createEmployeeRecord(data) {
    let newEmployee = {}
    newEmployee.firstName = data[0]
    newEmployee.familyName = data[1]
    newEmployee.title = data[2]
    newEmployee.payPerHour = data[3]
    newEmployee.timeInEvents = []
    newEmployee.timeOutEvents = []
    return newEmployee
}

function createEmployeeRecords(data) {
    return data.map(employee => createEmployeeRecord(employee))
}

let createTimeInEvent = function(dateStamp) {
    this.timeInEvents.push({
        type: "TimeIn",
        date: dateStamp.split(" ")[0],
        hour: parseInt(dateStamp.split(" ")[1])
    })
    return this
}

let createTimeOutEvent = function(dateStamp) {
    this.timeOutEvents.push({
        type: "TimeOut",
        date: dateStamp.split(" ")[0],
        hour: parseInt(dateStamp.split(" ")[1])
    })
    return this
}

let hoursWorkedOnDate = function(dateStamp) {
    let timeIn = this.timeInEvents.find(e => e.date == dateStamp).hour
    let timeOut = this.timeOutEvents.find(e => e.date == dateStamp).hour
    return (timeOut - timeIn)/100
}

let wagesEarnedOnDate = function(dateStamp) {
    return this.payPerHour * hoursWorkedOnDate.call(this, dateStamp)
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

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(e => e.firstName == firstName)
}

function calculatePayroll(employees) {
    return  employees.reduce(function(total, employee) {
        return total + allWagesFor.call(employee)
    }, 0)
}