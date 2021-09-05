import { ReactElement, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Grid, Header, Icon, Input } from "semantic-ui-react";
import BookImage from "../assets/undraw_book_lover_mkck.svg";
import Navi from "../layouts/Navi";
import { Book } from "../pages/books/Books";
import BookService from "../services/bookService";
import "./Main.css";

export default function Main(): ReactElement {
  const [word, setWord] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  let history = useHistory();
  toast.configure();
    

  useEffect(() => {
    let bookService = new BookService();
    bookService.getBooks().then((books) => setBooks(books));
  }, []);

  async function handleClick() {
    const book = books.find((book) => book.name === word);
    if (book) {
      history.push("/books/" + book.id)
    } else {
      toast.error('There is no book named ' + word, {position: "bottom-right", style:{fontWeight: "bold"}, closeOnClick:true});
    }
  }
  return (
    <div>
      <Navi />
      <div className="contact">
        <div className="mail">
          <Icon name="mail" />
          osmanfurkan115@gmail.com
        </div>

        <div className="phone">
          <Icon name="phone" />
          +905000000000
        </div>
      </div>

      <div>
        <img alt="" src={BookImage} className="image" />
      </div>

      <div className="text">
        <h1 className="header">Lorem Ipsum</h1>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
      <div className="box">
        <Grid padded textAlign="center">
          <Grid.Column>
            <Header icon>
              <Icon name="search" />
              Find Book
            </Header>
          </Grid.Column>
        </Grid>
        <Input
          onChange={(e) => setWord(e.target.value)}
          action={{ onClick: () => handleClick() }}
          icon="search"
          placeholder="Search Book..."
          className="search"
        />
      </div>
    </div>
  );
}
