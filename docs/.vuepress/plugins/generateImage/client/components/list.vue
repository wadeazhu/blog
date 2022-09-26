<template>
  <section class="wrapper" ref="list">
    <div class="inner">
      <div class="title"><img src="./6.png" width="35" alt="">往期面试题列表</div>
      <div class="list">
        <div v-for="(item, index) in data" :key="index" class="item">{{index + 1}}、{{item.text}}</div>
        <div v-if="length > 11">......</div>
      </div>
      <div class="footer"><img src="./1.png" width="20" alt="" />每天一个前端面试题，私"1"get更多资料</div>
    </div>
  </section>
</template>

<script>
import {data} from "./list.js"
export default {
  name: "list",
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
      data: data.reverse().slice(0, 9),
      length: data.length
    }
  },
  watch: {
    "random": function (newVal, oldVal) {
      if (newVal) {
        this.genImgBase64()
      }
    }
  },
  methods: {
    genImgBase64() {
      html2canvas(this.$refs.list, {
        foreignObjectRendering: true,
        height: 720,
        width: 540,
        dpi: 192
      }).then(canvas => ({base64: canvas.toDataURL("image/png"), filename: `${this.title}_${1}`}))
          .then(base64 => {
            this.$emit("done", [base64])
          })
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 540px;
  height: 720px;
  background: #f3f3f3;
  box-sizing: border-box;
  position: relative;
  z-index: 999999999;
}
.inner {
  position: absolute;
  top: 13px;
  bottom: 13px;
  left: 13px;
  right: 13px;
  background: #fff;
  border-radius: 5px;
  color: #007fff;
  /*color: #465c8b;*/
  /*color: #539ff3;*/
  /*color: #666;*/
  /*color: #51A2DA;*/
  font-size: 18px;
  padding: 20px 20px 60px;
}
.item {
  margin-bottom: 18px;
}

.title {
  /*text-align: center;*/
  color: #585779;

  font-size: 30px;
  /*margin-top: 50px;*/
  /*text-shadow: 5px 3px 12px #a1a1a1;*/
}

img {
  vertical-align: middle;
}
.title {
  margin-top: 15px;
  margin-bottom: 36px;
}
.title img {
  margin-right: 10px;
  vertical-align: -7px;
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
