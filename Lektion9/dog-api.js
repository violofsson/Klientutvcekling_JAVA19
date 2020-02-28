$(document).ready(function() {
  $("#fetch-dog").click(function(e) {
    $.getJSON("https://dog.ceo/api/breeds/image/random", function(response) {
      console.log(response.message);
      console.log(response.status);
      let $photo = $("#dog-photo");
      $photo.attr("src", response.message);
      $photo.attr("alt", "En duktig vovve");
    });
  });
});
