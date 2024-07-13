# uniapp

## 1.uniapp的生命周期

- 应用级别 
  - onLanuch
  - onShow
  - onHide
- 页面级别
  - onShow
  - onHide
  - onLoad
  - onReady
- 组件级别： 同vue2的生命周期



## 2.生命周期的顺序

1. onLoad：首次进入页面加载时触发，可以在 onLoad 的参数中获取打开当前页面路径中的参数。
2. onShow：加载完成后、后台切到前台或重新进入页面时触发
3. onReady：页面首次渲染完成时触发
4. onHide：从前台切到后台或进入其他页面触发
5. onUnload：页面卸载时触发
6. onPullDownRefresh：监听用户下拉动作
7. onReachBottom：页面上拉触底事件的处理函数
8. onShareAppMessage：用户点击右上角转发

## 2.如何实现上拉刷新和下拉加载更多

