<form id="project-details-form">
  <label for="project-type">Project Type:</label>
  <select id="project-type">
    <option value="residential">Residential</option>
    <option value="commercial">Commercial</option>
    <option value="industrial">Industrial</option>
  </select>

  <label for="project-location">Project Location:</label>
  <input type="text" id="project-location" placeholder="Enter project location">

  <label for="project-timeline">Project Timeline (in months):</label>
  <input type="number" id="project-timeline" placeholder="Enter project timeline in months">

  <button type="submit">Get Cost Estimate</button>
</form>


// Get references to the HTML elements
const form = document.querySelector('#project-details-form');
const nameInput = document.querySelector('#project-name');
const typeInput = document.querySelector('#project-type');
const sizeInput = document.querySelector('#project-size');
const submitButton = document.querySelector('#submit-button');

// Add an event listener to the form's submit button
submitButton.addEventListener('click', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values from the input fields
  const projectName = nameInput.value;
  const projectType = typeInput.value;
  const projectSize = parseFloat(sizeInput.value);

  // Call the estimateProjectCost() function to calculate the project cost
  const estimatedCost = estimateProjectCost(projectType, projectSize);

  // Display the estimated cost to the user
  alert(`The estimated cost for ${projectName} is $${estimatedCost}.`);
});
