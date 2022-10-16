<template>
  <div class="wrap">
    <div class="inner">
      <Nuxt />
    </div>
  </div>
</template>
<script>
  import { commonFn } from '~/assets/js/common.js';
  export default {
    head() {
      return {
        title: '캠핑 무료체험 페이지 | 금성출판사',
        meta: [
          { 
            name: '캠핑 무료체험 페이지 | 금성출판사', 
            content: '캠핑 무료체험 페이지 | 금성출판사' 
          }
        ],
      }
    },
    data() {
      return {
      }
    },
    mounted() {
      commonFn();
    },
  }
</script>
<style lang="scss">
  @import '~/assets/scss/common';
</style>