function openNav() {
  var mobileLinkList = document.getElementById("mobile-link-list");
  
  if (mobileLinkList.style.display === "block") {
    mobileLinkList.style.display = "none";
  } else {
    mobileLinkList.style.display = "block";
    mobileLinkList.style.paddingTop = "35px";
    mobileLinkList.style.textAlign = "right";
  }
}