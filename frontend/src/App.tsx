import React, { useState } from 'react';
import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ComponentPalette from './components/ComponentPalette.tsx';
import CanvasArea from './components/CanvasArea.tsx';

interface ComponentProps {
  name: string;
}

function App() {
  const [prompt, setPrompt] = useState('');
  const [suggestedComponents, setSuggestedComponents] = useState<ComponentProps[]>([]);

  const handleAddComponent = (component: ComponentProps) => {
    console.log(`Adding component: ${component.name}`);
  };

  const handleGetSuggestions = () => {
    // Placeholder LLM integration
    const suggestions = [{ name: 'Load Balancer' }, { name: 'Cache' }];
    setSuggestedComponents(suggestions);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <header className="App-header">
          <h1>Stack Builder</h1>
        </header>
        <input
          type="text"
          placeholder="Enter LLM prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button onClick={handleGetSuggestions}>Get Suggestions</button>
        <div className="app-body">
          <ComponentPalette onAddComponent={handleAddComponent} suggestedComponents={suggestedComponents} />
          <CanvasArea />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
