<template>
  <div class="details">
    <div class="top">
      <Icon type="ios-undo-outline" @click="pre"></Icon>
      <span class="title">商品列表</span>
    </div>
    <div v-if="hide_goods">
      <div class="prompt">
        <span><Icon type="information-circled"></Icon> 未搜索到相关产品,请重新返回操作</span>
      </div>
      <div class="center_text">
        <span>可能下面有你要找的宝贝！</span>
      </div>
    </div>
    <div class="all_img">
      <div class="ipt_box" v-for="(item, index) in imgData" :key="index">
        <div class="" @click="goToUrl(item.url)"><img class="img" :src="item.image_url"></div>
        <div class="text" @click="goToUrl(item.url)">{{item.name}}</div>
      </div>
    </div>
    <div class="editor" @click="editor">编辑</div>
  </div>
</template>
<script type="text/javascript">
import {
  getSession
} from '@/script/util'
export default {
  data() {
    return {
      hide_goods: false,
      imgData: [],
      imgFile: {}
    }
  },
  mounted() {
    this.$store.commit('REFRESH', true)
    this.imgData = JSON.parse(getSession('imgData'))
  },
  methods: {
    pre() {
      this.$router.push({ path: '/' })
    },
    goToUrl(url) {
      if (url && url != 'url') {
        window.location.href = url
      }
    },
    editor() {
      var url = window.location.protocol + '//' + window.location.host + '/#/imgBox'
      console.log(url)
      // window.location.reload()
      window.location.href = url
    }
  }
}

</script>
<style scoped>
.prompt {
  width: 100%;
  height: 1.54rem;
  text-align: center;
  line-height: 1.54rem;
  background-color: rgba(0, 0, 0, 0.06);
  font-size: 0.24rem;
}

.center_text {
  width: 100%;
  height: 1.37rem;
  text-align: center;
  line-height: 1.37rem;
  font-size: 0.32rem;
  font-weight: 900;
}

.all_img {
  width: 100%;
  height: 100%;
  padding-top: 0.2rem;
  /* padding-right: 0.1rem; */
  padding-left: 0.1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  overflow-x: hidden;
}

.ipt_box {
  width: 3.7rem;
  height: 5.51rem;
  padding-right: 0.1rem;
}

.text {
  font-size: 0.24rem;
  font-weight: 900;
  margin-left: 0.21rem;
}

.link {
  font-size: 0.2rem;
  color: rgba(0, 0, 0, 0.5);
  word-break: break-all;
  margin-left: 0.21rem;
}

.money {
  font-size: 0.24rem;
  color: rgb(255, 222, 51);
  margin-left: 0.21rem;
}

.img {
  width: 3.7rem;
  height: 3.7rem;
  margin-bottom: 0.21rem;
}

.editor {
  width: 1.8rem;
  height: 1.8rem;
  /*border:1px solid red;*/
  position: fixed;
  right: -0.5rem;
  bottom: -0.5rem;
  border-radius: 70%;
  background-color: skyblue;
  line-height: 1.5rem;
  font-size: 0.3rem;
  color: #fff;
  padding-right: 0.3rem;
}

.return_btn {
  color: blue;
  font-size: 0.3rem
}

.top {
  background-color: #fff;
  height: 0.8rem;
  text-align: left;
  position: relative;
  border-bottom: 0.02rem solid #999;
}

.top i {
  font-size: 0.8rem;
  color: #777;
  margin-left: 0.2rem;
  text-align: left;
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.35rem;
  color: #000;
}

</style>
