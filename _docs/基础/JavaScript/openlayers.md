# openlayers

<img src="F:\blog\_docs\基础\JavaScript\openlayers\image-20240524102035658.png" alt="image-20240524102035658"  />



地图， 图层， 矢量图形， marker， 控件

## 初始化

1. 引入`ol`文件
2. 新增`dom`元素
3. 初始化一个底图图层（高德、天地、百度..）
4. 初始化地图



```bash
npm i ol --save
```



```html
<!--要设置宽高-->
<div id="map"></div> 

<script type="module">
    import 'ol/ol.css'
	import Map from 'ol/Map.js'
    import OSM from 'ol/source/OSM.js'
    import { Tile } from 'ol/layer'
    import { XYZ } from 'ol/source'
    import View from 'ol/View.js'
    import { defaults as defaultControls } from 'ol/control' 

    // 新建地图对象， 然后把地图插进去
    const map = new Map({
        target: 'map', // 这里用id
     	controls: defaultControls({
       		zoom: false
     	}),
        layers: [],
        view: new View({
            projection: 'EPSG:4326', // 4326经纬度 3857投影
            center: [112.37433789908027, 31.09339354156643],
            zoom: 7,
            minZoom: 6,
            maxZoom: 18.5
        })
    })
    
    // 加入底图, getTdtAk需要获取key，矢量数据
    const slData = [
        {
            name: '矢量底图',
            zIndex: 1,
            url:
                    'http://t' +
            Math.round(Math.random() * 7) +
            '.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=' +
            getTdtAk()
        }
    ]
    // 瓦片数据
    const yxData = [
        {
            name: '影像底图',
            zIndex: 1,
            url:
                    'http://t' +
            Math.round(Math.random() * 7) +
            '.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=' +
            getTdtAk()
        }
    ]
    // 1. 矢量图
    slData.forEach(item => {
        getMapByXYZ(item)
    })
    // 2. 瓦片图
    yxData.forEach(item => {
        getMapByXYZ(item)
    })

    function getMapByXYZ (data) {
        return new Promise(resolve => {
            var xyzTile = new Tile({
                name: data.name,
                source: new XYZ({
                    url: data.url,
                    crossOrigin: 'anonymous',
                    wrapX: false // 平铺
                }),
                zIndex: data.zIndex
            })
            map.addLayer(xyzTile)
            resolve(xyzTile)
        })
    },
</script>
```
`OSM` 图源，但 `OSM` 图源的边界可能不是那么精准，在学习时使用该图源没问题，但切勿在真实项目中使用`OSM`图源

```js
new ol.layer.Tile({
  source: new ol.source.OSM()
})
```
``
### 投影坐标系
在现实世界中使用经纬度可以定义一个位置。
在 `ol` 中，支持多种定义位置的格式，这些格式都叫投影坐标系。
`ol` 默认使用的是 `EPSG:3857` 。如果你习惯了百度地图，比如你使用 百度地图拾取坐标系统 获得的坐标点，想放在 `ol` 中能对应得上，那就需要配置投影坐标系了。


### `EPSG:4326`
`EPSG:4326`是一个`GIS`（地理信息系统）中使用的坐标系代码。它表示一个地理坐标系，即用来经纬度来表示地理位置。
`EPSG`代码是出 `European Petroleum Survey Group` 分配的，它是一个用于统一管理坐标参考系的代码。`4326`代码是在 `WGS 84`(世界大地测量系统)球体模型的某础上定义的。`EPSG:4326` 常被用于在网络上传输地理位置信息，如在 `Web` 地图服务和地理位置 `API` 等。`EPSG:4326` 的经纬度范围是:经度范围在 `-180°`到 `180°`之间，纬度范围在 `-90°`到 `90°`之间。

### `EPSG:3857`和`EPSG:4326`
`EPSG:4326` 和 `EPSG:3857` 是两个常用的坐标参考系代码，用于在 `GIS` 中表示地理位置。它们的主要区别如下:
`EPSG:4326` 表示一个地理坐标系，使用经纬度来表示地理位置，通常用于地理位置的显示和制图。`EPSG:3857` 表示一个 `Web` 墨卡托坐标系，使用平面墨卡托投影来表示地理位置。因此，两个坐标系的主要区别在于它们使用的坐标系统不同:`EPSG:4326` 使用的是经纬度，而`EPSG:3857` 使用的是平面墨卡托投影。
`EPSG:3857` 在在线地图中被广泛使用，因为它能够在 `Web` 地图上提供更高的精度和更好的分辨率。
