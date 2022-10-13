<template>
  <div class="content-wrap">
    <ContentsFrame :url=params />
  </div>
</template>
<script>
import ContentsFrame from '../../components/ContentsFrame.vue';
  export default {
    data() {
        return {
            params: "",
        };
    },
    mounted() {
        this.params = this.$route.params.id;
    },
    components: { ContentsFrame }
}
</script>
<style>
  .content-wrap{
    width: 100%;
    height: 100%;
  }
</style>
