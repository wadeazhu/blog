// import "./html2canvas2.js";
import html2canvas from "html2canvas";
import { imageSave } from "./base64Save"
let x1 = 0
let y1 = 0
let l = 0
let t = 0
let h = 0
let curMoveDom = null
const interval = 1266
const el = {dom: null, parentDom: null}
let domWidth = 0

const canvasWidth = 950
let canvasHeight = 0

const resultImgSize = {
    width: 1080,
    height: 1440
}

export function close(dom) {
    const $areaList = document.querySelector(".areaList")
    const $sourceCanvas = document.querySelector(".sourceCanvas")
    dom.style.width = domWidth + 'px'
    if (el.parentDom) {
        el.parentDom.removeChild($areaList)
        el.parentDom.removeChild($sourceCanvas)
    }
}

export function generateImage(dom, parentDom) {
    el.dom = dom
    el.parentDom = parentDom
    window.onmousemove = function (e) {
        e.preventDefault()
        if (curMoveDom === null) return
        const scalingY = 100
        let x2 = e.clientX
        let y2 = e.clientY
        const scrollTop = parentDom.scrollTop
        if (y1 + scrollTop - t > h - scalingY) { // 向下
            const _h = y2 - y1 + h
            if (_h <= interval) {
                // TODO: 这里的高度要判断临界值
                curMoveDom.style.height = _h + 'px'
            }
        } else {
            let highest = 0
            const top = y2 - (y1 - t)
            const preEle = curMoveDom.previousElementSibling
            if (preEle) {
                highest = parseInt(preEle.dataset.addHeight)
            }
            curMoveDom.style.top = (top < highest ? highest :top) + 'px'
        }
        const $span = curMoveDom.querySelector("span")
        $span.innerHTML = curMoveDom.clientWidth + '*' + curMoveDom.clientHeight
        curMoveDom.dataset.addHeight = curMoveDom.clientHeight + curMoveDom.offsetTop + ''
    }
    window.onmouseup = function() {
        curMoveDom.style.cursor = 'default'
        // 调整后续的div
        adjustArea(curMoveDom)
        curMoveDom = null
    }
    domWidth = dom.clientWidth
    // dom.style.width = '631px'
    // dom.style.width = '600px'
    return html2canvas(dom, {
        x: -dom.offsetLeft,
        // x: 0, y: 0,
        foreignObjectRendering: true,
        // dpi: 192
        scale: 2,
    }).then(canvas => {
        canvasHeight = canvas.height * canvasWidth / canvas.width
        canvas.className = 'sourceCanvas'
        canvas.style.position = 'absolute'
        canvas.style.top = 0
        canvas.style.left = 0

        // canvas.width = 1262
        // canvas.height = canvasHeight
        canvas.style.width = canvasWidth + 'px'
        canvas.style.height = canvasHeight + 'px'
        parentDom.appendChild(canvas)
        // const base64 = canvas.toDataURL("image/png")
        // imageSave(base64, '测试')
        return {width: canvasWidth, height: canvasHeight, canvas}
    }).then(({width, height, canvas}) => {
        const $areaList = document.createElement("div")
        $areaList.className = 'areaList'
        parentDom.appendChild($areaList)
        const total = height / interval
        for (let i = 0 ; i < total ; i++) {
            const _height = height - i * interval
            const divHeight = (_height > interval ? interval : _height)
            const divTop = i * interval
            createAreaDiv(divHeight, divTop, divHeight + divTop)
        }
        return canvas
    })
}

function adjustArea(area) {
    let curArea = area.nextElementSibling
    const {addHeight, totalHeight} = area.dataset
    let _top = 0

    if (totalHeight - addHeight > 0) {
        const top = parseInt(addHeight)
        const height = totalHeight - addHeight > interval ? interval : totalHeight - addHeight
        if (!curArea) {
            curArea = createAreaDiv(height, top, top + height)
        }else {
            // _top = curArea.offsetTop - addHeight > 0 ? curArea.offsetTop - addHeight : 0
            curArea.style.top = top + _top + 'px'
            curArea.style.height = height + 'px'
            curArea.dataset.addHeight = top + height
            const $span = curArea.querySelector('span')
            $span.innerHTML = curArea.clientWidth + '*' + curArea.clientHeight
        }
    }else {
        clearArea(curArea)
    }
    if (curArea) adjustArea(curArea)
    // TODO: 如果小于某个高度，这里要追加area
}

function clearArea(area) {
    if (!area) return
    area.parentNode.removeChild(area)
}

function createAreaDiv(height, top, addHeight) {
    const $sourceCanvas = document.querySelector(".sourceCanvas")
    const $areaList = document.querySelector(".areaList")
    const $div = document.createElement("div")
    $div.style.width = canvasWidth + 'px'
    $div.style.height = height + 'px'
    $div.style.position = 'absolute'
    $div.style.top = top + 'px'
    $div.style.left = "0"
    $div.style.background = 'rgba(0, 0, 255, .2)'
    $div.style.border = '1px solid red'
    $div.style.boxSizing= 'border-box'
    $div.className = 'area'
    $div.dataset.totalHeight = canvasHeight + ''
    $div.dataset.addHeight = addHeight

    const $span = document.createElement("span")
    $span.innerHTML = `${canvasWidth} * ${height}`
    $span.style.position = 'absolute'
    $span.style.top = '20px'
    $span.style.right = '20px'
    $span.style.fontWeight = 'bold'
    $span.style.fontSize = '20px'
    $span.style.background = '#fff'
    $div.appendChild($span)

    $div.onmousedown = function (e) {
        x1 = e.clientX
        y1 = e.clientY

        l = $div.offsetLeft
        t = $div.offsetTop

        h = $div.clientHeight
        curMoveDom = this
        this.style.cursor = 'move'
    }
    $areaList.appendChild($div)
    return $div
}

export function download() {
    const areaList = document.querySelectorAll(".area")
    const $canvas = document.createElement("canvas")
    const $sourceCanvas = document.querySelector(".sourceCanvas")
    const ctx = $canvas.getContext("2d")
    for (let i = 0 ; i < areaList.length; i++) {
        let {top, left, width, height} = areaList[i].style
        top = parseInt(top)
        left = parseInt(left)
        width = parseInt(width)
        height = parseInt(height)
        $canvas.width = resultImgSize.width
        $canvas.height = resultImgSize.height

        const _height = $sourceCanvas.width * height / width
        const _top = $sourceCanvas.width * top / width
        ctx.clearRect(0, 0, $canvas.width, $canvas.height)
        ctx.fillStyle = '#fff'
        ctx.fillRect(0, 0, $canvas.width, $canvas.height)
        ctx.drawImage($sourceCanvas, left, _top, $sourceCanvas.width, _height, 65, 87, width, height)
        const base64 = $canvas.toDataURL("image/png")
        setTimeout(() => {
        	imageSave(base64, new Date().toLocaleDateString())
        }, i * 1000)
    }
}
