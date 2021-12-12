import { Switch } from 'react-router';
import './normalize.scss'

// Pages
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';

// Routes
import Public from "./Routes/Public";
import Private from "./Routes/Private";

function App() {
  return (
    <div className="App">
      <Switch>
        <Private path='/' component={Home} exact />
        <Private path='/profile/:email' component={Profile}  />
        <Public path='/login' component={Login} />
        <Public path='/signup' component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
