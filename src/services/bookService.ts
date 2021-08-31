import axios from 'axios'

export default class BookService {
    getBooks() {
        return axios.get("http://localhost:8080/v1/book/getBooks");
    }
}
