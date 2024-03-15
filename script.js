$(document).ready(function () {
  console.log("Document is ready");

  // Define click event handler for the button
  $("#btnGetFacts").click(function () {
    // Get the value entered by the user
    let userName = $("#userName").val();
    
    // Call function to generate cool name facts and display them
    $("#coolNameFactsOutput").html(generateCoolNameFacts(userName));
  });
});

// Function to generate cool name facts based on the length of the name
function generateCoolNameFacts(userName) {
  let coolFacts = "";

  // Check if the name is provided
  if (userName.trim() !== "") {
    // Generate a fact based on the length of the name
    coolFacts = "Your name is " + userName.length + " characters long.";
  } else {
    // Handle case when name is not provided
    coolFacts = "Please enter your name!";
  }

  // Return the cool facts
  return coolFacts;
}
