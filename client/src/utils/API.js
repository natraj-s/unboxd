import axios from "axios";
const HOMEPAGEURL = "https://newsapi.org/v2/top-headlines?country=us";
const APIATTACH = "&apiKey="
const APIKEY = "3f3246429d2a4fa39d3895c131ed7cad";

export default {
    getHomepage: function() {
        return axios.get(HOMEPAGEURL + APIATTACH + APIKEY);
    },

    getEntertainment: function() {
        let CATEGORY = "&category=entertainment";
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
    }
    

};