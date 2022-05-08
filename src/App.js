
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home';
import Footer from "./components/Footer";
import Menu from "./Pages/Menu"
import About from "./Pages/About"
import Contacts from "./Pages/Contacts"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/menu" exact component={Menu}/>
          <Route path="/about" exact component={About}/>
          <Route path="/contact" exact component={Contacts} />
        </Switch>
        <Switch>
          <Footer/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
