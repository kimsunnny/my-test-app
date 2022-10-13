<template>
  <div class="box calendar">
    <!-- 뒤로가기 버튼 -->
    <button class="back-link hover-bigger" @click="backFn"><span class="sr-only">뒤로 가기</span></button>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
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
  .calendar{
    background: url(~/static/img/calendar-bg.png) no-repeat center / cover;
    .back-link{
      position: absolute;
      top: 3.75%;
      left: 2.381%;
      display: block;
      width: 4.921875%;
      height: 8.1875%;
      background: url(~/static/img/mystudy-back.png) no-repeat center / cover;
      &:hover{
        transform: scale(1.05);
      }
    }
  }
</style>