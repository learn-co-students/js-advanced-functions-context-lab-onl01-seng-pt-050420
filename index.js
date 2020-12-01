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
  let [date, hour] = dateStamp.split(" ");

  let timeInEvent = {
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date,
  };

  this.timeInEvents.push(timeInEvent);
  return this;
};

// createTimeOutEvent
let createTimeOutEvent = function(dateStamp) {
  let [date, hour] = dateStamp.split(" ");

  let timeOutEvent = {
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date,
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

  return (timeOut.hour - timeIn.hour) / 100;
}

// wagesEarnedOnDate
let wagesEarnedOnDate = function(dateStamp) {
  return hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour;
}

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

// findEmployeeByFirstName
let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(function(employee) {
    return employee.firstName === firstName;
  });
};

// calculatePayroll
let calculatePayroll = function(arrayOfEmployees) {
  return arrayOfEmployees.reduce(function(x, employee) {
    return x + allWagesFor.call(employee);
  }, 0);
};