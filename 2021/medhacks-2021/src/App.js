import Landing from "./Components/Landing.js"
import './App.css';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Main from "./Components/Main.js";

function App() {

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/2021" component={Main} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
