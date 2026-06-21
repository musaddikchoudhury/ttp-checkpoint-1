// ============================================================
// PART 3 — DOM Manipulation
//
// Instructions:
//   - Write all your JavaScript here
//   - Open index.html in Live Server to test
//   - Do not edit index.html
//   - Answer EXPLAIN prompts as comments directly below each one
// ============================================================


// ------------------------------------------------------------
// SECTION A — Selecting Elements
// ------------------------------------------------------------
console.log("[ SECTION A — Selecting Elements ]")

// A1.
// Use getElementById to select the following elements.
// Look at index.html to find each element's id.
// Store each in its own variable and log all of them.
//
//   the h1
//   the p that shows the page status
//   the unordered list
const pageTitle = document.getElementById("page-title");
const statusText = document.getElementById("status-text");
const list = document.getElementById("item-list");

console.log(pageTitle);
console.log(statusText);
console.log(list);

// A2.
// Use querySelector to select the following elements.
// Store each in its own variable and log all of them.
//
//   the h2 — select it by its tag name
//   the "Toggle Highlight" button — select it by its id (look at index.html to find it)
//   a list item — select it by its class (look at index.html to find the class name)
const h2 = document.querySelector("h2");
const toggleButton = document.querySelector("#toggle-highlight");
const listItem = document.querySelector(".list-item");

console.log(h2);
console.log(toggleButton);
console.log(listItem);

// A3.
// Use querySelectorAll to select all elements with the class "list-item".
// Store the result in a variable and log it.
const allListItems = document.querySelectorAll(".list-item");
console.log(allListItems);

// A4.
// Use querySelectorAll to select all elements with the class "list-item".
// Loop over the result and log the text content of each one.
//
// Note: the result is a NodeList, not a plain array.
allListItems.forEach(item => {
  console.log(item.textContent);
});

// A5.
// EXPLAIN: What is the difference between getElementById and querySelector?
//          What does querySelectorAll return?
//          How is that different from a regular array?
//
//          answer: getElementById selects ONE element by its id.
// querySelector uses CSS selectors and returns the FIRST match.
//
// querySelectorAll returns a NodeList (all matches).
// A NodeList looks like an array but isn’t a real array,
// so it doesn’t have full array methods like map/filter.


// ------------------------------------------------------------
// SECTION B — Reading and Changing the DOM
// ------------------------------------------------------------
console.log("\n[ SECTION B — Reading and Changing the DOM ]")

// B1.
// Select the h1 with the id "main-heading" and log its text content.
const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.textContent);

// B2.
// Select the p with the id "subtitle" and change its text to "Page loaded successfully."
// This should happen as soon as the page loads — not on a click.
const subtitle = document.getElementById("subtitle");
subtitle.textContent = "Page loaded successfully.";

// B3.
// Select the p with the id "output-text" and change its text to anything you choose.
const outputText = document.getElementById("output-text");
outputText.textContent = "This is my custom message.";

// B4.
// Select the div with the id "output-box" and give it a background color of your choice.
// Do this with JavaScript — not by editing the CSS file.
const outputBox = document.getElementById("output-box");
outputBox.style.backgroundColor = "lightblue";

// B5.
// EXPLAIN: What is textContent?
//          How is it different from innerHTML?
//          When would using innerHTML be risky?
//
//          answer: textContent is used to get or change only the text inside an element.
// innerHTML does the same thing but also allows HTML tags to be included and rendered.
// innerHTML is riskier because if you insert untrusted input, it can execute unwanted or malicious code (XSS).


// ------------------------------------------------------------
// SECTION C — Responding to Events
// ------------------------------------------------------------
console.log("\n[ SECTION C — Responding to Events ]")

// C1.
// Add a click listener to the button with the id "change-btn".
// When clicked, change the text of the h1 with the id "main-heading" to any text you choose.
const changeBtn = document.getElementById("change-btn");
const mainHeading = document.getElementById("main-heading");

changeBtn.addEventListener("click", () => {
  mainHeading.textContent = "New Heading Text";
});

// C2.
// Add a click listener to the button with the id "toggle-btn".
// When clicked, toggle the class "highlighted" on the p with the id "output-text".
// Add it if it is not there. Remove it if it is.
const toggleBtn = document.getElementById("toggle-btn");
const outputText = document.getElementById("output-text");

toggleBtn.addEventListener("click", () => {
  outputText.classList.toggle("highlighted");
});

// C3.
// Select the h1 with the id "main-heading" and add the class "active" to it.
// Log the element's class list to confirm the class is there.
//
// Then select one of the list items that already has the class "list-item".
// Remove that class from it.
// Log its class list to confirm the class is gone.
const mainHeading = document.getElementById("main-heading");
mainHeading.classList.add("active");
console.log(mainHeading.classList);

const listItem = document.querySelector(".list-item");
listItem.classList.remove("list-item");
console.log(listItem.classList);

// C4.
// EXPLAIN: What is an event listener?
//          Why can't you write the code outside of a function
//          and expect it to run when the button is clicked?
//
//          answer: An event listener waits for a specific event, like a click, and then runs a function.
// You can't run the code outside a function because it would execute immediately when the page loads,
// not when the user actually clicks the button.


// C5.
// EXPLAIN: What does classList.toggle do?
//          What does classList.add do? What does classList.remove do?
//          How are they different from setting element.className directly?
//
//          answer: classList.toggle adds a class if it’s missing and removes it if it’s there.
// classList.add adds a class, and classList.remove removes it.
// They are better than className because they don’t overwrite other classes.


// ------------------------------------------------------------
// SECTION D — Creating and Adding to the DOM
// ------------------------------------------------------------
console.log("\n[ SECTION D — Creating and Adding to the DOM ]")

// D1.
// Create a new li element.
// Set its text content to any item you choose.
// Give it the class "list-item".
// Append it to the ul with the id "item-list".
const newItem = document.createElement("li");
newItem.textContent = "New Item";
newItem.classList.add("list-item");

const list = document.getElementById("item-list");
list.appendChild(newItem);


// D2.
// Add a click listener to the button with the id "add-btn".
// When clicked:
//   - Read the current value from the input with the id "item-input"
//   - Create a new li element and set its text to that value
//   - Give it the class "list-item"
//   - Append it to the ul with the id "item-list"
//   - Clear the input field after
const addBtn = document.getElementById("add-btn");
const input = document.getElementById("item-input");
const list = document.getElementById("item-list");

addBtn.addEventListener("click", () => {
  const value = input.value;

  const newItem = document.createElement("li");
  newItem.textContent = value;
  newItem.classList.add("list-item");

  list.appendChild(newItem);

  input.value = "";
});

// D3.
// Select the p with the id "output-text" and remove it from the page entirely.
// After this runs, the element should no longer be visible.
const outputText = document.getElementById("output-text");
outputText.remove();

// D4.
// EXPLAIN: What does createElement do?
//          What does appendChild do? What does remove() do?
//          When does the newly created element actually appear on the page?
//
//          answer: createElement makes a new HTML element in memory.
// appendChild adds that element to the DOM so it appears on the page. remove deletes an element from the DOM completely.
// The element appears on the page only after it is appended to the DOM.
