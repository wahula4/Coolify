// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";
// Helper Functions (in this case the only one is runQuery)
const helpers = {

  runQuery: function(location) {
    var queryURL = "http://api.urbandictionary.com/v0/define?term=" + location;
    return axios.get(queryURL).then(function(response) {
      if (response) {
        if (response.data.list.length  < 1) {
          return "No results found!"
        } else {
          return response.data.list[0].definition;
          //  + "Example: " + response.data.list[0].example;
        }
      }
    });
  },

  getHistory() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postHistory(location) {
    return axios.post("/api", { location: location });
  }

};
// We export the helpers function (which contains getGithubInfo)
export default helpers;
