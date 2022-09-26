<template>
  <section>
    <div class="genImageBtn">
      <button @click="DYImage()">生成抖音图片</button>
      <button>生成小红书图片</button>
      <button>生成B站图片</button>
    </div>
    <div class="originalDom">
      <question-page-douyin :title="title" @question="done" :random="random"></question-page-douyin>
      <!--     <questionPage :title="title" @question="done" :random="random"></questionPage>-->
      <answer :content="content" :type="type" :title="title" :random="random" @answer="done"></answer>

      <list @done="done" :title="title" :random="random"></list>
    </div>

    <div class="preview" v-if="showPreview" @click="showPreview = false">
      <button v-if="!loading" @click.stop="download" class="downloadBtn">下载</button>
      <div v-if="loading" class="loading">加载中...</div>
      <div v-else class="imgShow">
        <img v-for="(item, index) in imgList" @click.stop :src="item.base64" width="200" alt="" :key="index" />
      </div>
    </div>
  </section>
 <section>
 </section>
</template>

<script>
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
  data() {
    return {
      title: "",
      content: null,
      type: "",
      imgList: [],
      state: 0,
      loading: false,
      showPreview: false,
      random: Math.random()
    }
  },

  created() {
    console.log(usePageData().value)
  },
  mounted() {
  },
  methods: {
    DYImage() {
      this.showPreview = true
      this.loading = true
      this.state = 0
      this.imgList = []
      this.title = usePageData().value.title
      this.type = document.querySelector("summary").innerText
      this.content = document.querySelectorAll(".custom-container > *:not(summary)")
      this.random = Math.random()
      // console.log(this.content)
    },
    done($event) {
      this.state++
      // console.log($event)
      this.imgList.push(...$event)
      if (this.state === 3) {
        console.log(this.imgList)
        this.loading = false
      }
    },
    download() {
      if (!this.loading) {
        this.imgList.forEach(item => {
          imageSave(item.base64, item.filename)
        })
      }
    }
  }
}
</script>

<!--<script>-->
<!--import { defineComponent,h } from 'vue';-->
<!--import { usePageData } from "@vuepress/client"-->
<!--export default defineComponent({-->
<!--  render() {-->
<!--    const _this = this-->
<!--    return h('div',{-->
<!--      onClick() {-->
<!--        console.log(document.querySelector(".custom-container p").innerHTML)-->
<!--        // console.log(usePageData().value)-->
<!--        // console.log(usePageData().value.path)-->
<!--        // console.log(usePageData().value.excerpt)-->
<!--        // console.log(usePageData().value.key)-->
<!--        // console.log(usePageData().value.lang)-->
<!--        // console.log(usePageData().value.frontmatter)-->
<!--        // console.log(usePageData().value.headers)-->
<!--        // console.log(usePageData().value.title)-->
<!--      }-->
<!--    }, 123)-->
<!--  },-->
<!--})-->

<!--</script>-->

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
  margin-top: 50px;
  position: absolute;
  right: 10px;
}
.originalDom {
  z-index: -10000;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.01;
}
.preview {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
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
.imgShow {
  margin-top: 150px;
  text-align: center;
  overflow: auto;
  height: 300px;
}
</style>
