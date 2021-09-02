import { BrowserRouter as Router, Switch ,Route } from "react-router-dom";
import homepage from "./Routes/home/homepage";
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route to='/' exact component={homepage}/>
      </Switch>
    </Router>
  );
}

export default App;
