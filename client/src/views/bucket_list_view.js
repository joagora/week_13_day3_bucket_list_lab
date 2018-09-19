const PubSub = require('../helpers/pub_sub.js');

const BucketListView = function(container) {
  this.container = container;
}

BucketListView.prototype.bindEvents = function() {
  PubSub.subscribe('Activities:all-data-ready', (event) => {
    this.render(event.detail);
  })
}

BucketListView.prototype.render = function(allItems) {
  this.container.textContent = "";
  this.createUls(allItems);


}

BucketListView.prototype.createUls = function(bucketListItems) {
  bucketListItems.forEach((item) => {
    const bucketListUl = document.createElement('ul');
    this.container.appendChild(bucketListUl);

    const activityLi = document.createElement('li');
    activityLi.textContent = item.activity;
    bucketListUl.appendChild(activityLi);

    const locationLi = document.createElement('li');
    locationLi.textContent = item.location;
    bucketListUl.appendChild(locationLi);

    const completedLi = document.createElement('li');
    completedLi.textContent = item.completed;
    bucketListUl.appendChild(completedLi);

    this.createDeleteButton(item._id);
  })
}

BucketListView.prototype.createDeleteButton = function(id) {
  const deleteButton = document.createElement('button');
  this.container.appendChild(deleteButton);
  deleteButton.value = id;
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener('click', (event) => {
    PubSub.publish('BucketListView:delete-clicked', id);

  })
}

module.exports = BucketListView;
