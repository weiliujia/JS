
<template>
   <div id="app">
       {{msg}}
       <!-- <Home></Home> -->
       <router-view></router-view>
       <Tab></Tab>
       
   </div>
</template>

<script>
import Home from "./page/home.vue";
import Tab from "./base/tab.vue";

import "swiper/dist/css/swiper.css";

export default {
  data() {
    return {
      msg: "Hello word ！"
    };
  },
  methods: {},
  components: {
    Home,
    Tab
  }
};
</script>
<style>
a {
  text-decoration: none;
}
html,
body {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
</style>
<style lang="less">
.content {
  position: fixed;
  width: 100%;
  top: 50px;
  bottom: 50px;
  overflow: auto;
}

</style>
