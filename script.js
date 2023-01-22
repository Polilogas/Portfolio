/* this one change the button only when is pressed
function updateNavigation() {
  // Get the current location of the user
  var currentLocation = window.location.hash;

  // Get all the navigation buttons
  var navigationButtons = document.querySelectorAll('#navigation button');

  // Loop through the navigation buttons
  for (var i = 0; i < navigationButtons.length; i++) {
    var button = navigationButtons[i];

    // Check if the button matches the current location
    if (button.parentNode.getAttribute('href') === currentLocation) {
      // Add the active class to the button
      button.classList.add('active');
    } else {
      // Remove the active class from the button
      button.classList.remove('active');
    }
  }
}

window.addEventListener('hashchange', updateNavigation);
*/

/* this one change the button based on the current location. you don't have to press the button */
function updateActiveButton() {
  // Get the current position of the user on the page
  var currentPosition = window.pageYOffset;

  // Get the positions of each section on the page
  var headerPosition = document.querySelector('#header').offsetTop;
  var aboutPosition = document.querySelector('#about').offsetTop;
  var projectsPosition = document.querySelector('#projects').offsetTop;
  var skillsPosition = document.querySelector('#skills').offsetTop;
  var contactPosition = document.querySelector('#contact').offsetTop;

  // Get all the navigation buttons
  var navigationButtons = document.querySelectorAll('#navigation button');

  // Loop through the navigation buttons
  for (var i = 0; i < navigationButtons.length; i++) {
    var button = navigationButtons[i];

    // Check if the current position is within the range of the section corresponding to the button
    if (currentPosition >= headerPosition && currentPosition < aboutPosition) {
      button.id === 'home-section' ? button.classList.add('active') : button.classList.remove('active');
    } else if (currentPosition >= aboutPosition && currentPosition < projectsPosition) {
      button.id === 'about-section' ? button.classList.add('active') : button.classList.remove('active');
    } else if (currentPosition >= projectsPosition && currentPosition < skillsPosition) {
      button.id === 'works-section' ? button.classList.add('active') : button.classList.remove('active');
    } else if (currentPosition >= skillsPosition && currentPosition < contactPosition) {
      button.id === 'skills-section' ? button.classList.add('active') : button.classList.remove('active');
    } else if (currentPosition >= contactPosition) {
      button.id === 'contact-section' ? button.classList.add('active') : button.classList.remove('active');
    }
  }
}

window.addEventListener('scroll', updateActiveButton);
