$(document).ready(function() {

  $("button#hello").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Ruff!</li>");

    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    })
  });

  $("button#stop").click(function() {
    $("ul#cat").prepend("<li>Hiss!</li>");
    $("ul#dog").prepend("<li>Bark!</li>");

    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    })
  });


});
