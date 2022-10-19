<template>
  <div id="app">
    <div class="wrap">
      <Nuxt />
    </div>
  </div>
</template>
<script>
  import { commonFn } from '~/assets/js/common.js';
  export default {
    head() {
      return {
        title: '회사명',
        meta: [
          { 
            name: '타이틀', 
            content: '설명' 
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
  @import '~/assets/scss/app';
</style>