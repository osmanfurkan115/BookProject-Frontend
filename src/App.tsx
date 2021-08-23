import { ReactElement } from 'react'
import { Route } from 'react-router-dom'
import  Main  from "./main/Main";
import "./App.css"
import Navi from './layouts/Navi';

export default function App(): ReactElement {
  return (
    <div className="background">
        <Navi/>
        <Route exact path="/" component={Main} />
    </div>
  );
}
