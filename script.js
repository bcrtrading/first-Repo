<form id="project-details-form">
  <label for="project-type">Project Type:</label>
  <select id="project-type">
    <option value="residential">Residential</option>
    <option value="commercial">Commercial</option>
    <option value="industrial">Industrial</option>
  </select>

  <label for="project-size">Project Size:</label>
  <input type="number" id="project-size" placeholder="Enter project size in square feet">

  <button type="submit">Get Cost Estimate</button>
</form>

<script>
  // Get references to the HTML elements
  const form = document.querySelector('#project-details-form');
  const typeInput = document.querySelector('#project-type');
  const sizeInput = document.querySelector('#project-size');

  // Add an event listener to the form's submit button
  form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    ;

    // Get the values from the input fields
    const projectType = typeInput.value;
    const projectSize = parseFloat(sizeInput.value);

    // Call the estimateProjectCost() function to calculate the project cost
    const estimatedCost = estimateProjectCost(projectType, projectSize);

    // Display the estimated cost to the user
    alert(`The estimated cost is $${estimatedCost}.`);
  });
</script>
