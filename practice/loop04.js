let orders = [
    { name: "Laptop", quantity: 2, price: 50000 },
    { name: "Mouse", quantity: 3, price: 1000 },
    { name: "Keyboard", quantity: 1, price: 2000 }
];
let order = document.getElementById("order")
for(let i=0;i<orders.length;i++){
    let total=orders[i].price*orders[i].quantity;
    order.innerHTML+=`
    <tr>
    <td>${i+1}</td>
    <td>${orders[i].name}</td>
    <td>${orders[i].quantity}</td>
    <td>${orders[i].price}</td>
    <td>${total}</td>
    </tr>
    `;
}