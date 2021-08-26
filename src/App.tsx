import { ReactElement } from 'react'
import { Route } from 'react-router-dom'
import Main from "./main/Main";
import "./App.css"
import Admin from './pages/Admin';
import AddBook from './pages/AddBook';

export default function App(): ReactElement {
  return (
    <div className="background">
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/addBook" component={AddBook} />
        <Route exact path="/" component={Main} />










    </div>
  );
}
