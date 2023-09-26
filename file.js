import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/book/:id" component={BookDetail} />
        <Route path="/submit-review/:id" component={ReviewForm} />
      </Switch>
    </Router>
  );
}