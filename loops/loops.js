let products1 = ["Laptop", "Mobile", "Camera", "Shoes", "Earphones"];

let output1 = "<ul>";

for (let i = 0; i < products1.length; i++) {
    output1 += `<li>${products1[i]}</li>`;
}

output1 += "</ul>";

document.getElementById("task1").innerHTML = output1;


let prices2 = [1000, 2000, 3000, 1500];

let output2 = `
<table border="1">
<tr>
<th>Original Price</th>
<th>Discounted Price</th>
</tr>
`;

for (let i = 0; i < prices2.length; i++) {
    let discount = prices2[i] * 10 / 100;
    let finalPrice = prices2[i] - discount;

    output2 += `
    <tr>
    <td>${prices2[i]}</td>
    <td>${finalPrice}</td>
    </tr>
    `;
}

output2 += "</table>";

document.getElementById("task2").innerHTML = output2;


let products3 = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Shirt", price: 1200, category: "Clothing" },
    { name: "Watch", price: 3000, category: "Accessories" }
];

let output3 = "";

for (let i = 0; i < products3.length; i++) {
    output3 += `
    <div>
        <h3>${products3[i].name}</h3>
        <p>Price: ${products3[i].price}</p>
        <p>Category: ${products3[i].category}</p>
    </div>
    `;
}

document.getElementById("task3").innerHTML = output3;


let orders4 = [
    { name: "Laptop", quantity: 2, price: 50000 },
    { name: "Mouse", quantity: 3, price: 1000 },
    { name: "Keyboard", quantity: 1, price: 2000 }
];

let output4 = `
<table border="1">
<tr>
<th>S.No</th>
<th>Product</th>
<th>Quantity</th>
<th>Price</th>
<th>Total</th>
</tr>
`;

for (let i = 0; i < orders4.length; i++) {
    let total = orders4[i].quantity * orders4[i].price;

    output4 += `
    <tr>
    <td>${i + 1}</td>
    <td>${orders4[i].name}</td>
    <td>${orders4[i].quantity}</td>
    <td>${orders4[i].price}</td>
    <td>${total}</td>
    </tr>
    `;
}

output4 += "</table>";

document.getElementById("task4").innerHTML = output4;


let products5 = [
    { name: "Laptop", stock: 5 },
    { name: "Mobile", stock: 0 },
    { name: "Camera", stock: 3 },
    { name: "Shoes", stock: 0 }
];

let output5 = "<ul>";

for (let i = 0; i < products5.length; i++) {
    if (products5[i].stock > 0) {
        output5 += `<li>${products5[i].name}</li>`;
    }
}

output5 += "</ul>";

document.getElementById("task5").innerHTML = output5;


let i6 = 10;
let output6 = "";

while (i6 >= 1) {
    output6 += i6 + "<br>";
    i6--;
}

document.getElementById("task6").innerHTML = output6;


let products7 = ["Laptop", "Mobile", "Camera", "Shoes", "Earphones"];

let i7 = 0;
let output7 = "";

while (i7 < products7.length) {
    output7 += products7[i7] + "<br>";

    if (products7[i7] === "Camera") {
        break;
    }

    i7++;
}

document.getElementById("task7").innerHTML = output7;


let cart8 = [499, 299, 1299, 999];

let i8 = 0;
let total8 = 0;

while (i8 < cart8.length) {
    total8 += cart8[i8];
    i8++;
}

document.getElementById("task8").innerHTML = `Cart Total: ${total8}`;


let products9 = [
    { name: "Laptop", stock: 5 },
    { name: "Mobile", stock: 3 },
    { name: "Camera", stock: 0 },
    { name: "Shoes", stock: 4 }
];

let i9 = 0;
let output9 = "";

while (i9 < products9.length && products9[i9].stock > 0) {
    output9 += products9[i9].name + "<br>";
    i9++;
}

document.getElementById("task9").innerHTML = output9;


let products10 = ["Laptop", "Mobile", "Camera", "Shoes", "Watch"];

let i10 = 0;
let output10 = "";

while (i10 < 3) {
    output10 += products10[i10] + "<br>";
    i10++;
}

document.getElementById("task10").innerHTML = output10;


function addToCart() {

    let cart11 = [];
    let i11 = 0;

    do {
        let item = prompt("Enter product name:");

        if (item !== null && item !== "") {
            cart11.push(item);
            i11++;
        }

    } while (i11 < 5);

    let output11 = "<ul>";

    for (let i = 0; i < cart11.length; i++) {
        output11 += `<li>${cart11[i]}</li>`;
    }

    output11 += "</ul>";

    document.getElementById("task11").innerHTML = output11;
}


let cart12 = [];
let output12 = "";
let checked12 = false;

do {
    if (cart12.length === 0) {
        output12 = "Cart is empty";
        checked12 = true;
    }
} while (!checked12);

document.getElementById("task12").innerHTML = output12;


let products13 = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Camera", price: 30000 }
];

let i13 = 0;
let output13 = "";

do {
    let discount = products13[i13].price * 20 / 100;
    let finalPrice = products13[i13].price - discount;

    output13 += `
    ${products13[i13].name} - ${finalPrice}<br>
    `;

    i13++;

} while (i13 < products13.length);

document.getElementById("task13").innerHTML = output13;


let wishlist14 = ["Laptop", "Mobile", "Camera", "Watch"];

let i14 = 0;
let output14 = "";

do {
    output14 += wishlist14[i14] + "<br>";
    i14++;
} while (i14 < wishlist14.length);

document.getElementById("task14").innerHTML = output14;


let stock15 = 5;
let added15 = 0;

while (stock15 > 0) {
    added15++;
    stock15--;
}

document.getElementById("task15").innerHTML =
    `Product added ${added15} times`;


let categories16 = [
    {
        name: "Mobiles",
        products: ["iPhone", "Samsung", "OnePlus"]
    },
    {
        name: "Laptops",
        products: ["Dell", "HP", "Lenovo"]
    }
];

let output16 = "";

for (let i = 0; i < categories16.length; i++) {

    output16 += `<h3>${categories16[i].name}</h3>`;

    for (let j = 0; j < categories16[i].products.length; j++) {
        output16 += categories16[i].products[j] + "<br>";
    }
}

document.getElementById("task16").innerHTML = output16;


let inventory17 = [
    { name: "Laptop", price: 50000, quantity: 2 },
    { name: "Mouse", price: 1000, quantity: 5 },
    { name: "Keyboard", price: 2000, quantity: 3 }
];

let output17 = `
<table border="1">
<tr>
<th>Product</th>
<th>Price</th>
<th>Quantity</th>
<th>Total Stock Value</th>
</tr>
`;

for (let i = 0; i < inventory17.length; i++) {

    let totalValue =
        inventory17[i].price * inventory17[i].quantity;

    output17 += `
    <tr>
    <td>${inventory17[i].name}</td>
    <td>${inventory17[i].price}</td>
    <td>${inventory17[i].quantity}</td>
    <td>${totalValue}</td>
    </tr>
    `;
}

output17 += "</table>";

document.getElementById("task17").innerHTML = output17;


let cart18 = [1500, 1200, 1000, 800];

let total18 = 0;

for (let i = 0; i < cart18.length; i++) {
    total18 += cart18[i];
}

let budget18 = 5000;
let status18;

if (total18 <= budget18) {
    status18 = "Within Budget";
} else {
    status18 = "Budget Exceeded";
}

document.getElementById("task18").innerHTML =
    `Cart Total: ${total18}<br>${status18}`;


let products19 = [
    { name: "T-Shirt", type: "Clothing" },
    { name: "Laptop", type: "Electronics" },
    { name: "Watch", type: "Accessories" },
    { name: "Jeans", type: "Clothing" },
    { name: "Mobile", type: "Electronics" }
];

let clothing19 = "<h3>Clothing</h3>";
let electronics19 = "<h3>Electronics</h3>";
let accessories19 = "<h3>Accessories</h3>";

for (let i = 0; i < products19.length; i++) {

    if (products19[i].type === "Clothing") {
        clothing19 += products19[i].name + "<br>";
    }

    if (products19[i].type === "Electronics") {
        electronics19 += products19[i].name + "<br>";
    }

    if (products19[i].type === "Accessories") {
        accessories19 += products19[i].name + "<br>";
    }
}

document.getElementById("task19").innerHTML =
    clothing19 + electronics19 + accessories19;


let products20 = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Mouse", price: 1000 }
];

let output20 = `
<table border="1">
<tr>
<th>Product</th>
<th>Price</th>
<th>GST</th>
<th>Final Price</th>
</tr>
`;

for (let i = 0; i < products20.length; i++) {

    let gst = products20[i].price * 18 / 100;
    let finalPrice = products20[i].price + gst;

    output20 += `
    <tr>
    <td>${products20[i].name}</td>
    <td>${products20[i].price}</td>
    <td>${gst}</td>
    <td>${finalPrice}</td>
    </tr>
    `;
}

output20 += "</table>";

document.getElementById("task20").innerHTML = output20;


let products21 = ["Laptop", "Mobile", "Camera", "Shoes", "Watch"];

let output21 = "";

for (let i = products21.length - 1; i >= 0; i--) {
    output21 += products21[i] + "<br>";
}

document.getElementById("task21").innerHTML = output21;


let products22 = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Camera", price: 30000 },
    { name: "Watch", price: 5000 }
];

let maxProduct22 = products22[0];

for (let i = 1; i < products22.length; i++) {

    if (products22[i].price > maxProduct22.price) {
        maxProduct22 = products22[i];
    }
}

document.getElementById("task22").innerHTML =
    `Highest Priced Product: ${maxProduct22.name}<br>
     Price: ${maxProduct22.price}`;


let prices23 = [1000, 2000, 3000, 4000];

let total23 = 0;

for (let i = 0; i < prices23.length; i++) {
    total23 += prices23[i];
}

let average23 = total23 / prices23.length;

document.getElementById("task23").innerHTML =
    `Average Price: ${average23}`;


let cart24 = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

let totalQuantity24 = 0;
let cartValue24 = 0;

let output24 = `
<table border="1">
<tr>
<th>Product</th>
<th>Price</th>
<th>Quantity</th>
<th>Total</th>
</tr>
`;

for (let i = 0; i < cart24.length; i++) {

    let itemTotal =
        cart24[i].price * cart24[i].quantity;

    totalQuantity24 += cart24[i].quantity;
    cartValue24 += itemTotal;

    output24 += `
    <tr>
    <td>${cart24[i].name}</td>
    <td>${cart24[i].price}</td>
    <td>${cart24[i].quantity}</td>
    <td>${itemTotal}</td>
    </tr>
    `;
}

output24 += "</table>";

if (cartValue24 > 5000) {
    output24 += "<p>Free delivery</p>";
}

output24 += `
<p>Total Quantity: ${totalQuantity24}</p>
<p>Cart Value: ${cartValue24}</p>
`;

document.getElementById("task24").innerHTML = output24;


let products25 = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Mobile", price: 20000, category: "Electronics" },
    { name: "Shirt", price: 1000, category: "Clothing" },
    { name: "Jeans", price: 2000, category: "Clothing" }
];

let output25 = `
<table border="1">
<tr>
<th>Product</th>
<th>Category</th>
<th>Original Price</th>
<th>Discount</th>
<th>Final Price</th>
</tr>
`;

for (let i = 0; i < products25.length; i++) {

    let discountPercent = 0;

    if (products25[i].category === "Electronics") {
        discountPercent = 10;
    }

    if (products25[i].category === "Clothing") {
        discountPercent = 5;
    }

    let discount =
        products25[i].price * discountPercent / 100;

    let finalPrice =
        products25[i].price - discount;

    output25 += `
    <tr>
    <td>${products25[i].name}</td>
    <td>${products25[i].category}</td>
    <td>${products25[i].price}</td>
    <td>${discountPercent}%</td>
    <td>${finalPrice}</td>
    </tr>
    `;
}

output25 += "</table>";

document.getElementById("task25").innerHTML = output25;