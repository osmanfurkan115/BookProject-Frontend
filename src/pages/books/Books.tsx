import { ReactElement, useEffect, useState } from "react";
import { Button, Segment } from "semantic-ui-react";
import Navi from "../../layouts/Navi";
import BookService from "../../services/bookService";
import "./Books.css";

export interface Book {
  id: number;
  name: string;
  description: string;
  author: Author;
  rateAmount: number;
  pageAmount: number;
  publishingYear: number;
  createdTime: Date;
}

export interface Author {
  id: number;
  name: string;
}

export default function Books(): ReactElement {
  const [books, setBooks] = useState<Book[]>([]);

  const [isRated, setRated] = useState(false);
  let bookService = new BookService();

  useEffect(() => {
    let bookService = new BookService();
    bookService.getBooks().then((book) => setBooks(book));

  }, []);

  function handleRate(book: Book): void {
    const newBook = {...book, rateAmount: book.rateAmount+1};
    bookService.updateBook(newBook);
    setRated(true);
    books[books.indexOf(book)] = newBook
    setBooks(books);
  }

  return (
    <div>
      <Navi />
      <div className="book">
        <Segment.Group>
          {books.map((book) => (
            <Segment key={book.id} secondary raised>
              <h1>
                {book.name} - {book.author.name}
              </h1>
              <Button
                color="orange"
                content="Rate"
                icon="star"
                disabled={isRated}
                label={{
                  basic: true,
                  color: "red",
                  pointing: "left",
                  content: (book.rateAmount),
                }}
                onClick={() => handleRate(book)}
              />
            </Segment>
          ))}
        </Segment.Group>
      </div>
    </div>
  );
}

