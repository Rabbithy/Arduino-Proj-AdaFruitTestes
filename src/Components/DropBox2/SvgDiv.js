import React from 'react'

export default function SvgDiv(svg) {

  var stringToHTML = function (str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    console.log(doc.body)
    return doc.body;
}

  const svgHTML = stringToHTML(svg)
    
  return (
    <div>
        {svgHTML}
    </div>
  )
}
