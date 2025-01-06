// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   //let counter = 15
//   let [counter,Counter] = useState(15)

//   const addvalue = ()=> {

//     console.log("clicked", counter);
//       //counter = counter +1

//       Counter(counter+1)

//   }
//   const removevalue = () => {
//     Counter(counter - 1)
//   }

//   return (
//     <>
//       <h1>Chaiy aur react</h1>
//       <h2>Counter value: {counter}</h2>

//       <button
//       onClick={addvalue}
//       >Add value {counter}</button>
//       <br />
//       <button
//       onClick={removevalue}
//       >Remove value {counter}</button>
//       <p> footer: {counter} </p>

//     </>
//   )
// }

// export default App
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  let [counter, Counter] = useState(15);

  const addvalue = () => {
    console.log("clicked", counter);
    if (counter < 20) {
      Counter(counter + 1); // Increment only if counter is less than 20
    }
  };

  const removevalue = () => {
    if (counter > 0) {
      Counter(counter - 1); // Decrement only if counter is greater than 0
    }
  };

  return (
    <>
      <h1>Chaiy aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removevalue}>Remove value</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
