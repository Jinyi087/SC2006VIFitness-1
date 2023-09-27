import http from "../http-common.js";

// GET all users
const getAll = async () => {
  return http.get("/users");
};

//GET user by username
const get = async (username) => {
  return http.get(`/user/${username}`);
};

//GET user by gmail in google_data
const getByGmail = async (gmail) => {
  return http.get(`/user/googledata/${gmail}`);
};

//GET user by Strava athlete id
const getByStravaID = async (id) => {
  return http.get(`/user/stravadata/${id}`);
};

//POST user by username and password
const create = async (data) => {
  return http.post(`/post`, data);
};

//POST user by register with google
const createByGoogle = async (data) => {
  return http.post("/post/byGoogle", data);
};

//POST user by register with Strava
const createByStrava = async (data) => {
  return http.post("/post/byStrava", data);
};

const APIDataService = {
  getAll,
  get,
  getByGmail,
  getByStravaID,
  create,
  createByGoogle,
  createByStrava,
};

export default APIDataService;
