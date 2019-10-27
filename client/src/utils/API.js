import axios from "axios";

export default {
  // Gets all books
  getEmployees: function () {
    return axios.get("/api/Shop");
  },
  // Gets the book with the given id
  createTask: function (taskData) {
    return axios.post("/api/Task", taskData);
  },
  // Deletes the book with the given id
  getTask: function (ShopId) {
    return axios.post("/api/Task/Find", ShopId);
  },
  // Saves a book to the database
  createUser: function (userData) {
    return axios.post("/api/Shop", userData);
  },
  findUser: function (query) {
    return axios.post("/api/Shop/Login", query);
  },
  onDuty: function (upuse) {
    return axios.put("/api/Shop", upuse)
  },
  updateAhead: function (ahead) {
    return axios.put("/api/Task", ahead)
  },
  updateBehind: function (behind) {
    return axios.put("/api/Task/Behind", behind)
  },
  complete: function (complete) {
    return axios.put("/api/Task/Complete", complete)
  },
  tech: function (ShopId) {
    return axios.post("/api/Task/techtask", ShopId)
  },
  logOut: function (em) {
    return axios.put("/api/Shop/Out", em)
  },
  deleteTask: function () {
    console.log("llllll");
    return axios.post("/api/Task/Delete");
  }
};
