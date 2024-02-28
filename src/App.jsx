import { useState } from 'react'


const App = () => {
  const [value, setValue] = useState(10)



  //FORMA MAS ACOTADA

  // const setToValue = (newValue) => () => {
  //   console.log('value now', newValue)  // imprime el nuevo valor en la consola
  //   setValue(newValue)
  // }


  //FORMA MAS FACIL DE ENTENDER
  
  const setToValue = (newValue) => {
    return () =>{
      console.log('value now', newValue) // imprime el nuevo valor
      setValue(newValue);
    }
  }

  const hello = (who) => {
    return () => {
      console.log('hello', who)
    }
  }

  return (
    <div>
      {value}

      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>

      <hr/>
      <button onClick={hello('react')}>button</button>
      <button onClick={hello('world')}>button</button>
      <button onClick={hello('aang')}>button</button>
    </div>
  )
}

export default App
