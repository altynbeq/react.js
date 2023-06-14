// Context lets a parent component provide data to the entire tree below it. There are many uses for context. 

import { createContext } from 'react';
// The only argument to createContext is the default value, could pass any kind of value (even an object).
export const LevelContext = createContext(1);

// Step 2: Use the context 
// Import the useContext Hook from React and your context:

import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Heading({ children }) {
  const level = useContext(LevelContext);
  // ...
}

// useContext is a Hook. useContext tells React that the Heading component wants to read the LevelContext.

// Step 3: Provide the context 
// Wrap them with a context provider to provide the LevelContext to them:

export default function Section({ level, children }) {
  return (
    <section className="section">
      <LevelContext.Provider value={level}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}

// This tells React: “if any component inside this <Section> asks for LevelContext, give them this level.” 
// The component will use the value of the nearest <LevelContext.Provider> in the UI tree above it.
