/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 
 // createEmployeeRecord
let createEmployeeRecord = function(employeeArray) {
  return {
    firstName: employeeArray[0],
    familyName: employeeArray[1],
    title: employeeArray[2],
    payPerHour: employeeArray[3],
    timeInEvents: [],
    timeOutEvents: []
  };
};

// createEmployeeRecords
let createEmployeeRecords = function(arrayOfArrays) {
  return arrayOfArrays.map(function(x) {
    return createEmployeeRecord(x);
  });
};

// createTimeInEvent
let createTimeInEvent = function(dateStamp) {
  let timeInEvent = {
    type: "TimeIn",
    hour: parseInt(dateStamp.substring(11, 15), 10),
    date: dateStamp.substring(0, 10)
  };
  this.timeInEvents.push(timeInEvent);
  return this;
};

// createTimeOutEvent
let createTimeOutEvent = function(dateStamp) {
  let timeOutEvent = {
    type: "TimeOut",
    hour: parseInt(dateStamp.substring(11, 15), 10),
    date: dateStamp.substring(0, 10)
  };
  this.timeOutEvents.push(timeOutEvent);
  return this;
};

// hoursWorkedOnDate
let hoursWorkedOnDate = function(dateStamp) {
  let timeIn = this.timeInEvents.find(function(inEvent) {
    return inEvent.date === dateStamp;
  });

  let timeOut = this.timeOutEvents.find(function(outEvent) {
    return outEvent.date === dateStamp;
  });

  return (timeOut - timeIn) / 100;
};

let wagesEarnedOnDate = function(dateStamp) {
  let wage = this.hoursWorkedOnDate(dateStamp) * this.payPerHour;
  return wage;
};


// allWagesFor
let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}