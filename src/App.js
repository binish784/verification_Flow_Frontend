import './assets/css/style.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {
  Container
} from "react-bootstrap";

import routes from './routes/routes';
import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { createBrowserHistory } from "history";
const routeHistory = createBrowserHistory();

function App() {
  return (
    <Container>
      <Router history={routeHistory}>
        <Switch>
          {routes.map((route,key)=>{
            return <Route key={key} path={route.path} render={(props)=><route.component {...props} />} />
          })}
        </Switch>
      </Router>
      <ToastContainer/>
    </Container>
  );
}

export default App;
