import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Page404 from './Views/Page404';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import Article from './Views/Article';

import Feedbacks from './Views/Feedbacks';
import Login from './Views/Login';
import AboutUs from './Views/AboutUs';
import Articles from './Views/Articles';




function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Articles">
            <Articles />
          </Route>
          <Route path="/articles/:articleId">
            <Article />
          </Route>
          <Route exact path="/Feedbacks">
            <Feedbacks />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/AboutUs">
            <AboutUs />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;