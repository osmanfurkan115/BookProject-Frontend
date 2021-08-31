import { ReactElement } from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from "./main/Main";
import "./App.css"
import AddBook from './pages/admin/AddBook';
import Books from './pages/books/Books';
import Admin from './pages/admin/Admin';

export default function App(): ReactElement {
  return (
    <div className="background">
      <Switch>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/addBook" component={AddBook} />
        <Route exact path="/" component={Main} />
        <Route exact path="/books" component={Books} />
      </Switch>











    </div>
  );
}
