<template>
  <div class="box category">
    <!-- 뒤로가기 버튼 -->
    <button class="back-link hover-bigger" @click="backFn"><span class="sr-only">뒤로 가기</span></button>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data() {
    return {
    }
  },
  methods: {
    backFn(){
      this.$router.go(-1);
    },
  }, 
}
</script>
<style lang="scss">
  .category{
    background: url(/img/category-bg.png) no-repeat center / cover;
    .back-link{
      position: absolute;
      top: 6%;
      left: 2.734375%;
      display: block;
      width: 3.828125%;
      height: 6.125%;
      background: url(/img/icon-back2.png) no-repeat center / cover;
      &:hover{
        transform: scale(1.05);
      }
    }
  }
</style>