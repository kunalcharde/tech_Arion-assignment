
import "./App.css"
import Counter from './Component/Counter';
import Task2 from './Component/Task2';
import Task3 from './Component/Task3';
import Task4 from './Component/Task4';
import NavRoute from './Routes';

function App() {
  return (
    <div className='App'>

      <h1>ALL TASK PAGE</h1>
      <h2> TASK-1 and TASK-2</h2>
      <Counter/>
      <hr />
      <h2> TASK-3 </h2>
      <Task2/>
      <hr />
      {/* <Task3/> */}
      <h2> TASK-4</h2>
      <Task4/>
      <hr />
    </div>
  );
}

export default App;
