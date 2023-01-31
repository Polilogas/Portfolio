function openNav() {
  var mobileLinkList = document.getElementById("mobile-link-list");
  var headerMiddleLine = document.querySelector(".middle-line");
  var headerTopLine = document.querySelector(".top-line");
  var headerBottomLine = document.querySelector(".bottom-line");
  var navBackground = document.getElementById("mobile-menu-background");
  var logo = document.querySelector(".logoPicture");
  var mobileMenuList = document.getElementById("mobile-menu-list");
  var homeLink = document.querySelector(".home");
  var aboutLink = document.querySelector(".about");
  var projectLink = document.querySelector(".projects");
  var skillsLink = document.querySelector(".skills");
  
  if (mobileLinkList.style.display === "block") {
    // Close the menu
    mobileLinkList.style.display = "none";
    // Remove class when closing
    headerMiddleLine.classList.remove("middle-line-animation-start");
    headerMiddleLine.classList.add("middle-line-animation-reverse");
    headerTopLine.classList.remove("top-line-animation-start");
    headerTopLine.classList.add("top-line-animation-reverse");
    headerBottomLine.classList.remove("bottom-line-animation-start");
    headerBottomLine.classList.add("bottom-line-animation-reverse");
    navBackground.classList.remove("background-animation-start");
    navBackground.classList.add("background-animation-reverse");
    logo.classList.remove("logo-animation-start");
    logo.classList.add("logo-animation-reverse");
    // mobileMenuList.style.display = "none";
    homeLink.classList.remove("home-link-animation-start");
    homeLink.classList.add("home-link-animation-reverse");
    aboutLink.classList.remove("about-link-animation-start");
    aboutLink.classList.add("about-link-animation-reverse");
    projectLink.classList.remove("projects-link-animation-start");
    projectLink.classList.add("projects-link-animation-reverse");
    skillsLink.classList.remove("skills-link-animation-start");
    skillsLink.classList.add("skills-link-animation-reverse");
    
  } else {
    // Open the menu
    mobileLinkList.style.display = "block";
    // Add class when opening
    headerMiddleLine.classList.remove("middle-line-animation-reverse");
    headerMiddleLine.classList.add("middle-line-animation-start");
    headerTopLine.classList.remove("top-line-animation-reverse");
    headerTopLine.classList.add("top-line-animation-start");
    headerBottomLine.classList.remove("bottom-line-animation-reverse");
    headerBottomLine.classList.add("bottom-line-animation-start");
    navBackground.style.display = "flex";
    navBackground.classList.remove("background-animation-reverse");
    navBackground.classList.add("background-animation-start");
    logo.classList.remove("logo-animation-reverse");
    logo.classList.add("logo-animation-start");
    mobileMenuList.style.display = "flex";
    homeLink.classList.remove("home-link-animation-reverse");
    homeLink.classList.add("home-link-animation-start");
    aboutLink.classList.remove("about-link-animation-reverse");
    aboutLink.classList.add("about-link-animation-start");
    projectLink.classList.remove("projects-link-animation-reverse");
    projectLink.classList.add("projects-link-animation-start");
    skillsLink.classList.remove("skills-link-animation-reverse");
    skillsLink.classList.add("skills-link-animation-start");
  }
}
