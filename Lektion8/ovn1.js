$(document).ready(function() {
  $("#item-input").submit(function(e) {
    e.preventDefault();
    let entered = $("#entered-item").val();
    if (entered != "") {
      $("#shopping-list").append(
        '<li><input type="checkbox" /> <span class="item">' +
          entered +
          '</span> <button class="remove-item">Ta bort</button></li>'
      );
      $("button.remove-item").click(function(e) {
        $(this)
          .parent()
          .remove();
      });
    }
  });
});
