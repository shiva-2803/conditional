let products = ["Laptop", "Mobile", "Camera", "Shoes", "Earphones"];
let i=0;
while(i<products.length){
    document.getElementById("count").innerHTML+=`${products[i]}<br>`;
    if(products[i]==="Camera"){
        break;
    }
    i++;
}