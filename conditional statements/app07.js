let customerName = prompt("Enter the Name:")
let foodAmount = Number(prompt("Enter the bill:"))
let membership = prompt("Do you have the membership ?(Yes/NO)")
membership = membership.toLowerCase();
let discount;
let gst;
let finalBill;
let complimentaryOffer;
if(membership=="yes"){
    discount=foodAmount*10/100;
}
else{
    discount=0;
}
let amountAfterDiscount=foodAmount-discount;
gst=amountAfterDiscount*5/100;
finalBill=amountAfterDiscount+gst;
if(finalBill>=2000){
    complimentaryOffer="Free Dessert";
}
else{
    complimentaryOffer="No Complimentary Offer"
}
document.getElementById("rest").innerHTML=`<h1>Restaurant Billing System</h1>`+`Customer Name: ${customerName}<br>`+`Food Amount: ${foodAmount}<br>`+`Discount: ${discount}<br>`+`GST: ${gst}<br>`+`Final Bill: ${finalBill}<br>`+`Complimentary Offer: ${complimentaryOffer}`;
