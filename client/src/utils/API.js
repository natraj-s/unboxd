import axios from "axios";
const HOMEPAGEURL = "https://newsapi.org/v2/top-headlines?country=us";
const APIATTACH = "&apiKey="
const APIKEY = "3f3246429d2a4fa39d3895c131ed7cad";

export default {
    getAll: function() {
        return axios.get(HOMEPAGEURL + APIATTACH + APIKEY) + 
            this.getEntertainment() + this.getSports() +
            this.getScience() + this.getHealth() + this.getTechnology() +
            this.getBusiness() + this.getVideoGames();
    },

    getHomepage: function() {
        return axios.get(HOMEPAGEURL + APIATTACH + APIKEY);
    },

    getEntertainment: function() {
        let CATEGORY = "&category=entertainment";
        console.log("entertian me");
        return axios.get(HOMEPAGEURL + CATEGORY + APIATTACH + APIKEY);
    },

    getSports: function() {
        let URL = "https://newsapi.org/v2/top-headlines?sources=bbc-sport";
        return axios.get(URL + APIATTACH + APIKEY);
    },

    getScience: function() {
        let CATEGORY = "&category=science";
        return axios.get(HOMEPAGEURL + CATEGORY + APIATTACH + APIKEY);
    },

    getHealth: function() {
        let CATEGORY = "&category=health";
        return axios.get(HOMEPAGEURL + CATEGORY + APIATTACH + APIKEY);
    },

    getTechnology: function() {
        let CATEGORY = "&category=technology";
        return axios.get(HOMEPAGEURL + CATEGORY + APIATTACH + APIKEY);
    },

    getBusiness: function() {
        let CATEGORY = "&category=business";
        return axios.get(HOMEPAGEURL + CATEGORY + APIATTACH + APIKEY);
    },

    getVideoGames: function() {
        let URL = "https://newsapi.org/v2/everything?sources=polygon";
        return axios.get(URL + APIATTACH + APIKEY);
    },

    store: function(data) {
        return axios.post("/api/unboxd/", data);
    },

    createUser: function(data) {
        console.log("data from API.js ", data);
        // return axios.post("/api/unboxd/signup", data);
        return axios.post("/api/unboxd/signup", data)
    },

    handleLogin: function(data) {
        console.log("data from API.js ", data);
        // return axios.post("/api/unboxd/signup", data);
        return axios.post("/api/unboxd/signin", data)
    },

    findUser: function(username) {
        return axios.get("/api/unboxd/finduser/" + username);
    },

    getLatest: function(category) {
        return axios.get("/api/unboxd/breaking/"+ category);
    },

    getOldest: function(category) {
        return axios.get("/api/unboxd/aged/" + category);
    },

    ifExists: function(title) {
        return axios.get("/api/unboxd/articles/" + title);
    },

    updateClicks: function(title, clicks) {
        return axios.put("api/unboxd/clicks/" + title + "/" + clicks);
    }
    

};