// import { useState } from 'react'
// import './App.css'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>React Investment Calculator</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           How many calculate do you want? Please click on! 🙌🏻 {count}
//         </button>
//         {/* <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p> */}
//       </div>
//       {/* <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>
//   )
// }

// export default App

import { useState } from 'react';

import Header from './components/Header.jsx';
import Results from './components/Results.jsx';
import UserInput from './components/UserInput.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results input={userInput} />
    </>
  );
}

export default App;
