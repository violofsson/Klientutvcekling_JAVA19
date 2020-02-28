let users = document.getElementById("users");
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(json => {
    for (value of json) {
      users.innerHTML += "<li>" + value.name + "</li>";
    }
  });
