<template>
  <section>
    <button @click="genImgBase64()">下载</button>
    <img :src=img alt="">
    <div class="wrapper" ref="question">
      <div class="title"><img src="./2.png" width="40">每日一个前端面试题</div>
      <section class="content">
        <div>{{title}}</div>
      </section>
      <div class="footer">
<!--        <img src="./3.png" alt="" width="30" />-->
<!--        专注于前端辅导 | 前端面试-->
        @爱吃草莓的程序员
      </div>
    </div>
  </section>
</template>

<script>
import "./../utils/html2canvas.js"
export default {
  name: "questionPage",
  props: {
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
      img: ""
    }
  },
  watch: {
    "random": function (newVal) {
      if (newVal) {
        this.genImgBase64()
      }
    }
  },
  methods: {
    genImgBase64() {
      html2canvas(this.$refs.question, {
        foreignObjectRendering: true,
        height: 960,
        width: 540,
        dpi: 192
      }).then(canvas => ({base64: canvas.toDataURL("image/png"), filename: `${this.title}_${2}`}))
      .then(base64 => {
        this.$emit("question", [base64])
      })
    }
  }
}
</script>

<style scoped lang="css">
.wrapper {
  width: 540px;
  height: 720px;
  background: #8993cb;
  padding-top: 100px;
  box-sizing: border-box;
  position: relative;
}
.title {
  text-align: center;
  color: #fff;
  font-size: 30px;
  margin-top: 50px;
}

img {
  vertical-align: middle;
}

.title img {
  margin-right: 10px;
  vertical-align: -7px;
}

.content {
  text-align: center;
  color: #222;
  margin-top: 150px;
  padding:0 50px;
}
.content >div {
  padding: 20px;
  /*font-weight: bold;*/
  font-size: 30px;
  border-radius: 15px;
  background: #fff;
  text-align: left;
}
.footer {
  text-align: center;
  color: #fff;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
}
.footer:before {
  content: "";
  position: absolute;
  width: 80px;
  height: 1px;
  top: 50%;
  left: -109px;
  background: #ffffff6e;
  /*transform: scale(0.5);*/
}

.footer:after {
  content: "";
  position: absolute;
  width: 80px;
  height: 1px;
  top: 50%;
  right: -109px;
  background: #ffffff6e;
  /*transform: scale(0.5);*/
}
</style>