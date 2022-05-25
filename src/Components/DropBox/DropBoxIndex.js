import React, { useContext } from 'react'
import { DiagramContext } from '../../App.js'
import DropZoneIndex from '../DropZone/DropZoneIndex.js'
import './DropBoxStyle.css'


export default function DropBoxIndex({setDiagram , children}) {

  const diagram = useContext(DiagramContext)

  

  

  const onUpload = (files) => {
    //diagram.push(files)
    
    const file = files.target.files[0]

    const fr = new FileReader()
    fr.onload = () => {
      setDiagram(fr.result)
    }
    fr.readAsText(file)
    


    console.log(diagram)
  }


  return (
    <div className='BoxArea' >
      <DropZoneIndex onUpload={onUpload} setDiagram={setDiagram} formats={['svg']} diagram={diagram} />
    </div>
  )
}
