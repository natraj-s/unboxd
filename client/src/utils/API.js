import axios from "axios";
const HOMEPAGEURL = "https://newsapi.org/v2/top-headlines?country=us";
const APIATTACH = "&apiKey="
const APIKEY = "3f3246429d2a4fa39d3895c131ed7cad";

export default {
    getHomepage: function() {
        return axios.get(HOMEPAGEURL + APIATTACH + APIKEY);
    }
};