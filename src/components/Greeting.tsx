import React from 'react';


// THwe first thing to do here is to define a TypeScript interface
interface GreetingProps {
  // Here the 'name' prop mustbe a string
  name: string; 
}

// here we declare the functional component with React.FC and the props type
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
