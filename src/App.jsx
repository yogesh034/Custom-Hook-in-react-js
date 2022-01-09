import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Badge} from 'react-bootstrap';
import './App.css';
import useCounter from './useCounter';

function App() {

  const [counter,increment,decrement,reset] = useCounter(0);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Custom Hook</h1><br/>
      <Badge bg="secondary">{counter}</Badge>
      <br/>
        <div>
        <Button variant="primary" onClick={()=>increment()}>Increment</Button> &nbsp;&nbsp;
        <Button variant="danger" onClick={()=>decrement()}>Decrement</Button> &nbsp;&nbsp;
        <Button variant="success" onClick={()=>reset()}>Reset</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
