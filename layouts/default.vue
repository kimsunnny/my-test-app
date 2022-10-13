<template>
  <div class="wrap" v-bind:class="[isLoading ? 'before-load' : '']">
    <div class="loading">
      <svg class="loading-circle">
        <circle cx="50%" cy="50%" r="25"></circle>
      </svg>
    </div>
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
        isLoading: true,
      }
    },
    mounted() {
      commonFn();
      this.isLoading = false;
    },
  }
</script>
<style lang="scss">
  @import '~/assets/scss/common';
</style>