import axios from 'axios'
import { Book } from '../pages/books/Books';

  
export default class BookService {
    async getBooks() {
        return await axios.get("http://localhost:8080/v1/book/getBooks").then(book => book.data) as Book[];
    }

    async updateBook(book: Book) {
        await axios.put("http://localhost:8080/v1/book/update", book);
    }
}
