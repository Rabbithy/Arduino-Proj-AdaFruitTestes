import React, {useContext} from 'react'
import './DropZoneStyle.css'

export default function DropZoneIndex({onUpload, diagram, setDiagram, children, formats}) {

    const drop = React.useRef(null)
    const [dragging, setDragging] = React.useState(false);
    const drag = React.useRef(null);

  React.useEffect(() => {
    drop.current.addEventListener('dragover', handleDragOver);
    drop.current.addEventListener('drop', handleDrop);
    drop.current.addEventListener('dragenter', handleDragEnter);
    drop.current.addEventListener('dragleave', handleDragLeave);

    return () => {
      drop.current.removeEventListener('dragover', handleDragOver);
      drop.current.removeEventListener('drop', handleDrop);
      drop.current.removeEventListener('dragenter', handleDragEnter);
      drop.current.removeEventListener('dragleave', handleDragLeave);
    };
  }, []);


  function handleDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
        setDragging(true);
  };
  
  function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
        setDragging(false);
  };

  function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDragging(false);

    var files = e.dataTransfer.files[0]
    console.log(files)
   

    /** 
    if (count && count < files.length) {
        console.log(`Only ${count} file${count !== 1 ? 's' : ''} can be uploaded at a time`);
        return;
    }
    */

    if (formats && files.some((file) => !formats.some((format) => file.name.toLowerCase().endsWith(format.toLowerCase())))) {
        console.log(`Only following file formats are acceptable: ${formats.join(', ')}`);
        return;
    }

    if (files && files.length) {

      const fr = new FileReader()
      fr.onload = () => {
        setDiagram(fr.result)
      }
      fr.readAsText(files)
      console.log(diagram)
    }
  };

  return (
    <div className='DropZone' ref={drop}>
      {dragging ?
        <span className='DragOver'>
                Solte aqui.
        </span> :
        <span>
                 Arraste para aqui.
        </span>
      }
    </div>
  )
}
