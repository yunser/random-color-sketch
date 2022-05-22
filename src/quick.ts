import sketch from 'sketch'
// import { Color } from 'color'
const Color = require('color')
// documentation: https://developer.sketchapp.com/reference/api/
// const Document = require('sketch/dom').Document
// const Text = require('sketch/dom').Text
// import BrowserWindow from 'sketch-module-web-view'
const Style = require('sketch/dom').Style

console.log('random color start 10')

export default async function() {
   
    let document = sketch.getSelectedDocument()

    let selectedLayers = document.selectedLayers
    let selectedCount = selectedLayers.length

    if (selectedCount === 0) {
        sketch.UI.message('请选择图层')
    } else {
        console.log('Selected layers:');
        selectedLayers.forEach(function (layer, i) {
            console.log((i + 1) + '. ' + layer.name)
            const color = Color({
                r: Math.floor(255 * Math.random()),
                g: Math.floor(255 * Math.random()),
                b: Math.floor(255 * Math.random()),
            }).hex()
            console.log('color', color)
            layer.style.fills = [
                {
                    color,
                    fillType: Style.FillType.Color,
                },
            ]
        })
    }
}
