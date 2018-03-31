export default {
    ageSort: (a, b) => {
        if (a.publishedAt < b.publishedAt) {
            return -1;
        }
        if (a.publishedAt > b.publishedAt) {
            return 1;
        }
        return 0;
    },

    newSort: (a, b) => {
        if (a.publishedAt < b.publishedAt) {
            return 1;
        }
        if (a.publishedAt > b.publishedAt) {
            return -1;
        }
        return 0;
    },

    clickSort: (a, b) => {
        if (parseInt(a.clicks, 10) < parseInt(b.clicks, 10)) {
            return 1;
        }
        if (parseInt(a.clicks, 10) > parseInt(b.clicks, 10)) {
            return -1;
        }
        return 0;
    }
};