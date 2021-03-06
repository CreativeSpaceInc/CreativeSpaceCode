import axios from "axios";

export default {
  // Gets session Id
  checkSessionId: function() {
    return axios.get("/api/session");
  },
  // Gets all artists
  getArtists: function() {
    return axios.get("/api/artists");
  },
  // Gets the artist with the given id
  getArtist: function(id) {
    return axios.get("/api/artists/" + id);
  },
  // Gets the artist with the given username
  getArtistId: function(username) {
    return axios.get("/api/artists/getid/" + username);
  },
  // Deletes the artist with the given id
  deleteArtist: function(id) {
    return axios.delete("/api/artists/" + id);
  },
  // Saves an artist to the database
  saveArtist: function(artistData) {
    return axios.post("/api/artists", artistData);
  },
  // Saves an artist to the database
  login: function(artistData) {
    return axios.post("/api/artists/login", artistData);
  },
  // Logout artist
  logout: function() {
    return axios.get("/api/artists/logout");
  },

  // Save a creation
  saveCreation: function(creationData) {
    return axios.post("/api/creations", creationData);
  }

};
