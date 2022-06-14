/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
//defination of all global variables
const navList = document.getElementById("navbar__list");
const sectionOne = document.getElementById("section1");
const sectionTwo = document.getElementById("section2");
const sectionThree = document.getElementById("section3");
const sectionFour = document.getElementById("section4");
const landingPage = document.getElementById("main");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// created an array and to create the list in the empty nav bar

const sections = Array.from(document.getElementsByTagName("section"));
let numberOfLoop = 1;

for (section of sections) {
  const listItem = document.createElement("li");
  const listItemLink = document.createElement("a");
  listItemLink.classList.add("menu__link");
  // use the section data-nav to fill the <a> tag
  listItemLink.textContent = section.dataset.nav;
  listItemLink.setAttribute("id", "section_" + numberOfLoop);
  numberOfLoop++;
  listItem.appendChild(listItemLink);
  navList.appendChild(listItem);
}

//
//to know the position o a page is in the bowser
function activeViewing(item) {
  let viewValue = item.getBoundingClientRect();
  return (
    viewValue.top >= -300 &&
    viewValue.left >= 0 &&
    viewValue.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    viewValue.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}

// added a scollintoiew function to enable it scoll of the particular section clicked on in the nav
const sectionId = document.querySelectorAll("a");
sectionId.forEach((ids, index) => {
  ids.addEventListener("click", function (e) {
    e.preventDefault();
    sections[index].scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
    sections[index].classList.add("your-active-class");
  });
});

/**
 * End Main Functions
 * Begin Events¬¬¬¬
 *
 */

// Build menu

//  this add a class to any section that is in view

window.addEventListener(
  "scroll",
  function (evt) {
    let start = document.querySelectorAll("section");
    start.forEach((item, index) => {
      if (activeViewing(item)) {
        item.classList.add("your-active-class");
        sectionId[index].classList.add("nav-active-class");
      } else {
        item.classList.remove("your-active-class");
        sectionId[index].classList.remove("nav-active-class");
      }
    });
  },
  false
);
// Set sections as active
