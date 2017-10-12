// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";
// Geocoder API
const geocodeAPI = "35e5548c618555b1a43eb4759d26b260";
// Helper Functions (in this case the only one is runQuery)
const helpers = {
  // runQuery: (location) => {
  //   console.log(location);
  //   // Figure out the geolocation
  //   const queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;
  //   return axios.get(queryURL).then((response) => {
  //     console.log(response);
  //     return response.data.results[0].formatted;
  //   });
  // }

  runQuery: function(location) {

    // console.log("runQuery word: " + location);

    // Figure out the geolocation
    var queryURL = "http://api.urbandictionary.com/v0/define?term=" + location;
    // console.log(queryURL)
    return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result's formatted address property
      if (response) {
        // console.log("from helpers.js: ");
        // console.log(response.data.list[0].definition);
        if (response.data.list.length  < 1) {
          return "No results found!"
        } else {
          return "Word: " + response.data.list[0].word + "Definition: " + response.data.list[0].definition + "\nExample: " + response.data.list[0].example;  
        }
      }
      // If we don't get any results, return an empty string
      return "";
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
