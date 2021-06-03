import Counter from "./Counter";
import CounterHooks from "./CounterHooks";
import React,{useState} from 'react';
export const ThemeContext=React.createContext();

function App() {
  const [theme,setTheme]=useState('red')
  return (
    <ThemeContext.Provider value={{backgroundColor:theme}}>  
    <h1>CounterHooks</h1>
<CounterHooks initialCounter={0}/>
<h1>Counter</h1>
<Counter initialCounter={0}/>
<button onClick={
  ()=>setTheme(prevTheme=>(prevTheme==='red'?'blue':'red') )
}>toggle</button>
</ThemeContext.Provider>
    );
}

export default App;
