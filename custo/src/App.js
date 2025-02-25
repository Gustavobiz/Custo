import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/">
          </Home>
      </Route>

      <Route exact path="/company">
          </Company>
      </Route>

       <Route exact path="/Contato">
            </Contato>
       </Route>
       <Route exact path="/NewProject">
        </NewProject>
         </Route>
    </Switch>

  </Router>
  );
}

export default App;
