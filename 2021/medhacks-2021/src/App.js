import Temp from "./Components/Temp.js"
import './App.css';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Main from "./Components/Main.js";
import { Helmet } from 'react-helmet'

const TITLE = 'Medhacks'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <Switch>
          <Route exact path="/" component={Temp} />
          <Route exact path="/2021" component={Main} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
