---
order: 4
---

# HTML中多媒体标签学习

## 什么是多媒体标签？

HTML中的多媒体标签指的是用于在网页中嵌入音频、视频等多媒体资源的标签，主要包括`<audio>`和`<video>`标签。

## `<audio>`标签

`<audio>`标签用于在网页中嵌入音频文件。该标签可以通过src属性指定音频文件的URL地址，通过controls属性启用播放控件。

以下是一个简单的`<audio>`标签示例：

```html
<audio src="audio/music.mp3" controls></audio>
```

`<audio>`标签的常用属性：

- `src`：指定音频文件的URL地址。
- `controls`：启用播放控件。
- `autoplay`：自动播放音频。
- `loop`：循环播放音频。
- `preload`：预加载音频文件。

## `<video>`标签

`<video>`标签用于在网页中嵌入视频文件。该标签可以通过src属性指定视频文件的URL地址，通过controls属性启用播放控件。

以下是一个简单的`<video>`标签示例：

```html
<video src="video/movie.mp4" controls></video>
```

`<video>`标签的常用属性：

- `src`：指定视频文件的URL地址。
- `controls`：启用播放控件。
- `autoplay`：自动播放视频。
- `loop`：循环播放视频。
- `preload`：预加载视频文件。
- `width`：指定视频的宽度。
- `height`：指定视频的高度。

## `<source>`标签

`<source>`标签用于指定`<audio>`或`<video>`标签中的多个媒体文件，并根据浏览器和设备的支持情况自动选择最适合的媒体文件进行播放。

以下是一个`<audio>`标签中使用`<source>`标签的示例：

```html
<audio controls>
  <source src="audio/music.mp3" type="audio/mpeg">
  <source src="audio/music.ogg" type="audio/ogg">
</audio>
```

`<source>`标签的常用属性：

- `src`：指定媒体文件的URL地址。
- `type`：指定媒体文件的MIME类型。

## `<track>`标签

`<track>`标签用于指定`<video>`或`<audio>`标签中的文本轨道文件，如字幕、字幕描述等。

以下是一个`<video>`标签中使用`<track>`标签的示例：

```html
<video controls>
  <source src="video/movie.mp4" type="video/mp4">
  <track src="video/movie.vtt" kind="subtitle" srclang="en" label="English">
  <track src="video/movie.zh.vtt" kind="subtitle" srclang="zh" label="Chinese">
</video>
```



`<track>`标签的常用属性：

- `src`：指定文本轨道文件的URL地址。
- `kind`：指定文本轨道文件的类型，常用的有`subtitles`（字幕）、`captions`（字幕描述）等。
- `srclang`：指定文本轨道文件的语言。
- `label`：指定文本轨道文件的标签。

## 媒体事件

在嵌入多媒体文件时，可以通过JavaScript监听媒体事件，以便在特定情况下执行特定的操作，如在媒体播放完成时执行某个函数。

以下是`<audio>`标签和`<video>`标签的常用媒体事件：

- `play`：当媒体开始播放时触发。
- `pause`：当媒体暂停播放时触发。
- `ended`：当媒体播放完成时触发。
- `timeupdate`：当媒体的当前播放位置发生改变时触发。

通过JavaScript可以通过`addEventListener`方法来监听这些媒体事件，例如：

```js
var audio = document.querySelector('audio');
audio.addEventListener('ended', function() {
  console.log('音频播放完成');
});
```

## 媒体元素的样式控制

可以通过CSS样式来控制多媒体元素的外观和布局，例如调整音频或视频的尺寸、颜色、透明度等。

以下是一些常用的CSS样式属性：

- `width`：指定媒体元素的宽度。
- `height`：指定媒体元素的高度。
- `background-color`：指定媒体元素的背景颜色。
- `opacity`：指定媒体元素的透明度。
- `border`：指定媒体元素的边框。

## 实践演习

为了更好地掌握HTML中多媒体标签的使用方法，可以进行以下实践演习：

1. 在HTML文件中添加一个video标签，嵌入一个视频文件，并控制视频的大小和控制条的显示。
2. 在HTML文件中添加一个audio标签，嵌入一个音频文件，并控制音频的控制条的显示。
3. 在HTML文件中添加一个video标签，嵌入多个视频文件，并使用source标签指定不同的文件类型。
4. 在HTML文件中添加一个video标签，嵌入一个视频文件，并使用track标签
