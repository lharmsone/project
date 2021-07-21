import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Form from 'react-bootstrap/Form'
import Page404 from './Views/Page404';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import Article from './Views/Article';
import Articles from './Views/Articles';
import Chat from './Views/Chat';
import Login from './Views/Login';
import AboutUs from './Views/AboutUs';
import SimpleReactLightbox from 'simple-react-lightbox'



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
          <Route exact path="/Chat">
            <Chat />
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