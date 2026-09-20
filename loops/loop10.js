let products = ["Laptop", "Mobile", "Camera", "Shoes", "Earphones"];
let i=0;
while(i<3){
    document.getElementById("count").innerHTML+=`${products[i]}<br>`
    i++;
}