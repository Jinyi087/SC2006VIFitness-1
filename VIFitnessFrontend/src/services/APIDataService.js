import { data } from "autoprefixer";
import http from "../http-common.js";

// GET all users
const getAll = async () => {
  return http.get("/users");
};

//GET user by username
const get = async (username) => {
  return http.get(`/user/${username}`);
};

//GET user by email
const getByEmail = async (email) => {
  return http.get(`/user/getByEmail/${email}`);
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

//POST connect to google with existing
const connectToGoogle = async (data) => {
  return http.post(`connectGoogle/${data.email}`, data);
};

//POST user by register with Strava
const createByStrava = async (data) => {
  return http.post("/post/byStrava", data);
};

//POST connect to strava with existing
const connectToStrava = async (data) => {
  return http.post(`connectStrava/${data.email}`, data);
};

//POST user by ticking the exercises
const addingExercise = async (data) => {
  return http.post(`/addExercise/${data.username}`, data);
};

//PATCH limits settings
const updateLimits = async (data) => {
  return http.patch(`/updateLimits/${data.email}`, data);
};

//POST add meal by user email
const addMeal = async (data) => {
  return http.post(`/addMeal/${data.email}`, data);
};

//POST delete meal by user email
const deleteMeal = async (data) => {
  return http.post(`/deleteMeal/${data.email}`, data);
};

//PATCH update user settings by user email
const updateUserSetting = async (data) => {
  return http.patch(`/updateUserSettings/${data.email}`, data);
};

const APIDataService = {
  getAll,
  get,
  getByEmail,
  getByGmail,
  getByStravaID,
  create,
  createByGoogle,
  connectToGoogle,
  createByStrava,
  connectToStrava,
  addingExercise,
  updateLimits,
  addMeal,
  deleteMeal,
  updateUserSetting,
};

export default APIDataService;
