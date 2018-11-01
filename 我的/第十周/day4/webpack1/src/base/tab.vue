<template>
    <div>
        <div class='foot'> 
         <router-link to='/home'>
         <i class="iconfont icon-zhuye"></i>
         首页</router-link>
        <router-link :to='{name:"mList",params:{title:"列表"}}'>
         <i class="iconfont icon-chazhaobiaodanliebiao"></i>
        列表</router-link>
        <router-link to='/collect'>
         <i class="iconfont icon-shoucang"></i>
        收藏</router-link>
        <router-link to='/user'>
         <i class="iconfont icon-gerenzhongxin"></i>
        增加</router-link>
        </div>
       
    </div>
</template>
<script>
export default {};
</script>
<style scoped lang='less'>
.foot {
   position: fixed;
  bottom:0;
  left:0;
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  height: 50px;
  background: rgb(214, 205, 166);
  a {
    flex:1;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:#fff;
    font-size: 12px;

    i{
      font-size:18px;
      color:white;
    }
  }
  a.router-link-active{
    color:red;
  
    i{
      font-size:18px;
      color:red;
    }
  }
}
</style>


