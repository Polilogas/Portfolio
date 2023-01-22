var originalHTML = {};
var dictionary = {
  "Computer Science Student" : "Φοιτητής Πληροφορικής",
  "+30 694-0783-893" : "694-0783-893",
  "Home" : "Αρχική",
  "About" : "Προφίλ",
  "Projects" : "Έργα",
  "Skills" : "Δεξιότητες",
  "Contact" : "Επικοινωνία",
  "Hi, I am" : "Γειά, είμαι ο",
  "Michail" : "Μιχαήλ",
  "Chourdas" : "Χουρδάς",
  "I'm currently a" : "Είμαι",
  "Computer Science" : "Φοιτητής της Πληροφορικής",
  "student at the" : "στο",
  "Hellenic Open University" : "Ελληνικό Ανοικτό Πανεπιστήμιο",
  "I am located in Greece" : "",
  "and i spend my day-to-day" : "Γράφω κώδικα σε καθημερινή βάση",
  "developing projects." : "και δημιουργώ τα δικά μου πρότζεκτ."
};

/* Get the element that we need to translate */
function translateToGreek() {
  /* Disable the button so it can not be pressed before the page is translated, to prevent the greek text into the originalHTML */
  dasbleButton(true, "greek");
  /* Gets the elements that we need to translate */
  var elements = document.getElementsByClassName("translatable");
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    originalHTML[element.tagName + i] = element.innerHTML;  /* Stores the original HTML */
    var text = element.innerHTML;
    element.innerHTML = translateText(text);  /* Translate the page */
  }

  changeColor("english", "tertiary");
  changeColor("greek", "secondary");
  dasbleButton(false, "english"); /* The page has translated, so now its time to enable the english button */
}

/* Does the translation */
function translateText(text) {
  for (var key in dictionary) {
    text = text.replace(key, dictionary[key]);
  }
  return text;
};

/* Reset the page text */
function resetTranslation() {
  dasbleButton(true, "english");
  var elements = document.getElementsByClassName("translatable");
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.innerHTML = originalHTML[element.tagName + i];
  }

  changeColor("english", "secondary");
  changeColor("greek", "tertiary");
  dasbleButton(false, "greek");
}

function changeColor(elemet, color) {
  var root = document.documentElement;
  var primaryColor = getComputedStyle(root).getPropertyValue("--primary-color");
  var secondaryColor = getComputedStyle(root).getPropertyValue("--secondary-color");
  var tertiaryColor = getComputedStyle(root).getPropertyValue("--tertiary-color");

  if (color === "primary") {
    var elementName = document.getElementById(elemet);
    elementName.style.color = primaryColor;
  }
  else if (color === "secondary") {
    var elementName = document.getElementById(elemet);
    elementName.style.color = secondaryColor;
  }
  else {
    var elementName = document.getElementById(elemet);
    elementName.style.color = tertiaryColor;
  }
}

function dasbleButton(isTrue, buttonName) {
  if (isTrue) {
    if (buttonName === "greek") {
      document.getElementById("greek").style.pointerEvents = "none";
    }
    else {
      document.getElementById("english").style.pointerEvents = "none";
    }
  }
  else {
    if (buttonName === "greek") {
      document.getElementById("greek").style.pointerEvents = "visible";
      document.getElementById("greek").style.cursor = "pointer";
    }
    else {
      document.getElementById("english").style.pointerEvents = "visible";
      document.getElementById("english").style.cursor = "pointer";
    }
  }
}