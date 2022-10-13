<template>
  <div class="box launcher">
    <NuxtLink to="/" class="logo-link link-img hover-bigger"><span class="sr-only">메인페이지 이동</span></NuxtLink>
    <NuxtLink to="/studyland/onestep/first" class="move-link move-studyland link-img hover-bigger"><span class="sr-only">스터디랜드 이동</span></NuxtLink>
    <NuxtLink to="/bookland" class="move-link move-bookland link-img hover-bigger"><span class="sr-only">북랜드 이동</span></NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
<style lang="scss">
  .launcher{
    background: url(/img/main-bg.png) no-repeat center / cover;
    .logo-link{
      position: absolute;
      top: 6.75%;
      left: 43.125%;
      width: 13.75%;
      height: 7.375%;
      background-image: url(/img/main-logo.png);
    }
    .move-link{
      width: 15.546875%;
      height: 13.625%;
      position: absolute;
      top: 40.5%;
      background-position: center;
      background-size: cover;
      &.move-studyland{
        left: 30.78125%;
        background-image: url(/img/move-studyland.png);
      }
      &.move-bookland{
        right: 30.78125%;
        background-image: url(/img/move-bookland.png);
      }
    }
  }
</style>