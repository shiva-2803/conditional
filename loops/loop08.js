let cart = [499, 299, 1299, 999];
let total=0;
let i=0;
while(i<cart.length){
    total=total+cart[i];
    i++;
}
document.getElementById("count").innerHTML+=`<h1>Cart Total: ${total}</h1>`