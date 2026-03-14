import React from 'react';
import GameCanvas from './components/GameCanvas';

/**
 * Main App Component
 * 
 * Provides the structure for the application.
 * Contains the Game Canvas which handles all rendering and logic.
 */
function App() {
  return (
    <div className="w-full h-screen bg-black">
      <GameCanvas />
    </div>
  );
}

export default App;