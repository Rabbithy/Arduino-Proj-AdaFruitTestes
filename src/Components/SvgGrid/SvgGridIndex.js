import React from 'react'
import { DiagramContext } from '../../App'
import SvgBlockIndex from './SvgBlockIndex'
import './SvgGridStyle.css'


export default function SvgGridIndex() {
    const diagram = React.useContext(DiagramContext)
    const SvgBlock = React.useRef()
  return (
    <div className='Grid'>
      {diagram.map((name) => {
        <img ref={SvgBlock} src={name} />
      })}

    </div>
  )
}
