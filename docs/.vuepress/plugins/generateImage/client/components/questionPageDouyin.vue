<template>
  <section>
<!--    <button @click="genImgBase64()">下载</button>-->
<!--    <img :src=img alt="">-->
    <div class="wrapper" ref="question" style="position: absolute;top: 0;left: 0">
      <div class="title"><img src="./2.png" width="30">每日一个前端面试题</div>
      <section class="content">
<!--        <div><span>问题:</span> </div>-->
        <div>{{title}}</div>
      </section>
<!--      <div class="footer">-->
<!--        &lt;!&ndash;        <img src="./3.png" alt="" width="30" />&ndash;&gt;-->
<!--        &lt;!&ndash;        专注于前端辅导 | 前端面试&ndash;&gt;-->
<!--        @爱吃草莓的程序员-->
<!--      </div>-->
    </div>
  </section>
</template>

<script>
export default {
  name: "questionPageDouyin",
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
        setTimeout(() => {
          this.genImgBase64()
        })
      }
    }
  },
  methods: {
    genImgBase64() {
      html2canvas(this.$refs.question, {
        foreignObjectRendering: true,
        height: 720,
        width: 540,
        dpi: 192
      }).then(canvas => ({base64: canvas.toDataURL("image/png"), filename: `${this.title}_${2}`}))
          .then(base64 => {
            // this.img = base64.base64
            console.log(base64.base64)
            this.$emit("question", [base64])
          })
    }
  }
}
</script>

<style scoped lang="css">
@import "./../static/font/heiti.css";
.wrapper {
  /*background: url("./img_1.png");*/
  width: 540px;
  height: 720px;
  background: #4f705f;
  padding-top: 30px;
  box-sizing: border-box;
  position: relative;
}
.title {
  text-align: center;
  color: #f8e106;
  font-size: 19px;
  /*margin-top: 50px;*/
  /*text-shadow: 5px 3px 12px #a1a1a1;*/
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
  color: #f8e106;
  color: #fff;
  margin-top: 139px;
  height: 320px;
  /*background: #fff;*/
  display: flex;
  align-items: center;
  /*background: #ffffff9e;*/

}
.content >div {
  font-family: heiti;
  padding: 20px;
  /*font-weight: bold;*/
  font-size: 42px;
  /*border-radius: 15px;*/
  text-align: left;
  line-height: 76px;
  font-weight: bold;
}
.content span {
  color: #fff;
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
