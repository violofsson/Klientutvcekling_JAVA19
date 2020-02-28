$(document).ready(function() {
  $.getJSON("https://randomuser.me/api", function(response) {
    let $results = response.results[0];
    $("#name").text($results.name.first + " " + $results.name.last);
    $("#photo").attr("src", $results.picture.thumbnail);
    $("#age").text($results.dob.age);
    $("#city").text($results.location.city);
    $("#email").attr("href", "mailto:" + $results.email);
  });
});
