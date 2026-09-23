let products = [
    { name: "Shirt", price: 500, category: "Clothing" },
    { name: "Watch", price: 1200, category: "Accessories" }
];

let cards = document.getElementById("cards");
let i=0;
while(i<products.length){
    cards.innerHTML+=`
    <div>
    <h1>${products[i].name}</h1>
    <p>Price :₹ ${products[i].price}</p>
    <p>Category:${products[i].category}
    </div>`;
    i++;
}