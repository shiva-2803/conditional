let cName = prompt("Enter the costumer name:")
let price = Number(prompt("Enter the product price:"))
let quantity = Number(prompt("Enter quantity:"))
let coupon = prompt("Enter the coupon code")
let member = prompt("Enter the membership status ?(Yes/No)")
let total;
let discount;
let delivary;
let finalBill;
let amount;
amount = price*quantity;

if(coupon =="save10"){
    discount= amount*10/100;
}
else if(coupon == "world20"){
    discount = amount*20/100;
}
else{
    discount =0;
}
if(member=="yes"){
    discount=discount+amount*5/100;
}
else{
    discount=discount+0;
}
total = amount-discount;
if(total>=2000){
    delivary=0;
}
else{
    delivary=100;
}
finalBill = total+delivary;
document.getElementById("bill").innerText=`Coustomer Name:`+cName+`\n`+`Total amount:`+total+`\n`+`Discount:`+discount+`\n`+`Delivary charges:`+delivary+`\n`+`Final bill:`+finalBill;