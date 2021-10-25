// menu toggle
window.addEventListener("click", function (event) {
  if (
    document.getElementById("checkbox").checked == true &&
    event.target === document.getElementById("checkbox")
  ) {
    document.getElementById("checkbox").checked = true;
  } else if (
    event.target != document.getElementById("checkbox") ||
    event.target != document.getElementById("menu")
  ) {
    document.getElementById("checkbox").checked = false;
  }
});
