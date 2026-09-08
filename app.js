let employeName = prompt("Enter employee name:")
let basicSalary = Number(prompt("Enter the salary:"))
let exepirence = Number(prompt("Enter the experiance"))

let bonus;
let tax;
let finalSalary;
if (exepirence >= 5) {
    bonus = basicSalary * 20 / 100;
}
else if (exepirence >= 2) {
    bonus = basicSalary * 10 / 100;
}
else {
    bonus = basicSalary * 5 / 100;
}
if (basicSalary >= 100000) {
    tax = basicSalary * 10 / 100;
}
else if (basicSalary >= 50000) {
    tax = basicSalary * 5 / 100;
}
else {
    tax = basicSalary * 2 / 100;
}
finalSalary = basicSalary + bonus - tax;
document.getElementById("Salary").innerText = `Salary slip\n` + "Employe Name:" + employeName + "\n" + "Basic Salary:" + basicSalary + "\n" + "Bonus:" + bonus + "\n" + "Tax:" + tax + "\n" + "Final salary:" + finalSalary;