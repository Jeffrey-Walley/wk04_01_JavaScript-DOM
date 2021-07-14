// ex01 part 01
let header = document.querySelector("header");
console.log("Header");
console.log(header);

// ex01 part 02
let section = document.querySelector("section");
console.log("Section");
console.log(section);

// ex01 part 03
let currentSection = document.querySelector("section.current");
console.log("Current Section");
console.log(currentSection);

// ex01 part 04
let afterCurrent = currentSection.nextElementSibling;
console.log("After the Current Section");
console.log(afterCurrent);


// ex01 part 05
let myH2 = currentSection.previousElementSibling.firstElementChild;
console.log("My H2");
console.log(myH2)

// ex01 part 06
let myDiv = document.querySelector("h2.highlight").parentElement.parentElement;
console.log("My Div");
console.log(myDiv);

// exo 01 part 07 -- had to Map an array
let sectionsWithH2 = Array.from(document.querySelectorAll("section h2")).map(function(headline) {
    return headline.parentElement;
});
console.log("Sections with H2s");
console.log(sectionsWithH2);