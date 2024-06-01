// Show the button when the page is scrolled down
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20|| document.documentElement.scrollTop > 20) {
	document.getElementById("back-to-top").style.display = "block";
  } else {
	document.getElementById("back-to-top").style.display = "none";
  }
}

// Smooth scroll to the top when the button is clicked
document.getElementById("back-to-top").addEventListener("click", function() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
});