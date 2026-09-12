let customerName = prompt("Enter the name:")
let age = Number(prompt("Enter the age:"))
let weight = Number(prompt("Enter the weight:"))
let membership = Number(prompt(`Enter the plan 
    1.Basic
    2.Premium
    3.VIP`))
let membershipfee;
let membershipPlan;
let recomandedProgram;
if(membership==1){
    membershipPlan = "Basic";
}
else if(membership==2){
    membershipPlan = "Premium";
}
else if(membership==3){
    membershipPlan = "VIP";
}
else{
    membershipPlan= "Invalid plan"
}
if (weight < 50) {
    recomandedProgram = "Weight Gain Program";
}
else if (weight >= 50 && weight <= 70) {
    recomandedProgram = "General Fitness Program";
}
else if (weight >= 71 && weight <= 90) {
    recomandedProgram = "Strength Training Program";
}
else {
    recomandedProgram = "Weight Loss Program";
}
switch (membership) {
    case 1:
        membershipfee = 1000;
        break;
    case 2:
        membershipfee = 2000;
        break;
    case 3:
        membershipfee = 3000;
        break;
    default:
        membershipfee = "No valid plan";
        break;
}document.getElementById("gym").innerHTML = `<h1>Gym Membership System</h1>`+`Customer Name: ${customerName}<br>`+`Membership Plan: ${membershipPlan}<br>`+`Membership Fee: ${membershipfee}<br>`+`Recommended Program:${recomandedProgram}`

