<template>
  <transition name='scroll-to-top-fade'>
    <div
      v-show="visible"
      class="ra-scroll-to-top"
      :style="{
            bottom,
            right
        }"
      @click="scrollToTop"
    >
      <slot>
        <div class="default">
          <div class="scroll-to-top-circle">
            <div class="scroll-to-top-circle-triangle"></div>
          </div>
        </div>
      </slot>
    </div>
  </transition>
</template>

<script>
import { throttle } from 'throttle-debounce';
export default {
    name: 'ra-scrolltop',
    props: {
        bottom: {
            type: String,
            default: '40px'
        },
        right: {
            type: String,
            default: '30px'
        },
        speed: {
            type: String,
            default: 'average'
        },
        offset: {
            type: [String, Number],
            default: 600
        },
    },
    data() {
        return {
            visible: false,
            throttleHandler: null
        }
    },
    created() {
        try {
            if(['average', 'fast-to-slow','immediate'].indexOf(this.speed) === -1) {
                throw new Error("prop 'speed' must be 'average', 'fast-to-slow', or 'immediate'")
            }
        } catch (error) {
            // console.log(error)
        }
    },
    mounted() {
        window.speedScroll = () => {
            // current page scroll height
            let currentTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            
            if(currentTop > 0) {
                // for compatibility
                window.requestAnimationFrame ?  window.requestAnimationFrame(window.speedScroll) : setTimeout(window.speedScroll, 16)
                switch(this.speed){
                    case 'average':
                        window.scrollTo(0, currentTop - 60)
                        break
                    case 'fast-to-slow':
                        window.scrollTo(0, currentTop - (currentTop / 5))
                        break
                    case 'immediate':
                        window.scrollTo(0,0)
                        break
                }
            }
        }
        this.throttleHandler = throttle(300, this.catchScroll)
        window.addEventListener('scroll', this.throttleHandler)
    },
    destroyed() {
        window.removeEventListener('scroll', this.throttleHandler)
    },
    methods: {
        scrollToTop() {
            window.speedScroll()
            // scrolled event is triggered after the page scrolling is finished
            this.$emit('scrolled')
        },
        /**
         * catch window scroll event 
         * 捕获 window scroll 事件
         * 这里主要需要对 visible进行处理，当距离页面高度为多少则隐藏 scroll 组件
         */
        catchScroll() {
            const scrolltop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
            this.visible = scrolltop > parseInt(this.offset)
        }
    }

}
</script>

<style scoped>
.ra-scroll-to-top {
  position: fixed;
  cursor: pointer;
  background: transparent;
}

.scroll-to-top-circle {
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f2f5f6;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
}
.scroll-to-top-circle-triangle {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -8px;
  margin-top: -12px;
  width: 0;
  height: 0;
  border: 8px solid transparent;
  border-bottom: 8px solid #579FF8;
}
</style>