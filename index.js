//Grabbing DOM Elements
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navLinks");
const placeHolder = document.querySelector(".placeHolder");

hamburger.addEventListener("click", (e) => {
  const placeHolderP = placeHolder.querySelector("p");
  if (navLinks.style.display !== "flex") {
    navLinks.style.display = "flex";
  } else if (navLinks.style.display === "flex") {
    //Instead of setting display:none
    //Removing the "style" attribute
    //which was set by JavaScript INLINE !!!!!
    navLinks.removeAttribute("style");
  }
});

//Toggling Issue is solved by his link below
//https://www.sitepoint.com/community/t/responsive-design-problem-showing-hiding-with-media-query/23371
