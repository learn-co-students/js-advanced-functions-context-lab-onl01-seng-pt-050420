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
};

function createEmployeeRecord(infoArray) {
    return {
        firstName: infoArray[0],
        familyName: infoArray[1],
        title: infoArray[2],
        payPerHour: infoArray[3],
        timeInEvents: [],
        timeOutEvents: []
    };
};

function createEmployeeRecords(arrays){
    let records = arrays.map(createEmployeeRecord);
    return records;
};

let createTimeInEvent = function(date){
    const timeStamp = {
        type: "TimeIn", 
        hour: parseInt(date.split(' ')[1], 10), 
        date: date.split(' ')[0]
    };

    this.timeInEvents.push(timeStamp); 
    
    return this;
};

function createTimeOutEvent(date){
    const timeStamp = {
        type: "TimeOut", 
        hour: parseInt(date.split(' ')[1]), 
        date: date.split(' ')[0]
    };

    this.timeOutEvents.push(timeStamp); 
    
    return this;
};

function hoursWorkedOnDate(date){
    let timeIn = this.timeInEvents.find(emp => {return emp.date === date});
    let timeOut = this.timeOutEvents.find(emp=> {return emp.date === date});

    return (timeOut.hour - timeIn.hour)/100;
};

function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
};

function calculatePayroll(emps){
    return emps.reduce(function(memo, emp) {
        return memo + allWagesFor.call(emp)
    }, 0)
};

function findEmployeeByFirstName(emps, firstName){
   return emps.find(emp => emp.firstName === firstName)
};