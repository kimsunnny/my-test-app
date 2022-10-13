<template>
  <div class="box studyland">
    <!-- 상단 링크 -->
    <NuxtLink to="/" class="logo-link link-img hover-bigger"><span class="sr-only">메인페이지 이동</span></NuxtLink>
    <NuxtLink to="/" class="btn-item movie-link link-img"><span class="sr-only">홍보영상</span></NuxtLink>
    <NuxtLink to="/studyland/onestep/first" class="btn-item onestep-link link-img"><span class="sr-only">1단계</span></NuxtLink>
    <NuxtLink to="/studyland/twostep/first" class="btn-item twostep-link link-img on"><span class="sr-only">2단계</span></NuxtLink>
    <NuxtLink to="/calendar" class="calendar-link link-img hover-bigger"><span class="sr-only">캘린더 페이지 이동</span></NuxtLink>
    <!-- 회차 탭 -->
    <ul class="tab-list">
      <li><NuxtLink to="/studyland/twostep/first" class="tab-01 on"><span class="sr-only">1회</span></NuxtLink></li>
      <li><NuxtLink to="/studyland/twostep/second" class="tab-02"><span class="sr-only">2회</span></NuxtLink></li>
      <li><NuxtLink to="/studyland/twostep/third" class="tab-03"><span class="sr-only">3회</span></NuxtLink></li>
      <li><NuxtLink to="/studyland/twostep/fourth" class="tab-04"><span class="sr-only">4회</span></NuxtLink></li>
      <li><NuxtLink to="/studyland/twostep/fifth" class="tab-05"><span class="sr-only">5회</span></NuxtLink></li>
    </ul>
    <!-- 카드 슬라이더 -->
    <div class="card-wrap">
      <NuxtChild v-on:tabEvent="getTabIdx" />
    </div>
    <!-- 하단 링크 -->
    <NuxtLink to="/mystudy" class="my-study-link link-img hover-bigger"><span class="sr-only">나만의 학습</span></NuxtLink>
    <NuxtLink to="/" class="promise-link link-img hover-bigger"><span class="sr-only">오늘의 약속</span></NuxtLink>
    <NuxtLink to="/bookland" class="reading-link link-img hover-bigger"><span class="sr-only">추천도서</span></NuxtLink>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: 'OneStep',
  data () {
    return {
      idx: 0,
    }
  },
  methods: {
    getTabIdx(i){
      let idx = this.idx;
      idx = i;
      $(".studyland .tab-list li").eq(i).addClass("on").siblings("li").removeClass("on");
    },
  },
}
</script>
<style lang="scss">
  .studyland{
    background: url(/img/studyland-bg.png) no-repeat center / cover;
    .logo-link{
      position: absolute;
      width: 15.078125%;
      height: 8%;
      top: 3.5%;
      left: 42.5%;
      background-image: url(/img/studyland-logo.png);
    }
    .btn-item{
      position: absolute;
      top: 5.25%;
      height: 6%;
      transition: all .2s;
      &.movie-link{
        left: 4.453125%;
        width: 12.5%;
        background-image: url(/img/movie-btn.png);
        &:hover{
          background-image: url(/img/movie-btn-on.png);
        }
      }
      &.onestep-link{
        left: 17.578125%;
        width: 9.375%;
        background-image: url(/img/onestep-btn.png);
        &.on{
          background-image: url(/img/onestep-btn-on.png);
        }
        &:hover{
          background-image: url(/img/onestep-btn-on.png);
        }
      }
      &.twostep-link{
        left: 27.578125%;
        width: 9.375%;
        background-image: url(/img/twostep-btn.png);
        &.on{
          background-image: url(/img/twostep-btn-on.png);
        }
        &:hover{
          background-image: url(/img/twostep-btn-on.png);
        }
      }
    }
    .calendar-link{
      position: absolute;
      top: 16.25%;
      right: 7.5%;
      width: 4.84375%;
      height: 7.8125%;
      background-image: url(/img/icon-calendar.png);
    }
    .my-study-link{
      position: absolute;
      bottom: 3.75%;
      left: 6.484375%;
      width: 8.0859375%;
      height: 12%;
      background-image: url(/img/btn-my-study.png);
      &:hover{
        transform: scale(1.04);
      }
    }
    .promise-link{
      position: absolute;
      bottom: 3.75%;
      left: 26.953125%;
      width: 7.9296875%;
      height: 12.125%;
      background-image: url(/img/btn-promise.png);
      &:hover{
        transform: scale(1.04);
      }
    }
    .reading-link{
      position: absolute;
      bottom: 2.875%;
      right: 6.328125%;
      width: 47.421875%;
      height: 13.625%;
      background-image: url(/img/btn-bookland.png);
    }
    .tab-list{
      position: absolute;
      top: 16.9%;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      width: 58.59375%;
      height: 6.5%;
      li{
        width: 20%;
        height: 100%;
        a{
          display: block;
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          transition: all .2s;
        }
        .tab-01{ background-image: url(/img/tab-01.png); }
        .tab-02{ background-image: url(/img/tab-02.png); }
        .tab-03{ background-image: url(/img/tab-03.png); }
        .tab-04{ background-image: url(/img/tab-04.png); }
        .tab-05{ background-image: url(/img/tab-05.png); }
        &.on,&:hover{
          a{
            box-shadow: 0px 8px 10px 0px rgba(136, 188, 0, 0.3);
            border-top-left-radius: 24px;
            border-top-right-radius: 24px;
            border-bottom-left-radius: 24px;
            border-bottom-right-radius: 24px;
          }
          .tab-01{ background-image: url(/img/tab-on-01.png); }
          .tab-02{ background-image: url(/img/tab-on-02.png); }
          .tab-03{ background-image: url(/img/tab-on-03.png); }
          .tab-04{ background-image: url(/img/tab-on-04.png); }
          .tab-05{ background-image: url(/img/tab-on-05.png); }
        }
      }
    }
    .study-swiper{
      position: absolute;
      top: 28.25%;
      right: 0;
      width: 66.40625%;
      opacity: 0;
    }
  }
</style>