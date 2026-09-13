let customerName = prompt("Enter the Name:")
let units = Number(prompt("Enter the units:"))
let electricityCharges;
let additionalCharge;
let finalBill;

if(units>=0&&units<=100){
    electricityCharges=units*5;
}
else if(units>=101&&units<=200){
    electricityCharges=units*7;
}
else if(units>=201&&units<=300){
    electricityCharges=units*10;
}
else{
    electricityCharges=units*12;
}
if(units>200){
    additionalCharge=100;
}
else{
    additionalCharge=0;
}
finalBill=electricityCharges+additionalCharge;
document.getElementById("bill").innerHTML=`<h1>Electricity Bill Generator</h1>`+`Customer Name:${customerName}<br>`+`Units:${units}<br>`+`Electricity Charges:${electricityCharges}<br>`+`Additional Charges:${additionalCharge}<br>`+`Final Bill:${finalBill}`;