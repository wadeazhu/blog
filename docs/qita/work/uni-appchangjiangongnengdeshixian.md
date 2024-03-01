# uni-app常见功能的实现

### 使用手机号一键登录

```vue
<template>
	<button :fixed="false" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">使用当前微信授权手机号登录</button>
</template>

<script>
	getPhoneNumber(e) {
        if (e.detail.errMsg === 'getPhoneNumber:ok') {
            // 这里表示授权成功
        }else {
            // 如果没有授权成功
        }
    }
</script>
```

### 图片上传的功能



### 实现一个进度条



### 实现一个日历



### 页面操作成功,返回后通知前一个页面刷新

```vue
<!--发送-->
<script>
export default {
    methods: {
        back() {
            const pages = getCurrentPages()
            const prevPage = pags[pages.length - 3] // 这里减去1是当前页面,减去3是上上个页面
			prevPage.setData({refresh: true})
            uni.navigateBack({
                delta: 2 // 返回上上个页面
            })
        }
    }
}
</script>

<!--接受-->
<script>
export default {
    onShow() {
        const pages = getCurrentPages()
        const currPage = pages[pages.length - 1]
        if (currPage.data.refresh) {
            this.getData()
        }
    }
}
</script>    
```



###  上拉刷新下拉加载

pages.json

```json
{
    path: '路径',
    style: {
        'navigationBarTitleText': "标题",
        'enablePullDownRefresh': true,
        'onReachBottomDistance': 150
    }
}
```

页面逻辑

```vue
<script>
export default {
    data() {
        return {
        	pullTimer: null, 
            list: [],
            page: {
                current: 1,
                total: 0,
                size: 10
            }
        }

    },
    // 上拉刷新
    onPullDownRefresh() {
        if (this.pullTimer !== null) {
            clearTimeout(this.pullTimer)
        }
        this.pullTimer = setTimeout(() => {
            uni.stopPullDownRefresh()
            this.list = []
            this.page.current = 1
            this.getData() // 获取数据
        })
    },
    // 下拉加载更多
    onReachBottom() {
        if (this.page.total > this.page.current * this.page.size) {
            this.page = {
                current: this.page.current + 1
            }
            this.getData() // 获取数据
        }
    }
}
</script>
```

