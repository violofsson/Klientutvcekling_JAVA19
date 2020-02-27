$(document).ready(function() {
  let $passwordField = $("#password-field");
  let $showPassword = $("#show-password");

  $showPassword.change(function(e) {
    $passwordField.attr(
      "type",
      this.checked ? "text" : "password"
    );
  });
});
