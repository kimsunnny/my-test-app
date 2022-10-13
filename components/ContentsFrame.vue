<template>
  <div class="contents-frame">
    <iframe :src="this.link" width="100%" height="100%"></iframe>
    <button class="back-btn" @click="onModal"><div class="sr-only">뒤로 가기</div></button>
    <div id="modal-wrap">
      <transition name="fade" appear>
          <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
      </transition>
      <transition name="pop" appear>
          <div class="modal" role="dialog" v-if="showModal">
              <NuxtLink :to="prevPage" class="btn btn-yes"><span class="sr-only">예</span></NuxtLink>
              <button class="btn btn-no" @click="showModal = false"><span class="sr-only">아니요</span></button>
          </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { codeSet } from '~/settings/codeSet.js';
export default {
  name: 'ContentsFrame',
  data() {
    return {
      link: '',
      showModal: false,
      prevPage: '',
    }
  },
  methods: {
      backFn(){
        this.$router.go(-1);
      },
      setPrev() {
        this.prevPage = this.$nuxt.context.from.path;
      },
      setUrl() {
        const thisId = this.$route.params.id;
        const thisTheme = this.$route.params.theme;
        let thisResult = 0;
        if(thisTheme == 'studylandOneStep') { // 스터디랜드 step 1
          thisResult = codeSet.studylandOneStepContentsUrl.filter(function(v) {
            return v.id === thisId;
          });
        }else if(thisTheme == 'studylandTwoStep') { // 스터디랜드 step 1
          thisResult = codeSet.studylandTwoStepContentsUrl.filter(function(v) {
            return v.id === thisId;
          });
        }else if(thisTheme == 'bookland') { // 북랜드
          thisResult = codeSet.booklandContentsUrl.filter(function(v) {
            return v.id === thisId;
          });
        }
        if(thisResult[0].url == '') {
          alert('준비 중입니다.');
          this.$router.go(-1);
        }else {
          this.link = thisResult[0]?.url;
        }
      },
      onModal () {
        this.showModal = true;
      }
  },
  mounted() {
    this.setUrl();
    this.setPrev();
  }
}
</script>
<style lang="scss">
  .contents-frame{
    width: 100%;
    height: 100%;
    .back-btn{
      position: absolute;      
      top: 0;
      left: 0;
      z-index: 99;
      width: 16%;
      height: 23%;
      background: rgba(0,0,0,0);
    }
    #modal-wrap {
      .modal-overlay {
        content: '';
        position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 99;
        background: rgba(0,0,0,0.6);
        cursor: pointer;
      }  
      .modal { 
        position: absolute; top: 50%; left: 50%; z-index: 999; transform: translate(-50%, -50%);
        width: 50%;
        height: 64.25%;
        background: url(/img/modal-back.png) no-repeat center / cover;
        display: flex; 
        flex-direction: column; 
        align-items: center;
        .btn { 
          position: absolute;
          width: 32.6984127%; 
          height: 26.25%;
          bottom: 5.625%;
          &.btn-yes {
            left: 15%;
            background: url(/img/btn-yes.png) no-repeat center / contain;
            &:hover{
              background: url(/img/btn-yes-on.png) no-repeat center / contain;
            }
          }
          &.btn-no {
            right: 15%;
            background: url(/img/btn-no.png) no-repeat center / contain;
            &:hover{
              background: url(/img/btn-no-on.png) no-repeat center / contain;
            }
          }
        }
      }
    }
  }
</style>