
import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

// Steps taken to change the code to Typescript
// 1. rename all files to .tsx
// 2. Add Typescript types for props and state
// 3. Use of interfaces and FC



function App() {
  return (
    <div className="App">
      <h1>React App with TypeScript</h1>
      <Greeting name="Chibuzor" />
      <Counter />
    </div>
  );
}

export default App;
