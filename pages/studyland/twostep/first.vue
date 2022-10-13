<template>
  <div class="first-round">
    <client-only>
      <swiper class="study-swiper" :options="swiperOptions">        
        <swiper-slide><NuxtLink :to="{name: 'contents-id', params:{id: 11, theme: 'studylandTwoStep'}}" class="card hover-smaller"><img src="/img/story-card.png" alt="동화"></NuxtLink></swiper-slide>
        <swiper-slide><NuxtLink :to="{name: 'contents-id', params:{id: 12, theme: 'studylandTwoStep'}}" class="card hover-smaller"><img src="/img/korean-card.png" alt="한글"></NuxtLink></swiper-slide>
        <swiper-slide><NuxtLink :to="{name: 'contents-id', params:{id: 13, theme: 'studylandTwoStep'}}" class="card hover-smaller"><img src="/img/math-card.png" alt="수학"></NuxtLink></swiper-slide>
        <swiper-slide><NuxtLink :to="{name: 'contents-id', params:{id: 14, theme: 'studylandTwoStep'}}" class="card hover-smaller"><img src="/img/play-card.png" alt="놀이"></NuxtLink></swiper-slide>
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
      tabIdx: 0,
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
    setTabIdx() {
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