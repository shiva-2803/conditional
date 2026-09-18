let customerName = prompt("Enter the name :")
let age = Number(prompt("Enter the age:"))
let occupation = Number(prompt(`Enter the Ocupation sector 
    1.Student
    2.Governament
    3.Private`))
let annual = Number(prompt("Enter the annual income:"))
let smoking = prompt("Enter the Smoking status ?(yes/no)")
smoking = smoking.toLowerCase();
let discount;
let extra;
let annualPremium;
let benefits;
let finalPremium;
if (age < 25) {
    annualPremium = 5000;
}
else if (age >= 25 && age <= 40) {
    annualPremium = 8000;
}
else if (age >= 41 && age <= 60) {
    annualPremium = 12000;
}
else {
    annualPremium = 15000;
}
switch (occupation) {
    case 1:
        discount = annualPremium * 10 / 100;
        benefits = "Basic Life Cover";
        break;
    case 2:
        discount = annualPremium * 5 / 100;
        benefits = "Life Cover + Family Protection";
        break;
    case 3:
        discount = 0;
        benefits = "Life Cover + Accident Protection";
        break;
    default:
        discount =0;
        benefits ="Basic Insurance Cover";
        break;
}
if(smoking=="yes"){
    extra=annualPremium*20/100;
}
else{
    extra=0;
}
finalPremium=annualPremium-discount+extra;
document.getElementById("in").innerHTML=`<h1>Insurance Premium Calculator</h1>`+`Customer Name :${customerName}<br>`+`Annual Premium: ${annualPremium}<br>`+`Benefits:${benefits}<br>`+`Final Premium:${finalPremium}`;
