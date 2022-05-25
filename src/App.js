import './App.css';
import React from 'react'
import DropBoxIndex from './Components/DropBox2/DropBoxIndex';
import SvgGridIndex from './Components/SvgGrid/SvgGridIndex';

export const DiagramContext = React.createContext()

function App() {

  const [diagram, setDiagram] = React.useState([])

  return (
    <DiagramContext.Provider value={diagram}>
      <div className="App">
        <DropBoxIndex setDiagram={setDiagram}/>
      </div>
    </DiagramContext.Provider>
  );
}

export default App;
