/* ~~~~~~~~~~ NAVIGATION BAR ~~~~~~~~~~ */

// Updates the background color of the header whenever the page is scrolled down.
// get the header element
const header = document.querySelector('header');

// listen for the scroll event on the window
window.addEventListener('scroll', function() {
  // get the current scroll position of the page
  const scrollPosition = window.scrollY;

  // set the background color of the header based on the scroll position
  if (scrollPosition > 0) {
    header.style.backgroundColor = '#101B23';
	header.style.boxShadow = "0px 1px 5px 0px rgb(0 0 0 / 60%)";
  } else {
    header.style.backgroundColor = '#18222A';
	header.style.boxShadow = "none";
  }
});


// Updates the active link based on users current location.
// Get all the section elements
const sections = document.querySelectorAll("section");

// Add a scroll event listener to the window object
window.addEventListener("scroll", function() {
  // Get the current scroll position
  const currentScroll = window.pageYOffset;

  // Loop through the sections to find the current section
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];

    // Get the top and bottom position of the section
    const sectionTop = section.offsetTop - 50; // subtract 50 to account for the header height
    const sectionBottom = sectionTop + section.offsetHeight;

    // Check if the current scroll position is inside the section
    if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
      // Set the active link in the navigation menu
      document.querySelector("#nav-container a.active").classList.remove("active");
      document.querySelector(`#nav-container a[href="#${section.id}"]`).classList.add("active");
      break;
    }
  }
});







/* ~~~~~~~~~~ BUTTON ~~~~~~~~~~ */

// Get all elements with the "btn" class
var buttons = document.getElementsByClassName("btn");

// Loop through the buttons
for (var i = 0; i < buttons.length; i++) {
  // Create the SVG element
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 166 45");

  // Create the rectangle element
  var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", "0");
  rect.setAttribute("y", "0");
  rect.setAttribute("fill", "none");
  rect.setAttribute("width", "166");
  rect.setAttribute("height", "45");

  // Add the rectangle to the SVG element
  svg.appendChild(rect);

  // Add the SVG element to the button
  buttons[i].appendChild(svg);
}



/* ~~~~~~~~~~ TABS ~~~~~~~~~~ */

// This is for the tabs in projects section
function openProject(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on to open the tab on page load
document.getElementById("defaultOpen").click();



/* ~~~~~~~~~~ FORM ~~~~~~~~~~ */
function onSubmit() {
	// your JavaScript code here
	document.querySelector(".submited-text").style.display = "flex";
	document.querySelector(".submited-text").classList.add("fadeIn");

	// After 5 seconds, remove the fadeIn class to start the fade out animation
	setTimeout(() => {
	  document.querySelector(".submited-text").classList.remove('fadeIn');
	  document.querySelector(".submited-text").classList.add("fadeOut");
	  document.getElementById("contact-form").reset();
	  
	  setTimeout(() => {
		document.querySelector(".submited-text").style.display = "none";
		document.querySelector(".submited-text").classList.remove('fadeOut');
		}, 1000);
	  
	}, 5000);



	/*window.location.href = "#home";*/
	return false; // prevent the form from submitting normally
}