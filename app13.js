let customerName = prompt("Enter the Name:")
let foodAmount = Number(prompt("Enter the Amount:"))
let delivery = Number(prompt("Enter the distance:"))
let coupon = prompt("Enter the Coupon code:")
let payment = Number(prompt(`Enter the method
    1.UPI
    2.Card
    3.COD`))
let discount;
let delivaryCharges;
let amountAfterDiscount;
let finalBill;

if (coupon == "SAVE10") {
    discount = foodAmount * 10 / 100;
}
else if (coupon == "SAVE20") {
    discount = foodAmount * 20 / 100;
}
else {
    discount = 0;
}
if (delivery <= 5) {
    delivaryCharges = 50;
}
else if(delivery >= 5 && delivery <= 10){
    delivaryCharges = 100;
}
else{
    delivaryCharges = 150;
}
amountAfterDiscount = foodAmount - discount;
switch (payment) {
    case 1:
        finalBill = amountAfterDiscount +delivaryCharges- 20;
        break;
    case 2:
        finalBill = amountAfterDiscount +delivaryCharges- 0;
        break;
    case 3:
        finalBill = amountAfterDiscount +delivaryCharges+ 30;
        break;
    default:
        finalBill = "Invalid payment"
        break;
}
document.getElementById("food").innerHTML=`<h1>Food Delivery Billing System</h1>`+`Customer Name :${customerName}<br>`+`Food Amount: ${foodAmount}<br>`+`Discount:${discount}<br>`+`Delivery Charges:${delivaryCharges}<br>`+`Final Bill:${finalBill}`