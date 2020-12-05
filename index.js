/* Your Code Here */

function createEmployeeRecord (record){
    let result = {
    firstName: record[0],
    familyName: record[1],
    title: record[2],
    payPerHour: record[3],
    timeInEvents: [],
    timeOutEvents: []
    }
   return result
}

function createEmployeeRecords(arrOfRecord) {
    return arrOfRecord.map(record => createEmployeeRecord(record))  
}

function createTimeInEvent(time) {
    const timeIn = {
        type: "TimeIn",
        date: time.split(" ")[0],
        hour: parseInt(time.split(" ")[1])
    }
     this.timeInEvents.push(timeIn)
     return this
}

function createTimeOutEvent(time) {
    const timeOut = {
        type: "TimeOut",
        date: time.split(" ")[0],
        hour: parseInt(time.split(" ")[1])
    }
     this.timeOutEvents.push(timeOut)
     return this
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date)
    const timeOut = this.timeOutEvents.find(event => event.date === date)

return (timeOut.hour - timeIn.hour)/100
}
let wagesEarnedOnDate = function (date)  {
    return parseInt(hoursWorkedOnDate.call(this, date) * this.payPerHour)   
}

function findEmployeeByFirstName (records, name){
   return records.find(record => record.firstName === name)
}

function calculatePayroll(records){
    return records.reduce(function(memo, record) {
        return memo + allWagesFor.call(record)
    }, 0)
}

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


x = [["Gray", "Worm", "Security",1],["Blue", "Worm", "Security",1]]

y = createEmployeeRecords(x)
z = findEmployeeByFirstName(y, "Blue")
u = findEmployeeByFirstName(y, "Gray")

console.log(u)