// DECLARING VARIABLES
// Declare variables that will
// store references for
// <input type="button" id="submit-button">,
let tb = document.getElementById("submit-button"); // event-target object
// <input type="text" id="fullname">,
let fn = document.getElementById("fullname");
// <input type="text" id="email">
let em = document.getElementById("email");
// <textarea id="message"></textarea>
let ta = document.getElementById("message");
// Declare variable that will
// store regular expression for email
const emailRegex = new RegExp(
  /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
  "gm"
);
// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
function handleForm() {
  // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS)
  // Declare object that will store the form-data
  let data = {};
  // Declare array that will store the errors
  let errors = [];

  // +-----------+
  // | FULL NAME |
  // +-----------+
  // Check if fullname is not empty.
  // If so:
  // Pass the collected value
  // to your object "data".
  // Otherwise:
  // Create a corresponding error-message
  // and add it to your array "errors".
  // End your conditional here.
  if (fn.value) {
    data.fullName = fn.value;
  } else {
    errors.push("Please fill out the full-name!");
  }

  // +-------+
  // | EMAIL |
  // +-------+
  // Check if email is not empty.
  if (em.value) {
    // Check if email is valid.
    if (emailRegex.test) {
      data.email = em.value;
    } else {
      errors.push("Invalid email! ");
    }
  } else {
    errors.push("No email");
  }

  // If so:
  // Pass the collected value
  // to your object "data".
  // Otherwise:
  // Create a corresponding error-message
  // and add it to your array "errors".
  // End your nested conditional here.
  // Otherwise:
  // Otherwise:
  // Create a corresponding error-message
  // and add it to your array "errors"
  // End your outer conditional here.

  if (ta.value) {
    data.message = ta.value;
  } else {
    errors.push("Please fill out the message!");
  }

  // +---------+
  // | MESSAGE |
  // +---------+
  // Check if message is not empty.
  // If so:
  // Pass the collected value
  // to your object "data".
  // Otherwise:
  // Create a corresponding error-message
  // and add it to your array "errors"
  // End your conditional here.

  // +-----------------+
  // | FEEDBACK/ERRORS |
  // +-----------------+
  // Check if there is anything in array errors
  // If so:
  // Print it in JavaScript console.
  // Otherwise:
  // Print the data in JavaScript console.
  // Clear text-fields
  // End your conditional here.
  if (errors.length === 0) {
    console.log(data);
  } else {
    console.log(errors);
  }

  // Close your function here
}
// Register your form to "click" event.
tb.addEventListener("click", handleForm);
