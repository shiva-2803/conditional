let customerName = prompt("Enter the Name:")
let vehicleType = Number(prompt(`Enter the Vehical Type 
    1.Car
    2.Bike
    3.Auto `))
let parkingHours = Number(prompt("Enter the parking Hours:"))
let membership = prompt("Enter the membership status ?(yes/no)")
membership = membership.toLowerCase();
let parkingCharges;
let discount;
let finalAmount;
switch (vehicleType) {
    case 1:
        parkingCharges = parkingHours * 50;
        break;
    case 2:
        parkingCharges = parkingHours * 20;
        break;
    case 3:
        parkingCharges = parkingHours * 30;
        break;
    default:
        parkingCharges =0;
        break;
}
if(membership=="yes"){
    discount=parkingCharges*10/100;
}
else{
    discount=0;
}
finalAmount = parkingCharges-discount;
document.getElementById("parking").innerHTML =`<h1>Smart Parking Management</h1>`+`Customer Name : ${customerName}<br>`+`Parking Charges: ${parkingCharges}<br>`+`Discount :${discount}<br>`+`Final Amount : ${finalAmount}<br>`;