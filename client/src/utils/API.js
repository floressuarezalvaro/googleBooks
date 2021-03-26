import axios from "axios";

export default {
    getBooks: function() {
        return axios.get("/book");
    },
    saveBook: function(bookResults) {
        return axios.post("/book", bookResults);
    },
    deleteBook: function(id) {
        return axios.delete("/book/"+id);
    },
};