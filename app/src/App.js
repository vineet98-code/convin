
import Main from './components/Main.js'
import Single from './components/Single'
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/users/:id">
        <Single />
      </Route>
      </Switch>
    </div>
  );
}

export default App;