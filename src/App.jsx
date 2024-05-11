import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/counter'

function App() {

  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <h1>The count is {count}</h1>

      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(50))}>increment By 50</button>

    </div>
  )
}

export default App
