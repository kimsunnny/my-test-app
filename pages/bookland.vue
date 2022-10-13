<template>
  <div class="box bookland">
    <!-- 상단 링크 -->
    <NuxtLink class="back-link hover-bigger" to="/"><span class="sr-only">뒤로 가기</span></NuxtLink>
    <NuxtLink to="/" class="logo-link hover-bigger"><span class="sr-only">메인페이지 이동</span></NuxtLink>
    <!-- 도서 슬라이더 -->
    <client-only>
      <swiper class="bookland-swiper" ref="booklandSwiper" :options="swiperOptions">        
        <swiper-slide><NuxtLink :to="{name: 'contents-id', params:{id: 1, theme: 'bookland'}}" class="book hover-smaller"><img src="~/static/img/book1.png" alt="달나라에 갈까요?"></NuxtLink></swiper-slide>
        <swiper-slide><NuxtLink :to="{name: 'contents-id', params:{id: 2, theme: 'bookland'}}" class="book hover-smaller"><img src="~/static/img/book2.png" alt="가나다라"></NuxtLink></swiper-slide>
        <swiper-slide><NuxtLink :to="{name: 'contents-id', params:{id: 3, theme: 'bookland'}}" class="book hover-smaller"><img src="~/static/img/book3.png" alt="장갑"></NuxtLink></swiper-slide>
        <swiper-slide><NuxtLink :to="{name: 'contents-id', params:{id: 4, theme: 'bookland'}}" class="book hover-smaller"><img src="~/static/img/book4.png" alt="집에서 길러요"></NuxtLink></swiper-slide>
        <swiper-slide><NuxtLink :to="{name: 'contents-id', params:{id: 5, theme: 'bookland'}}" class="book hover-smaller"><img src="~/static/img/book5.png" alt="작고 빨간 닭"></NuxtLink></swiper-slide>
      </swiper>
    </client-only>
    <!-- 카테고리 링크 -->
    <NuxtLink to="/category" class="category-link hover-bigger"><span class="sr-only">카테고리</span></NuxtLink>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'BookLand',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
          slidesPerView: '3.43',
          spaceBetween: '3%',
          centeredSlides: false,
          speed: 500,
          loop: false,
          pagination: false,
          on: {
            update: function () {
              const books = document.querySelectorAll('.book');
              for (const book of books) {
                book.classList.add('loaded');
              }
            },
          },
      },
    }
  },
  methods: {
    UpdatedEvent() {
      const $studySwiper = document.querySelector('.bookland-swiper');
      $studySwiper.style.opacity = '1';
    },
  }, 
  updated() {
    this.UpdatedEvent();
  }
}
</script>
<style lang="scss">
  .bookland{
    background: url(~/static/img/bookland-bg.png) no-repeat center / cover;
    .back-link{
      position: absolute;
      top: 8.75%;
      left: 2.734375%;
      display: block;
      width: 2.734375%;
      height: 3.75%;
      background: url(~/static/img/icon-back.png) no-repeat center / cover;
      &:hover{
        transform: scale(1.05);
      }
    }
    .logo-link{
      position: absolute;
      top: 5.875%;
      left: 7.5%;
      width: 12.03125%;
      height: 6.375%;
      background: url(~/static/img/bookland-logo.png) no-repeat center / cover;
      &:hover{
        transform: scale(1.03);
      }
    }
    .category-link{
      position: absolute;
      bottom: 5.375%;
      right: 17.96875%;
      width: 40.703125%;
      height: 11.125%;
      background: url(~/static/img/bookland-category.png) no-repeat center / cover;
      transition: all .3s;
    }
    .bookland-swiper{
      position: absolute;
      top: 29.25%;
      right: 0;
      width: 72.265625%;
      opacity: 0;
    }
  }
</style>