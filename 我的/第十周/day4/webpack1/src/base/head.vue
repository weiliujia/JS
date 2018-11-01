<template>
        <div class='head'> 
            {{title}}
        <slot></slot>
        </div>
</template>
<script>
export default {
    props:['title'],
    data(){
        return{}
    }
};
</script>
<style scoped lang='less'>
.head {
  position: fixed;
  top:0;
  left:0;
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  height: 50px;
  background: rgb(235, 235, 231);
  font-size: 20px;
}
</style>


