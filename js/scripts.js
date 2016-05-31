$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var css_input = $("input#css-input").val();
    var p_selector = document.querySelector("p");
    var h1_selector = document.querySelector("h1");

    var el = $('input[name=element]:checked').val();

    if (el === "font-color") {
      p_selector.style.color = css_input;
    }

    if (el === "background") {
      p_selector.style.backgroundColor = css_input;
    }

    if (el === "font") {
      p_selector.style.fontFamily = css_input;
    }

    if (el === "size") {
      if (css_input.substring(css_input.length - 2, css_input.length) === "px", "em") {
        p_selector.style.fontSize = css_input;
      } else {
        parseInt(css_input);
        p_selector.style.fontSize = css_input + "px";
      }
    }

    if (el === "title") {
      $("h1").text(css_input);
    }

    if (el === "body-replace") {
      $("p").text(css_input);
    }

    if (el === "body-add") {
      css_input = " " + css_input;
      $("p").append(css_input);
    }

    if (el === "container") {
      $("#container-toggle").toggleClass("container");
    }

    if (el === "advanced") {
      var element_advanced = css_input.slice(0,css_input.indexOf(","));
      css_input = css_input.slice(css_input.indexOf(",")+1,css_input.length);

      var property_advanced = css_input.slice(0,css_input.indexOf(","));

      var value_advanced = css_input.slice(css_input.indexOf(",")+1,css_input.length);

      $(element_advanced).css(property_advanced, value_advanced);
    }
    event.preventDefault();
  })


})
