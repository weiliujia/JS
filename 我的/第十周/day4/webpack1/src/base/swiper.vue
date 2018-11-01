<template>
<!-- <div class="conent"> -->
     <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
       <img :src="slide" alt="">
        </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
<!-- </div> -->

</template>

<script>
export default {
  name: "carrousel",
 /*  props:['swiperSlides'], */
  data() {
    return {
      swiperOption: {
        autoplay: 2000,
        setWrapperSize: true,
        pagination: ".swiper-pagination",
        observeParents: true,
        loop: true,
        paginationClickable: true,
        autoplayDisableOnInteraction: false,
      },
    swiperSlides:['https://m.360buyimg.com/mobilecms/s1125x549_jfs/t11578/40/1816587279/47894/42dba539/5a0d36f7N149b127f.jpg!q70.jpg','https://img1.360buyimg.com/da/jfs/t14110/207/712950073/377098/a23521b1/5a129386N7f39c763.jpg','https://img1.360buyimg.com/da/jfs/t13657/160/507550199/94542/6e62a404/5a0d3658Nce159095.jpg']
    };
  }
};
</script>
<style scoped>
img{
    width: 100%;
    
}
</style>

