import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Toolbar from './components/Toolbar/Toolbar'

function App() {
  return (
    <div>
      <Toolbar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
