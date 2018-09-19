const FormView = require('./views/form_view.js');
const Activities = require('./models/activities.js');
const BucketListView = require('./views/bucket_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const activities = new Activities();
  activities.bindEvents();
  activities.getData();
  
  const bucketListDiv = document.querySelector('#bucket-list');
  const bucketListView = new BucketListView(bucketListDiv);
  bucketListView.bindEvents();

  const formContainer = document.querySelector('#bucket-list-form');
  const formView = new FormView(formContainer);
  formView.bindEvents();


})
