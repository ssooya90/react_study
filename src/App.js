import './App.css';
import StateExample from './03/StateExample';
import Count from './03/Count';
import { useState } from 'react';
import NewCount from './03/NewCount';

function App() {

  const [count, setCount] = useState(10);


  const clearCount = () => {
      setCount(0);
  }

  const resetCount = () => {
    setCount( count + 10)

  }
  return (
    <div>
      <Count count={count} />
      <NewCount count={count}
                clearCount={clearCount}
      />
      <button onClick={resetCount}>{count +10}으로 초기화</button>
    </div>
  )

}

export default App;
