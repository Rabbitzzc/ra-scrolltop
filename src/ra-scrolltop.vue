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
        <div class="rabbit-slot-custom">
          <div class="scroll-circle" v-if="theme === 'scroll-circle'">
            <div class="scroll-circle-triangle"></div>
          </div>
          <div class="orange" v-else-if="theme === 'orange'">
            <div class="orange-scroll-item">🖕🏻</div>
          </div>
          <div class="rocket" v-else-if="theme === 'rocket'">
            <div class="rocket-scroll-item">🚀</div>
          </div>
          <div class="rectangular" v-else-if="theme === 'rectangular'">
              <div class="rectangular-scroll-item">Go Top</div>
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
            default: 'average',
            validator: function(value) {
                return ['average', 'fast-to-slow','immediate'].indexOf(value) !== -1
            }
        },
        offset: {
            type: [String, Number],
            default: 600
        },
        theme: {
            type: String,
            default: 'scroll-circle',
            validator: function(value) {
                return ['scroll-circle', 'orange', 'rocket', 'rectangular'].indexOf(value) !== -1
            }
        }
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

.rabbit-slot-custom .scroll-circle {
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f2f5f6;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
}
.rabbit-slot-custom .scroll-circle .scroll-circle-triangle {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -8px;
  margin-top: -12px;
  width: 0;
  height: 0;
  border: 8px solid transparent;
  border-bottom: 8px solid #579ff8;
}

.rabbit-slot-custom .orange .orange-scroll-item {
  position: relative;
  width: 30px;
  height: 30px;
  background: #ff9800;
  text-align: center;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
}
.rabbit-slot-custom .orange .orange-scroll-item:hover {
  cursor: pointer;
  background-color: #333;
}

.rabbit-slot-custom .rocket .rocket-scroll-item {
    font-size: 30px;
}

.rabbit-slot-custom .rectangular .rectangular-scroll-item  {
	text-decoration: none;
	color: white;
	background-color: rgba(0, 0, 0, 0.3);
	font-size: 12px;
	padding: 10px;
}

.rabbit-slot-custom .rectangular .rectangular-scroll-item:hover {
	background-color: rgba(0, 0, 0, 0.6);
}
</style>