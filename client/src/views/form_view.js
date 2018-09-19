const PubSub = require('../helpers/pub_sub.js');

const FormView = function(formContainer) {
  this.formContainer = formContainer;
}

FormView.prototype.bindEvents = function() {
  this.formContainer.addEventListener('submit', (event) => {
    event.preventDefault();
    const newBucketListEvent = this.createNewBucketListEvent(event.target);
    PubSub.publish('FormView:new-item-ready', newBucketListEvent);
  })
}

FormView.prototype.createNewBucketListEvent = function(form) {
  const activity = form.activity.value;
  const location = form.location.value;
  const checkboxes = this.grabCheckboxes(form);
  const checkedCheckbox = this.getCheckedCheckbox(checkboxes)
  const completed = checkedCheckbox[0].value;
  const item = {
    activity: activity,
    location: location,
    completed: completed
  }
  return item;
}

FormView.prototype.grabCheckboxes = function(form) {
  const checkboxes = document.querySelectorAll('.completed-radio');
  return checkboxes;
}

FormView.prototype.getCheckedCheckbox = function(checkboxes) {
  const checkboxArray = Array.from(checkboxes);
  return checkboxArray.filter( (checkbox) => {
    return checkbox.checked === true;
  })
}
module.exports = FormView;
