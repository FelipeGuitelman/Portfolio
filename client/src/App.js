import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/Landing' 
import Inicio from './componentes/Inicio'
import Proyectos from './componentes/Proyectos'
import Home from './components/Home' 
import Projects from './components/Projects' 


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path= '/' component = {LandingPage}/>
        <Route path = '/proyectos' component = {Proyectos}/>
        <Route path = '/español' component = {Inicio}/>
        <Route path = '/projects' component = {Projects}/>
        <Route path = '/english' component = {Home}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
