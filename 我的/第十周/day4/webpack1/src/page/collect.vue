<template>
<div >
    <Head>收藏</Head>
    <div class="content">
      
      <ul class="list">
        <li v-for='(item,index) in books' :key='index'>
            <img :src="item.bookCover" :alt="item.bookInfo">
            <div class="right">
              <h4>{{item.bookName}}</h4>
              <div>￥：{{item.bookPrice}}</div>
            
            </div>
        </li>
      </ul>
    </div>
  </div> 
</template>

<script>
import Head from "../base/head.vue";
import { hotbooks } from "../api/ajax.js";
export default {
  created(){
  hotbooks().then(res=>{
  this.books = res;
})
  },
  data() {
    return {
    books:[],

    };
  },
  components: {
    Head
  }
};
</script>
<style scoped lang='less'>
.list{
  li{
    box-sizing: border-box;
    padding: 5px;
  }
  img{
    width: 40%;
    margin-left: 20px;
  }
  .right{
    float: right;
    width: 50%;
    // text-align: left;
    line-height: 30px;
    font-size: 15px;
  }
}
</style>

