import NavigationBar from './Components/NavBar';
import Cards from './Components/CharityCards';
import Footer from './Components/Footer';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import About from './Components/About';

function App() {
  return (
    <>
    <Router>
    <NavigationBar />
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/" exact component={Cards} />
          </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
