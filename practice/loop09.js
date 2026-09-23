let products = [
    { name: "Keyboard", stock: 3 },
    { name: "Mouse", stock: 0 },
    { name: "Charger", stock: 2 }
];
let stock = document.getElementById("count");
let i=0;
while(i<products.length&&products[i].stock>0){
        stock.innerHTML+=`${products[i].name}<br>`;
    i++;
}