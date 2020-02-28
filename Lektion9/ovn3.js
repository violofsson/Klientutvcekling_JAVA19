let userCards = document.getElementById("users");
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(json => {
    for (user of json) {
      showUser(user);
    }
  });

function showUser(user) {
  let address = user.address;
  userCards.innerHTML +=
    '<section class="user-entry"><h2>' +
    user.name +
    "</h2>" +
    "<address>" +
    address.street +
    "<br/>" +
    address.suite +
    "<br/>" +
    address.zipcode +
    "<br/>" +
    address.city +
    "</address></section>";
}
