let studenName =prompt("Enter the name:")
let subject1 =Number(prompt("Enter the subject-1 marks:"))
let subject2 =Number(prompt("Enter the subject-2 marks:"))
let subject3 =Number(prompt("Enter the subject-3 marks:"))
let total;
let average;
let percentage;
let grade;
let result;
total = subject1+subject2+subject3;
average = total/3;
percentage = total/300*100;
if(percentage>=90&&percentage<=100){
    grade = 'A';
}
else if (percentage >= 75) {
    grade = "B";
}
else if (percentage >= 60) {
    grade = "C";
}
else if (percentage >= 40) {
    grade = "D";
}
else {
    grade = "F";
}
if(average>=40){
    result = "Pass";
}
else{
    result = "Fail"
}
document.getElementById("marks").innerHTML=`<h1>Online Examination Result System</h1>`+`Student Name: ${studenName}<br>`+`Total= ${total}<br>`+`Average: ${average}<br>`+`Percentage: ${percentage}<br>`+`Grade: ${grade}<br>`+`Result: ${result}`