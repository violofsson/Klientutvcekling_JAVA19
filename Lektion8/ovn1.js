$(document).ready(function() {
  $("#item-input").submit(function(e) {
    e.preventDefault();
    let entered = $("#entered-item");

    if (entered.val() != "") {
      $("#shopping-list").append(
        '<li><input type="checkbox" /> <span class="item">' +
          entered.val() +
          '</span> <button class="remove-item">Ta bort</button></li>'
      );
      entered.val("");
    }
  });

  $("#shopping-list").on("click", "button.remove-item", function(e) {
    $(this)
      .parent()
      .remove();
  });
});
