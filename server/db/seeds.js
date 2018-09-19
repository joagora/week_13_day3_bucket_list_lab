use bucket_list;
db.dropDatabase();

db.bucket_list_activities.insertMany([
  {
    activity: "Sky Diving",
    completed: "yes",
    location: "Venezuela"
  },
  {
    activity: "Kiss a shark",
    completed: "no",
    location: "Australia"
  },
  {
    activity: "Rodeo",
    completed: "no",
    location: "Texas"
  }
]);
