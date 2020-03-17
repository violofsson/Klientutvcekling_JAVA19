const processedOrder = JSON.parse(localStorage.getItem('shoppingCart'));

let orderEntries = document.getElementById('order-entries');
let totalPrice = 0;

processedOrder.forEach(orderItem => {
    orderEntries.innerHTML +=
        `<tr>
        <td> <img src="${orderItem.img}" width="32px" height="32px"  alt="${orderItem.brand} ${orderItem.model}"></td>
        <td> ${orderItem.brand} ${orderItem.model} ${orderItem.memory} ${orderItem.color} </td>
        <td> ${orderItem.quantity} st </td>
        <td> ${orderItem.price} kr </td> 
    </tr>
    `;
    totalPrice += Number(orderItem.quantity) * Number(orderItem.price);
});

let totalPriceLabel = document.getElementById('total-order-amount');
totalPriceLabel.innerHTML += `${totalPrice} kr`;

localStorage.clear();