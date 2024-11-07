// Responsive Navigation
function openNav() {
  var x = document.getElementById("myNavBar");
  if (x.className === "nav-list") {
    x.className += " responsive";
  } else {
    x.className = "nav-list";
  }
}
