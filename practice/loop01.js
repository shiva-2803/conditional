let products = ["laptop","Mobile","Camera","Shoes","EarPhones"];
let ul = document.getElementById("products");
for(let i=0;i<products.length;i++){
    ul.innerHTML+=`<li>${products[i]}</li>`;
}