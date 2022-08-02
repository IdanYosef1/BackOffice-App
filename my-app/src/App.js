import './App.css';
import TableComp from './components/table/tableComp';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
        <Switch>
          <Route path='/' component={TableComp} exact></Route>
        </Switch>
    </div>
  );
}

export default App;

