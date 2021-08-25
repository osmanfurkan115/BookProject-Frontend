import { ReactElement } from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from "./main/Main";
import "./App.css"
import Navi from './layouts/Navi';
import Admin from './pages/Admin';

export default function App(): ReactElement {
  return (
    <div className="background">
      <Switch>
        <Route exact path="/admin" component={Admin} />

        <div>
          <Route exact path="/" component={Main} />
          <Navi />
        </div>
      </Switch>









    </div>
  );
}
