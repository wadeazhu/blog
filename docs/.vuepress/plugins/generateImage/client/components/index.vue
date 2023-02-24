<template>
  <section>
    <index1></index1>
    <div class="genImageBtn">
      <button @click="image()">生成通用图片</button>
    </div>
<<<<<<< HEAD
<!--    @click="showPreview = false"-->
    <div class="preview" ref="preview" v-show="showPreview">
=======
    <div class="originalDom">
      <question-page-douyin :title="title" @question="done" :random="random"></question-page-douyin>
      <!--     <questionPage :title="title" @question="done" :random="random"></questionPage>-->
      <answer :content="content" :type="type" :title="title" :random="random" @answer="done"></answer>

      <list @done="done" :title="title" :random="random"></list>
    </div>

    <div class="preview" v-if="showPreview" @click="showPreview = false">
>>>>>>> 12cc07a (meta有哪些属性，作用是什么？)
      <button v-if="!loading" @click.stop="download" class="downloadBtn">下载</button>
      <button @click="close()" class="downloadBtn close">关闭</button>
      <div v-if="loading" class="loading">加载中...</div>

    </div>
  </section>
  <section>
  </section>
</template>

<script>
<<<<<<< HEAD

import "./../utils/screenshots.css"
import {generateImage, close, download} from "./../utils/screenshots.js"
// import "./../utils/html2canvas.js";
// import html2canvas from "html2canvas";
// import "./../utils/html2canvas2.js"
import {imageSave} from "../utils/base64Save";
import index1 from "./index1.vue";
export default {
  name: "index",
  components: {index1},
=======
import { usePageData } from "@vuepress/client"
import questionPage from "./questionPage.vue";
import questionPageDouyin from "./questionPageDouyin.vue";
import answer from "./answer.vue"
import { imageSave } from "../utils/base64Save"
import list from "./list.vue";
export default {
  name: "index",
  components: {
    questionPageDouyin,
    questionPage,
    answer,
    list
  },
>>>>>>> 12cc07a (meta有哪些属性，作用是什么？)
  data() {
    return {
      showPreview: false,
      loading: false,
    }
  },
  methods: {
    image() {
      let dom = document.querySelector(".theme-default-content > div")
      // dom = document.body
      // dom = document.querySelector(".page")
      const parentDom = this.$refs.preview
      generateImage(dom, parentDom).then(() => {
        this.showPreview = true
      })
      // html2canvas(dom, {
      //   x: -dom.offsetLeft,
      //   foreignObjectRendering: true,
      //   // dpi: 192,
      //   scale: 2,
      //   background: "#fff"
      // }).then(canvas => {
      //   // canvas.className = 'sourceCanvas'
      //   // canvas.style.position = 'absolute'
      //   // canvas.style.top = 0
      //   // canvas.style.left = 0
      //   // canvas.style.width = canvas.width + 'px'
      //   // canvas.style.height = canvas.height + 'px'
      //   // parentDom.appendChild(canvas)
      //   const base64 = canvas.toDataURL("image/png")
      //   imageSave(base64, '测试')
      //   return {width: canvas.width, height: canvas.height, canvas}
      // })
    },
<<<<<<< HEAD
    close() {
      let dom = document.querySelector(".theme-default-content > div")
      close(dom)
      this.showPreview = false
=======
    done($event) {
      this.state++
      // console.log($event)
      this.imgList.push(...$event)
      if (this.state === 3) {
        console.log(this.imgList)
        this.loading = false
      }
>>>>>>> 12cc07a (meta有哪些属性，作用是什么？)
    },
    download() {
      download()
    },
  }
}
</script>

<style scoped>
.genImageBtn {
  z-index: 99999;
  position: fixed;
  right: 30px;
  bottom: 50px;
}
.genImageBtn button, .downloadBtn {
  line-height: 30px;
  margin-left: 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  /*color: #666;*/
  padding: 1px 10px;
  cursor: pointer;
}
.downloadBtn {
  width: 100px;
  /*margin-top: 50px;*/
  position: fixed;
  right: 10px;
  top: 50px;
}
<<<<<<< HEAD
.close {
  top: 10px;
  /*margin-top: 10px;*/
=======
.originalDom {
  z-index: -10000;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.01;
>>>>>>> 12cc07a (meta有哪些属性，作用是什么？)
}
.preview {
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  z-index: 9999999;
}
.loading {
  width: 100vw;
  height: 100vh;
  text-align: center;
  line-height: 100vh;
}
</style>
