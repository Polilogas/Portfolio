function openNav() {
  var mobileLinkList = document.getElementById("mobile-link-list");
  var headerMiddleLine = document.querySelector(".middle-line");
  var headerTopLine = document.querySelector(".top-line");
  var headerBottomLine = document.querySelector(".bottom-line");
  
  if (mobileLinkList.style.display === "block") {
    mobileLinkList.style.display = "none";
    headerMiddleLine.classList.remove("middle-line-animation-start");
    headerTopLine.classList.remove("top-line-animation-start");
    headerBottomLine.classList.remove("bottom-line-animation-start");
    
  } else {
    mobileLinkList.style.display = "block";
    headerMiddleLine.classList.add("middle-line-animation-start");
    headerTopLine.classList.add("top-line-animation-start");
    headerBottomLine.classList.add("bottom-line-animation-start");
  }
}
