let products = [
    { name: "Keyboard", stock: 3 },
    { name: "Mouse", stock: 0 },
    { name: "Charger", stock: 2 }
];
let stock = document.getElementById("stock");
for(let i =0;i<products.length;i++){
    if(products[i].stock>0){
        stock.innerHTML+=`
        <div>
        <h1>${products[i].name}</h1>
        <p>Stock: ${products[i].stock}</p>
        </div>`;
    }
}