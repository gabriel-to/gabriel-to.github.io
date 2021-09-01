import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Resume from './components/pages/Resume'
import Projects from './components/pages/Projects'


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component = {Home}/>
        <Route path='/resume' component = {Resume}/>
        <Route path='/projects' component = {Projects}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
