import React from 'react';
import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ComponentPalette from './components/ComponentPalette.tsx';
import CanvasArea from './components/CanvasArea.tsx';

interface ComponentProps {
  name: string;
}

function App() {
  const handleAddComponent = (component: ComponentProps) => {
    console.log(`Adding component: ${component.name}`);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <header className="App-header">
          <h1>Stack Builder MVP</h1>
        </header>
        <input type="text" placeholder="Enter LLM prompt" />
        <button>Get Suggestions</button>
        <div className="app-body">
          <ComponentPalette onAddComponent={handleAddComponent} />
          <CanvasArea />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
