// app.js
const projectDetailsForm = document.getElementById('project-details-form');

projectDetailsForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const projectType = document.getElementById('project-type').value;
  const projectLocation = document.getElementById('project-location').value;
  const projectTimeline = document.getElementById('project-timeline').value;
  
  const costEstimate = estimateProjectCost(projectType, projectLocation, projectTimeline);
  
  alert(`Your project will cost an estimated $${costEstimate}.`);
});
