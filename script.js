// Change heading
document.getElementById("main-heading").textContent = "Students";

// Change background color
document.querySelector(".container").style.backgroundColor = "#336699";

// Change color of 2nd item
document.querySelectorAll(".student")[1].style.color = "yellow";

// Add a new student
let newStudent = document.createElement("li");
newStudent.textContent = "Popatlal";
newStudent.className = "student";
document.getElementById("student-list").appendChild(newStudent);

// Remove 3rd student
let thirdStudent = document.querySelectorAll(".student")[2];
thirdStudent.parentElement.removeChild(thirdStudent);

// DOM Traversals
let list = document.getElementById("student-list");
console.log("Parent of list:", list.parentElement);
console.log("Children of list:", list.children);
console.log("First student:", list.firstElementChild.textContent);
console.log("Last student:", list.lastElementChild.textContent);
console.log("Next of heading:", document.getElementById("main-heading").nextElementSibling);
console.log("Previous of list:", list.previousElementSibling);
