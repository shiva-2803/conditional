let studentName = prompt("Enter the name of the student:")
let tenthPercentage = Number(prompt("Enter the 10th percentage:"))
let twelthPercentage = Number(prompt("Enter the 12th percentage:"))
let entranceMarks = Number(prompt("Enter the marks:"))
let admissionStatus;
let allottedBranch;
if(tenthPercentage>=60&&twelthPercentage>=60&&entranceMarks>=50){
    admissionStatus="Passed";
    if (entranceMarks >= 90) {
    allottedBranch = "Computer Science";
}
else if (entranceMarks >= 80) {
    allottedBranch = "Information Technology";
}
else if (entranceMarks >= 70) {
    allottedBranch = "Electronics";
}
else if (entranceMarks >= 60) {
    allottedBranch = "Mechanical";
}
else{
    allottedBranch = "Civil";
}
}
else{
    admissionStatus="Failed";
    allottedBranch = "No Branch Allotted";
}
document.getElementById("clg").innerHTML=`<h1>College Admission System</h1>`+`Student Name:${studentName}<br>`+`Admission Status:${admissionStatus}<br>`+`Allotted Branch:${allottedBranch}`;