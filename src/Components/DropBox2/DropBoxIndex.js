import React, { useContext, useRef } from 'react'
import { render } from 'react-dom'
import SvgDiv from './SvgDiv'

export default function DropBoxIndex() {

    const [svgList, setSvgList] = React.useState([])

    const BoxArea = React.useRef()
    const divRef = React.useRef()

    React.useEffect(() => {
        BoxArea.current.addEventListener('dragover', handleDragOver);
        BoxArea.current.addEventListener('drop', handleDrop);

        return () => {
            BoxArea.current.removeEventListener('dragover', handleDragOver);
            BoxArea.current.removeEventListener('drop', handleDrop);
        }
    }, [])

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        console.log(e.dataTransfer.files)

        handleFiles(e.dataTransfer.files[0])
    }

    const handleFiles = (files) => {
        
       
        const reader = new FileReader()
        const helperArray = svgList

        reader.onload = function () {
            helperArray.push(reader.result)
        }
        reader.readAsText(files)

        setSvgList(helperArray)
        console.log(svgList)
    }

    var stringToHTML = function (str) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(str, 'text/html');
        console.log(doc.body)
        return doc.body;
    }

    const map = () => {
        {
            svgList.map((svg, index) => {
                console.log('map')
                const stringPreSplit = svg.split("<svg",1)
                const stringPolida = `<svg>${stringPreSplit[1]}`
                return (
                    <div key={index}>
                        {stringToHTML(stringPolida)}
                    </div>
                )
            })}
    }

    return (
        <div className='BoxArea' ref={BoxArea}>
            <p>Drop Here</p>
            <div>
            {map()}
            </div>
            
        </div>
    )
}