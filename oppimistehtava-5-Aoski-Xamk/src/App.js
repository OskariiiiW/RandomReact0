import Aloitus from './components/Aloitus';
import Saannot from './components/Saannot';
import Ilmottaudu from './components/Ilmottaudu';
import Navigointi from './components/Navigointi';
import Kiitos from './components/Kiitos';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navigointi/>
        <Route path="/" exact component={Aloitus}/>

        <Route path="/saannot" exact component={Saannot}/>

        <Route path="/ilmottaudu" exact component={Ilmottaudu}/>

        <Route path="/kiitos" exact component={Kiitos}/>

    </Router>
  );
}

export default App;
