import { ReactElement, useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import Navi from "../../layouts/Navi";
import BookService from "../../services/bookService";
import "./Books.css";

export interface Book {
  id: number,
  name: string,
  author: Author
}

export interface Author {
  id: number,
  name: string
}

export default function Books(): ReactElement {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    let bookService = new BookService();
    bookService.getBooks().then((book) => setBooks(book));
  }, []);

  return (
    <div>
      <Navi />
      <div className="book">
        <Segment.Group>
          {books.map(book => (
            <Segment key={book.id} secondary raised>
              <h1>{book.name} - {book.author.name}</h1>
            </Segment>
          ))}
        </Segment.Group>
      </div>
    </div>
  );
}
