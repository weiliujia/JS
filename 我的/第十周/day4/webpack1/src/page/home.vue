//组件的解构
<template>
<div class="box">
    <Head>首页</Head>
  
   <div class="content">
      <!--  <Swiper :swiperSlides='sliders'></Swiper> -->
    <Swiper></Swiper>
    <h3>热门图书</h3>
    <ul>
        <li v-for="(item,index) in books" :key='index'>
          <img :src="item.bookCover" :alt="item.bookInfo">
          <div>{{item.bookName}}</div>
          <div>￥：{{item.bookPrice}}</div>
        </li>
    </ul>
   </div>
</div>
</template>

//行为加数据
<script>
import Head from "../base/head.vue";
import Swiper from "../base/swiper.vue";
/* import {getSliders} from "../api/ajax.js"; */
import { hotbooks } from "../api/ajax.js";
export default {
  /*  async created(){
      let {data} = await getSliders();

      this.sliders = data;
    }, */
  created() {
    hotbooks().then(res => {
      console.log(res);
      this.books = res;
    });
  },
  data() {
    return {
      /*  sliders:[] */
      books: []
    };
  },

  // methods: {},
  components: {
    Swiper,
    Head
  }
};
</script>
//样式一适配带全局，需要加一个属性scoped【表示当前的样式】
<style scoped lang='less'>
.box {
  h3 {
    line-height: 30px;
    margin-left: 15px;
  }
  ul li {
    float: left;
    width: 50%;
    box-sizing: border-box;
    padding: 10px;
    img {
      width: 120px;
    }
  }
}
</style>

