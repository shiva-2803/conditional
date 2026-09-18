let customerName = prompt("Enter the Customer Name:");

let productCategory = Number(prompt(`Enter the Product Category
    1. Electronics
    2. Clothing
    3. Grocery`));

let productPrice = Number(prompt("Enter the Product Price:"));

let quantity = Number(prompt("Enter the Quantity:"));

let membership = prompt("Enter Membership Status? (yes/no)");
membership = membership.toLowerCase();

let coupon = prompt("Enter the Coupon Code:");

let paymentMethod = Number(prompt(`Enter the Payment Method
    1. UPI
    2. Card
    3. COD`));

let subtotal;
let discount;
let membershipDiscount;
let couponDiscount;
let gst;
let gstRate;
let deliveryCharges;
let finalAmount;

subtotal = productPrice * quantity;

if (membership == "yes") {
    membershipDiscount = subtotal * 10 / 100;
}
else {
    membershipDiscount = 0;
}

if (coupon == "SAVE10") {
    couponDiscount = subtotal * 10 / 100;
}
else if (coupon == "SAVE20") {
    couponDiscount = subtotal * 20 / 100;
}
else {
    couponDiscount = 0;
}

discount = membershipDiscount + couponDiscount;

switch (productCategory) {
    case 1:
        gstRate = 18;
        break;

    case 2:
        gstRate = 12;
        break;

    case 3:
        gstRate = 5;
        break;

    default:
        gstRate = 0;
        break;
}

let amountAfterDiscount = subtotal - discount;

gst = amountAfterDiscount * gstRate / 100;

if (subtotal >= 2000) {
    deliveryCharges = 0;
}
else {
    deliveryCharges = 100;
}

finalAmount = amountAfterDiscount + gst + deliveryCharges;

if (paymentMethod == 1) {
    finalAmount = finalAmount - 50;
}
else if (paymentMethod == 2) {
    finalAmount = finalAmount;
}
else if (paymentMethod == 3) {
    finalAmount = finalAmount + 50;
}

document.getElementById("mall").innerHTML =
    `<h1>Smart Shopping Mall Billing System</h1>
    Customer Name: ${customerName}<br>
    Product Category: ${productCategory}<br>
    Subtotal: ₹${subtotal}<br>
    Discount: ₹${discount}<br>
    GST: ₹${gst}<br>
    Delivery Charges: ₹${deliveryCharges}<br>
    Final Payable Amount: ₹${finalAmount}`;