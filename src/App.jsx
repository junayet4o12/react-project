import './App.css'
import Counter from './counter'
import Friends from './friends'
import Team from './team'
import Users from './users'


function App() {

  function handleClick() {
    alert('BTN Clicked')
  }
  const handleClick2 = () => {
    alert('2nd BTN Clicked')
  }
  const handleClick3 = (num) => {
    alert(num + 5)
  }
  return (
    <>
      <h2>React core concept 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>CLick me</button>
      <button onClick={handleClick2}>CLick 2</button>
      <button onClick={() => handleClick3(3)}>CLick 3</button>
    </>
  )
}

export default App
