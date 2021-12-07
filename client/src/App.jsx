import { Switch } from 'react-router';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Home from './Pages/Home/Home';

import Public from "./Routes/Public";
import Private from "./Routes/Private";

function App() {
  return (
    <div className="App">
      <Switch>
        <Private path='/' component={Home} exact />
        <Public path='/login' component={Login} />
        <Public path='/signup' component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
