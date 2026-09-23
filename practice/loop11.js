let cart=[];
let i=0;
do{
    let products = prompt("Enter the Product names:")
    cart.push(products);
    i++
}
while(i<5);
    for(let i=0;i<cart.length;i++){
        document.getElementById("count").innerHTML+=`${cart[i]}<br>`
    }