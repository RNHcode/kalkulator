import { useReducer } from 'react';
import './App.scss';
import {reducer} from './reducer';
import Digitbutton from './Digitbutton';
import OperationButton from './OperationButton';


function App() {

  const [{currentOperand}, dispatch] = useReducer(reducer, {currentOperand: 0});

  return (
    <div className="kalkulator">
      <div className="output">{currentOperand}</div>
      <button style={{opacity: 0}}></button>
      <button className="operation" onClick={() => dispatch({type: 'clear'})}>C</button>
      <button className="operation" onClick={() => dispatch({type: 'result'})}>=</button>
      <button  className="operation" onClick={() => dispatch({type: 'remove'})}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-backspace" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M20 6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-11l-5 -5a1.5 1.5 0 0 1 0 -2l5 -5z"></path>
          <path d="M12 10l4 4m0 -4l-4 4"></path>
        </svg>
      </button>
      <Digitbutton digit="1" dispatch={dispatch} />
      <Digitbutton digit="2" dispatch={dispatch} />
      <Digitbutton digit="3" dispatch={dispatch} />
      <OperationButton operation="%" dispatch={dispatch}/>
      {/* <button className="operation">%</button> */}
      <Digitbutton digit="4" dispatch={dispatch} />
      <Digitbutton digit="5" dispatch={dispatch} />
      <Digitbutton digit="6" dispatch={dispatch} />
      <OperationButton operation="/" dispatch={dispatch}/>
      {/* <button  className="operation">/</button> */}
      <Digitbutton digit="7" dispatch={dispatch} />
      <Digitbutton digit="8" dispatch={dispatch} />
      <Digitbutton digit="9" dispatch={dispatch} />
      <OperationButton operation="x" dispatch={dispatch}/>
      <Digitbutton digit="0" dispatch={dispatch} />
      <OperationButton operation="." dispatch={dispatch}/>
      <OperationButton operation="-" dispatch={dispatch}/>
      <OperationButton operation="+" dispatch={dispatch}/>
    </div>
  );
}

export default App;
