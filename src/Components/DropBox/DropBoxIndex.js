import React, { useContext } from 'react'
import { DiagramContext } from '../../App.js'
import DropZoneIndex from '../DropZone/DropZoneIndex.js'
import './DropBoxStyle.css'


export default function DropBoxIndex({children}) {

  const diagram = useContext(DiagramContext)

  // const renderSvg = new FileReader()

  const onUpload = (files) => {
    diagram.push(files)
    console.log(diagram)
    /** 
    renderSvg.onloadend = (diagram) => {
      this.setState({
        file: diagram,
        imagePreviewUrl: renderSvg.result
      });
    }
    renderSvg.readAsDataURL(diagram)
    */
  }


  return (
    <div className='BoxArea' >
      <DropZoneIndex onUpload={onUpload} formats={['svg']} />
    </div>
  )
}
