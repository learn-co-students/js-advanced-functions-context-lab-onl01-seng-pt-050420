/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
};

function createEmployeeRecords(allEmployees) {
    return allEmployees.map(arr => createEmployeeRecord(arr));
};

function createTimeInEvent(date) {
    let timeInArr = date.split(' ');
    const timeObj = {
        type: "TimeIn",
        hour: parseInt(timeInArr[1]),
        date: timeInArr[0]
    };
    this.timeInEvents.push(timeObj);

    return this;
};

function createTimeOutEvent(date) {
    let timeOutArr = date.split(' ');
    const timeObj = {
        type: "TimeOut",
        hour: parseInt(timeOutArr[1]),
        date: timeOutArr[0]
    };
    this.timeOutEvents.push(timeObj);
    
    return this;
};

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(e => e.date == date);
    const timeOut = this.timeOutEvents.find(e => e.date == date);
    return (timeOut.hour - timeIn.hour)/ 100
};

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
};

function allWagesFor() {
    const availDates = this.timeInEvents.map(e => e.date);

    return availDates.reduce((total, date) => total + wagesEarnedOnDate(date), 0);
};

function calculatePayroll(allEmployeeRecords) {
    return allEmployeeRecords.reduce((total, employee) => total + allWagesFor.call(employee), 0)
};

function findEmployeeByFirstName(allEmployeeRecords, name) {
    return allEmployeeRecords.find(employee => employee.firstName == name);
};