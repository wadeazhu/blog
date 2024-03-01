# 上传公共组件

## 基于vue-ant-design 1.x版本

最终效果: (可以上传图片,视频,文件没试过)

![image-20230601172151346](https://azhu-images.oss-cn-hangzhou.aliyuncs.com/img-for-marktext/image-20230601172151346.png)

代码:

```vue
<template>
	<section>
      	<a-upload
            list-type="picture-card"
            :before-upload="handleBeforeUpload"
            :accept="accept"
            :action="action"
            :file-list="uploadList"
            :disabled="disabled"
            :remove="remove"
            @change="handleChange"
            @preview="handlePreview"
         >
    		<div v-if="uploadList.length < this.maxCount">
            	<a-icon :type="loading ? 'loading' : 'plus'" />
            	<div class="ant-upload-text">上传{{typeText}}</div>
          	</div>
    	</a-upload>
        {{tips}} <!--写提示的地方-->
        
        <!-- 这个modal用于查看视频或图片 -->
        <a-modal :zIndex="1002" title="查看" :visible="previewVisible" :footer="null" @cancel="handleCancel">
          <video v-if="type === 'video'" ref="video" controls style="width: 100%" :src="preview"></video>
          <img v-if="type === 'image'" alt=""  style="width: 100%" :src="preview" />
        </a-modal>
    </section>
</template>

<script>
export default {
  name: 'commonUpload',
  props: {
    type: { // 这里表示上传的类型, 可以为image,video,file
      type: String,
      default: 'image'
    },
    maxSize: { // 最大上传的大小, 默认是2M
      type: Number,
      default: 2 * 1024 * 1024
    },
    maxCount: { // 最大上传的数量
      type: Number,
      default: 1
    },
    value: { // 默认值, 这里测试ant-design 的defaultFileList属性没有效果
      type: Array,
      default: () => []
    },
    accept: { // 支持的后缀
      type: String,
      default: '.avi,.mp4,.mov,.mpeg'
    },
    action: { // 上传的服务器
      type: String,
      default: '/common/api/system/material/uploadVideoToOss'
    },
    disabled: { // 是否禁用
      type: Boolean,
      default: false
    },
    tips: { // 提示的文案
      type: String,
      default: ''
    }
  },
  computed: {
    typeText () {
      const typeMap = { 'image': '图片', 'video': '视频', 'file': '文件' }
      return typeMap[this.type]
    }
  },
  watch: {
    value: {
        // 因为给默认值的情况下, a-input组件并不会展示, 要转换成fileList需要的格式
        //{
    	//	uid: String, // 唯一就行
        //	status: 'done', // 表示上传的状态, 因为是默认值,所以给个固定done值
        //	name: String, // 文件的名字,如果服务器返回了名字, 就用他的名字,没有返回就用类型名 + '序号'
        //	url: String
	    //}
      handler (val) {
        if (Array.isArray(val)) {
          if (val.length > 0) {
            this.uploadList = val.filter(item => item).map((url, index) => ({
              uid: index + 1 + '',
              status: 'done',
              name: this.typeText + (index + 1),
              url
            }))
          } else {
            this.uploadList = []
          }
          this.loading = false // 避免重新打开出现等待的样式
        }
      },
      immediate: true
    }
  },
  data () {
    return {
      loading: false,  // 等待
      uploadList: [], // 与上传组件关联的值, 类似v-model关联的值
      preview: '', // 预览的路径
      previewVisible: false
    }
  },
  methods: {
      // 这里一定要做这样的判断, 不满足的情况下,要手动删除uploadList中的文件
    handleBeforeUpload (file, fileList) {
      const check = this.uploadList.length < this.maxCount
      if (!check) {
        this.$Notice.warning({
          title: this.typeText + '数量超出限制',
          desc: `最多可支持上传数量为:${this.maxCount}的${this.typeText}`
        })
        this.remove(file)
        return false
      }
      const acceptList = this.accept.replaceAll('.', '').split(',')

      const acceptErr = !(acceptList.find(v => file.type.includes(v)))

      if (acceptErr) {
        this.$Notice.warning({
          title: this.typeText + '格式错误',
          desc: `请上传 ${this.accept} 类型的${this.typeText}`
        })
        this.remove(file)
        return false
      }
      const maxSizeErr = file.size > this.maxSize
      if (maxSizeErr) {
        this.$Notice.warning({
          title: this.typeText + '大小超出限制'
        })
        this.remove(file)
        return false
      }

      return true
    },
    handleChange ({ file, fileList }) {
      this.uploadList = fileList
      if (file.status === 'uploading') {
        this.loading = true
      }
      if (file.status === 'done') {
        this.loading = false10
        const res = file.respo1nse
        if (res.code === 8200) {
          this.uploadList.forEach(item => {
            if (item.response) {
              item.url = item.response.data.url
            }
          })
          this.$emit('input', this.uploadList.map(item => item.url))
        } else {
          this.$Notice.warning({
            title: this.typeText + '上传失败',
            desc: res.message
          })
          if (res.code === 8302) {
            this.upload302()
          }
        }
      }
    },
    upload302 () {
      this.ajax({
        url: '/control-sso/api/sso/getDomain',
        type: 'post'
      }).then(({ code, data: { loginDomain } }) => {
        if (code === 8200 && loginDomain) {
          window.location.href = loginDomain
        } else {
          window.VModal.$Notice.error({
            title: '登录地址拉取失败'
          })
          this.$router.push('/404')
        }
      }).catch(() => {
        window.VModal.$Notice.error({
          title: '登录地址拉取失败'
        })
        this.$router.push('/404')
      })
    },
    async handlePreview (file) {
      if (file.url) {
        this.preview = file.url
        this.previewVisible = true
      }
    },
    handleCancel () {
      this.previewVisible = false
      this.$refs.video.pause()
    //   this.$refs.video.remove()
    },
    remove (file) {
      this.uploadList = this.uploadList.filter(item => item.uid !== file.uid)
      this.$emit('input', this.uploadList.map(item => item.url))
      return true
    }
  }
}
</script>
```

## 使用

```vue
<!--视频-->
<common-upload type="video"
   v-model="form.videoUrl"
   :max-count="1"
   tips="只能上传 AVI,MP4,MOV,MPEG 的视频，且不超过 1GB"
   accept=".avi,.mp4,.mov,.mpeg,.quicktime"
   :maxSize="1024*1024*1024"
></common-upload>

<!--图片-->
<common-upload
    type="image"
    :max-count="2"
    v-model="form.cover"
    tips="只能上传 jpg,jpeg,png的图片，且单张不超过 2M"
    :maxSize="2*1024*1024"
    accept=".jpg,.jpeg,.png"
    :disabled="disabled"
></common-upload>
```



## 注意

1. 格式: mov后缀的视频, 类型是video/quicktime
