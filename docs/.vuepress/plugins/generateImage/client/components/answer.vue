<template>
  <div>
<!--    <button @click="download()">下载</button>-->
<!--    <img :src=img alt="">-->
    <section class="wrapper" ref="answer" v-for="(card, index) in cards" :key="index" style="position: absolute; left: 0; top: 0">
      <section class="inner">
        <div v-html="card.innerHTML"></div>
        <div class="footer"><img src="./1.png" :width="20" alt="" />每天一个前端面试题，私"1"get更多资料</div>
<!--        <div class="type"><img src="./4.png" alt="" width="40">{{type}}</div>-->
<!--        <div class="content" v-for="(item, index) in content"  :key="index" >-->
<!--          <img src="./5.png" alt="" width="40" class="summary" />-->
<!--          <div v-html="item.outerHTML"></div>-->
<!--        </div>-->
      </section>
    </section>
  </div>
</template>

<script>
import "./../utils/html2canvas.js"
import duigou from "./4.png"
import taiyang from "./5.png"
export default {
  name: "answer",
  props: {
    content: {
      type: [null],
      default: () => null
    },
    type: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    random: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      img: "",
      cards: []
    }
  },
  watch: {
    "random": function (newVal) {
      if (newVal) {
        this.genImgBase64()
      }
    }
  },
  mounted() {
    // this.genImgBase64()
  },
  methods: {
    getDiv() {
      let $div = document.querySelector(".left10000 .innerAutoHeight")
      if (!$div) {
        const $wrapper = document.createElement("section")
        const $inner = document.createElement("section")
        $wrapper.classList.add("wrapper")
        $inner.classList.add("innerAutoHeight")
        $wrapper.classList.add("left10000")
        $wrapper.appendChild($inner)
        document.body.appendChild($wrapper)
        $div = $inner
      }else {
        $div.innerHTML = ""
      }
      return $div
    },
    genImgBase64() {
      this.cards = []
      let $div = this.getDiv()
      if (this.cards.length < 1) {
        $div.innerHTML = `<div class="type"><img src=${duigou} alt="" width="40">${this.type}</div>`
      }
      for (let i = 0 ; i < this.content.length; i++) {
        const curContent = this.content[i].innerHTML
        // 这里每次循环增加一个div.content, 然后往里面的div写字符
        let $content = document.createElement("div")
        $content.className = 'content'

        let $html = document.createElement("p")

        $content.appendChild($html)
        $div.appendChild($content)

        let isAddPreImg = true
        for (let end = 1, start = 0 ; end < curContent.length + 1 ; end++) {
          // 然后往里面去写，如果高度大于某个高度，那么重置这个$div,
          //     然后往里面增加子div，然后从当前位置给他继续些内容
          $html.innerHTML = curContent.slice(start, end)
          if ($div.clientHeight > 615) {
            isAddPreImg = true
            $html.innerHTML = curContent.slice(start, end - 1)
            end--
            start = end
            this.cards.push($div.cloneNode(true))
            $div = this.getDiv()
            $content = document.createElement("div")
            $content.className = 'content'
            $html = document.createElement("p")
            $content.appendChild($html)
            $div.appendChild($content)
          } else {
            if (isAddPreImg && end === 1 && start === 0) {
              const $img = document.createElement("img")
              $img.src = taiyang
              $img.width = 40
              $img.className = "summary"
              $content.insertBefore($img, $html)
              isAddPreImg = false
              console.log($img.clientHeight, $div.clientHeight)
            }
          }
        }
      }

      this.cards.push($div)

      const allPromise = []
      this.$nextTick(() => {
        this.$refs.answer.forEach((item, index) => {
          const genCanvas = html2canvas(item, {
            foreignObjectRendering: true,
            height: 720,
            width: 540,
            dpi: 192
          }).then(canvas => ({base64: canvas.toDataURL("image/png"), filename: `${this.title}_${index + 3}`}))
          allPromise.push(genCanvas)
        })
        Promise.all(allPromise).then(base64List => {
          this.$emit("answer", base64List)
        })
      })
    },
  }
}
</script>

<style lang="css">
img {
  vertical-align: middle;
}
.wrapper {
  width: 540px;
  height: 720px;
  background: #f3f3f3;
  box-sizing: border-box;
  position: relative;
}
.inner {
  position: absolute;
  top: 13px;
  bottom: 13px;
  left: 13px;
  right: 13px;
  background: #fff;
  border-radius: 5px;
  color: #666;
  font-size: 18px;
  padding: 20px 20px 60px;
}
.type {
  font-size: 30px;
  color: #585779;
  margin-top: 15px;
  margin-bottom: 26px;
}
.type img {
  vertical-align: -10px;
  margin-right: 10px;
}
p {
  line-height: 46px;
  letter-spacing: 2px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}
code {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  color: #4e6e8e;
  padding: 0.25rem 0.5rem;
  margin: 0;
  font-size: 0.85em;
  background-color: unset;
  border-radius: 3px;
  overflow-wrap: break-word;
}
.footer {
  position: absolute;
  bottom: 30px;
  right: 34px;
  color: #5c6bc0;
}
.footer img {
  vertical-align: -3px;
  margin-right: 8px;
}
</style>
