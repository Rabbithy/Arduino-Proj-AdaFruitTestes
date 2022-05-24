import './App.css';
import React from 'react'
import DropBoxIndex from './Components/DropBox/DropBoxIndex';
import SvgGridIndex from './Components/SvgGrid/SvgGridIndex';

export const DiagramContext = React.createContext()

function App() {

  const [diagram, SetDiagram] = React.useState([])

  return (
    <DiagramContext.Provider value={diagram}>
      <div className="App">
        <DropBoxIndex />
        <SvgGridIndex />
      </div>
    </DiagramContext.Provider>
  );
}

export default App;
