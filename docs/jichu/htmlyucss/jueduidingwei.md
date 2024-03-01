# 绝对定位

## 什么是绝对定位

## 绝对定位的特点

1. 包裹性
2. 不占空间
3. 脱离文本流
4. 层级比普通文本流高一级

### 包裹性

上面的图片没有加绝对定位,下面图片加了绝对定位,**加了绝对定位的容器的宽高等于子元素的宽高**

![image-20230324134015373](https://azhu-images.oss-cn-hangzhou.aliyuncs.com/img-for-marktext/image-20230324134015373.png)

```html
<div style="border: 2px solid red">
    <img src="https://t7.baidu.com/it/u=839828294,1619278046&fm=193&f=GIF" width="100" alt="">
    <span>没有加绝对定位</span>
</div>

<div style="border: 2px solid red; position: absolute;">
    <img src="https://t7.baidu.com/it/u=839828294,1619278046&fm=193&f=GIF" width="100" alt="">
    <span>加了绝对定位</span>    
</div>
```



一旦给元素加上absolute或float就相当于给元素加上了display:block;。什么意思呢？比如内联元素span默认宽度是自适应的，你给其加上width是不起作用的。要想width定宽，你需要将span设成display:block。但如果你给span加上absolute或float，那span的display属性自动就变成block，就可以指定width了。因此如果看到CSS里absolute/float和display:block同时出现，那display:block就是多余的CSS代码。

### 不占空间

当给一个元素设置绝对定位之后,那么这个容器在整个文本流中都不占地方.

### 脱离文本流

解释这一点之前,先确认一个点就是,绝对定位的默认定位点就是**当前文本流的下一个位置**

![image-20230324135041334](https://azhu-images.oss-cn-hangzhou.aliyuncs.com/img-for-marktext/image-20230324135041334.png)

```html
<span>一段测试文字</span>
<img style="position: absolute;" width="100" src="https://t7.baidu.com/it/u=839828294,1619278046&fm=193&f=GIF" alt="">
```

**上面的图片想表达的意思就是:如果给一个元素设置了绝对定位但是没有设置定位属性(top,left,right,bottom),那么这个元素出现的位置就是正常文本流的下一个位置**



**如果设置了绝对定位,但是只设置了一个方向或者一组对立方向(top与bottom,left与right),那么其垂直方位还是出现在正常文本流的下一个文字**

![image-20230324140115167](https://azhu-images.oss-cn-hangzhou.aliyuncs.com/img-for-marktext/image-20230324140115167.png)

```html
<div>
    <span>一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的测试文字</span>
    <span style="position: absolute; left: 0; color: #fff; background-color: red;">position</span>
</div>
```



**如果设置绝对定位,但是设置不同方位的属性,那么其元素彻底被方位属性控制**

![image-20230324140232434](https://azhu-images.oss-cn-hangzhou.aliyuncs.com/img-for-marktext/image-20230324140232434.png)

```html
<div>
    <span>一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的测试文字</span>
    <span style="position: absolute; left: 20px; top: 10px;color: #fff; background-color: red;">position</span>
</div>
```



如果同时设置left和right,或者top和bottom,那么这个容器将会被拉伸,设置了`relative`的父元素的宽高(padding + content)决定了他的宽高上限

```html
<style>
.box {
    width: 200px;
    height: 200px;
    border: 1px solid #000;
    position: relative;
}
.child {
    position: absolute;
    left: 0;
    right: 0;
    height: 30px;
    background-color: red;
}
</style>
<div class="box">
    <div class="child"></div>
</div>
```

![image-20230324151859749](https://azhu-images.oss-cn-hangzhou.aliyuncs.com/img-for-marktext/image-20230324151859749.png)



如果同时设置了left和right与width或者bottom和top与height,那么right或bottom会失效



## 案例

![image-20230324150002101](https://azhu-images.oss-cn-hangzhou.aliyuncs.com/img-for-marktext/image-20230324150002101.png)

```html
<style>
    .box::before {
        content: "推荐";
        position: absolute;
        width: 50px;
        height: 30px;
        background-color: red;
        color: #fff;
        line-height: 30px;
        text-align: center;
    }
</style>
<div class="box">
	<img width="100" src="https://t7.baidu.com/it/u=839828294,1619278046&fm=193&f=GIF" alt="" />
</div>
```

这里只用加position: absolute, 这一个属性就够了,因为before本身就在img的前面,且层级也高一级别,所以不用加任何方向属性就可以.(注意这里要是用after伪元素就不行)



## 总结

绝对布局的特性是不占空间，但不一定完全脱离文档流，只有在设置了偏移时才会脱离文档流

如果只设置了一个方向上的偏移量，那么在另外一个方向上仍然保留着文档流特性

在绝对定位中，`::before`要比`::after`要好用的多，因为`::before`默认就是初始位置，可以很轻易的实现重叠效果

