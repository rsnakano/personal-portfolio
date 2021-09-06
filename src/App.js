import { Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Toolbar from './components/Toolbar/Toolbar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Toolbar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
