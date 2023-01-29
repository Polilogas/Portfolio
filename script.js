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
    // Remove class when closing
    mobileLinkList.style.display = "none";
    headerMiddleLine.classList.remove("middle-line-animation-start");
    headerTopLine.classList.remove("top-line-animation-start");
    headerBottomLine.classList.remove("bottom-line-animation-start");
    navBackground.style.display = "none";
    logo.classList.remove("logo-animation-start");
    mobileMenuList.style.display = "none";
    homeLink.classList.remove("home-link-animation-start");
    
  } else {
    // Add class when opening
    mobileLinkList.style.display = "block";
    headerMiddleLine.classList.add("middle-line-animation-start");
    headerTopLine.classList.add("top-line-animation-start");
    headerBottomLine.classList.add("bottom-line-animation-start");
    navBackground.style.display = "flex";
    navBackground.classList.add("background-animation-start");
    logo.classList.add("logo-animation-start");
    mobileMenuList.style.display = "flex";
    homeLink.classList.add("home-link-animation-start");
    aboutLink.classList.add("about-link-animation-start");
    projectLink.classList.add("projects-link-animation-start");
    skillsLink.classList.add("skills-link-animation-start");
  }
}
