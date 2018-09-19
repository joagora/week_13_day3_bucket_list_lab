const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Activities = function() {
  this.url = 'http://localhost:3000/api/bucket_list';
  this.request = new Request(this.url);
}

Activities.prototype.bindEvents = function() {
  PubSub.subscribe('FormView:new-item-ready', (event) => {
    this.postBucketListItem(event.detail);
  })
}

Activities.prototype.getData = function() {
  this.request.get()
    .then((bucketListItems) => {
      PubSub.publish('Activities:all-data-ready', bucketListItems);
    })
    .catch(console.error);
}

Activities.prototype.postBucketListItem = function(bucketListItem) {
  this.request.post(bucketListItem)
    .then((bucketListItems) =>{
      PubSub.publish('Activities:all-data-ready', bucketListItems);
    })
    .catch(console.error);
}

module.exports = Activities;
