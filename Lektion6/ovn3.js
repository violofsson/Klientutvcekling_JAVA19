let minutes = Number(prompt("Ange antal minuter per månad:"));
let minutePrice = Number(prompt("Ange minutpris:"));
let finalPrice = minutes * minutePrice;
alert("Den totala kostnaden är " + finalPrice + " kr per månad");