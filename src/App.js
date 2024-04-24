import './App.css';
import StateExample from './03/StateExample';
import Count from './03/Count';
import { useState } from 'react';
import NewCount from './03/NewCount';
import Input from './03/Input';
import './sass/materialize.scss'
import InputWithStyle from './04/InputWithStyle';

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
          <nav>
              <div className={'nav-wrapper'}>
                  <div>두잇 리엑트 시작하기</div>
              </div>
          </nav>

          <div>
              <h1>ajxjfldjf ㅊㄴㄴ</h1>

              <InputWithStyle
                  name={'abc'}
                  value={'add'}
              />

              <Count count={count} />
              <NewCount count={count}
                        clearCount={clearCount}
              />
              <button onClick={resetCount}>{count +10}으로 초기화</button>
          </div>
      </div>


  )

}

export default App;
