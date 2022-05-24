import React from 'react'
import './DropZoneStyle.css'

export default function DropZoneIndex({onUpload, children, formats}) {

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

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.target !== drag.current) {
        setDragging(true);
      }
  };
  
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.target === drag.current) {
        setDragging(false);
      }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDragging(false);

    const files = [...e.dataTransfer.files];

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
      onUpload(files);
    }
  };

  return (
    <div className='DropArea'
      onUpload={onUpload} 
      onClick={() => console.log("clicou")}
      ref={drop}
      >
        {dragging && (
            <div className='DragOver' 
            ref={drag}
            >
                Solte aqui.
            </div>
        )}
        {!dragging && (
            <div
            ref={drag}
            >
                 Arraste para aqui.
            </div>
        )}
        {children}
    </div>
  )
}
