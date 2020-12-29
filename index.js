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

function createEmployeeRecord(arr){
    let empObj = {
       firstName: arr[0],
       familyName: arr[1],
       title: arr[2],
       payPerHour: arr[3],
       timeInEvents: [],
       timeOutEvents: []
   }
return empObj
}

function createEmployeeRecords(arr){
  return  arr.map(createEmployeeRecord)
}
function createTimeInEvent(dateStamp){
   const obj = {
        date: dateStamp.split(" ")[0],
        hour: parseInt(dateStamp.split(" ")[1]),
        type: "TimeIn"
   }
   
    this.timeInEvents.push(obj)
    return this
}
function createTimeOutEvent(dateStamp){
   
    const obj = {
        type: "TimeOut",
        hour: parseInt(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0]
    }
  
  this.timeOutEvents.push(obj)
   return this

}

function hoursWorkedOnDate(date){

   const timeIn = this.timeInEvents.find((e) => e.date === date).hour
   const timeOut = this.timeOutEvents.find((e) => e.date === date).hour
   return (timeOut - timeIn)/100
  
}

function wagesEarnedOnDate(date){
    let payOwed = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return payOwed
}

function allWagesFor(){
    let datesWorked = this.timeOutEvents.map(e => e.date)
    let wagesArr = datesWorked.map(e => wagesEarnedOnDate.call(this, e))
    let allPayOwed = wagesArr.reduce((memo, val) => memo + val, 0)
    return allPayOwed
}

function findEmployeeByFirstName(srcArray, first_Name){
   return srcArray.find((record) => record.firstName === first_Name)
}

function calculatePayroll(arr){
    const payAll =  arr.map(e => allWagesFor.call(e))

    return payAll.reduce(function(total, el){
       return total + el
   }, 0)
}

