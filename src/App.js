import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import ServiceFeature from './components/ServiceFeature/ServiceFeature'
// import Appointment from './components/Appointment/Appointment'
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
         <Route path='/serviceFeature'>
        <ServiceFeature/>
        </Route>
       {/*  <Route path='/appointment'>
        <Appointment/>
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
