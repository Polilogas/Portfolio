/* ~~~~~~~~~~ NAVIGATION BAR ~~~~~~~~~~ */

// Get the height of the text element
var logo = document.getElementById("logo").offsetHeight;

// Set the height of the iframe to match the text height
var navigationFrame = document.getElementById("navigation-iframe");
navigationFrame.style.height = logo + "px";



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
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on to open the tab on page load
document.getElementById("defaultOpen").click();