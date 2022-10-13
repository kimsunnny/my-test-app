<template>
  <div class="third-round">
    <client-only>
      <swiper class="study-swiper" ref="studySwiper" :options="swiperOptions">        
        <swiper-slide><NuxtLink :to="{name: 'contents-id', params:{id: 31, theme: 'studylandOneStep'}}" class="card hover-smaller"><img src="~/img/society-card.png" alt="사회"></NuxtLink></swiper-slide>
        <swiper-slide><NuxtLink :to="{name: 'contents-id', params:{id: 32, theme: 'studylandOneStep'}}" class="card hover-smaller"><img src="~/img/science-card.png" alt="과학"></NuxtLink></swiper-slide>
        <swiper-slide><NuxtLink :to="{name: 'contents-id', params:{id: 33, theme: 'studylandOneStep'}}" class="card hover-smaller"><img src="~/img/english-card.png" alt="영어"></NuxtLink></swiper-slide>
        <swiper-slide><NuxtLink :to="{name: 'contents-id', params:{id: 34, theme: 'studylandOneStep'}}" class="card hover-smaller"><img src="~/img/play-card.png" alt="놀이"></NuxtLink></swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'FirstRound',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      tabIdx: 2,
      swiperOptions: {
        slidesPerView: '2.89',
        spaceBetween: '2.55%',
        centeredSlides: false,
        speed: 500,
        loop: false,
        pagination: false,
      },
    }
  },
  methods: {
    setTabIdx(){
      this.$emit('tabEvent', this.tabIdx);
    },
    UpdatedEvent() {
      const $studySwiper = document.querySelector('.study-swiper');
      $studySwiper.style.opacity = '1';
    },
  }, 
  mounted() {
    this.setTabIdx();
  },
  updated() {
    this.UpdatedEvent();
  }
}
</script>
<style lang="scss">
</style>