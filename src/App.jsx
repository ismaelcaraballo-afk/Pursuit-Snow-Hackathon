import React from 'react';
import { HypeProvider } from './context/HypeContext';
import HypeDashboard from './components/HypeDashboard';

function App() {
  return (
    <HypeProvider>
      <HypeDashboard />
    </HypeProvider>
  );
}

export default App;
