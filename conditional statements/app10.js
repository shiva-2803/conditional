let passengerName = prompt("Enter the name: ");

let age = Number(prompt("Enter the age:"));

let distance = Number(prompt("Enter the distance:"));

let busType = Number(prompt(`Enter the bus type
    1. Normal Bus
    2. AC Bus
    3. Sleeper`));

let ticketFare;
let discount;
let finalFare;

switch (busType) {
    case 1:
        ticketFare = distance * 2;
        break;

    case 2:
        ticketFare = distance * 4;
        break;

    case 3:
        ticketFare = distance * 5;
        break;

    default:
        ticketFare = 0;
        break;
}

if (busType == 1) {
    busType = "Normal Bus";
}
else if (busType == 2) {
    busType = "AC Bus";
}
else if (busType == 3) {
    busType = "Sleeper";
}
else {
    busType = "Invalid";
}

if (age < 5) {
    discount = ticketFare;
}
else if (age >= 5 && age <= 17) {
    discount = ticketFare * 50 / 100;
}
else if (age >= 18 && age <= 59) {
    discount = 0;
}
else {
    discount = ticketFare * 30 / 100;
}

finalFare = ticketFare - discount;

document.getElementById("bus").innerHTML =
    `<h1>Bus Ticket Reservation</h1>
    Passenger Name: ${passengerName}<br>
    Bus Type: ${busType}<br>
    Ticket Fare: ₹${ticketFare}<br>
    Discount: ₹${discount}<br>
    Final Fare: ₹${finalFare}`;