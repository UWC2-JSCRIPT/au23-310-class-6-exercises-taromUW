$(document).ready(function() {
  $("#cat").click(function() {
    alert("meow!");
  });

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
  $('#more-info').click(function(e) {
      alert("Here's some info");
      e.preventDefault();
  });

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
  $('#dog').click(function(e) {
      e.stopPropagation();
      alert('Bow now!');
  });
});

