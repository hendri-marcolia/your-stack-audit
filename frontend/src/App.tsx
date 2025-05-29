import React from 'react';
import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ComponentPalette from './components/ComponentPalette';
import CanvasArea from './components/CanvasArea';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <header className="App-header">
          <h1>Stack Builder MVP</h1>
        </header>
        <div className="app-body">
          <ComponentPalette />
          <CanvasArea />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;