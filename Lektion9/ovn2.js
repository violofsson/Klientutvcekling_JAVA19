let users = document.getElementById("users");
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(json => {
    for (value of json) {
      users.innerHTML +=
        "<tr><td>" + value.name + "</td><td>" + value.email + "</td></tr>";
    }
  });
