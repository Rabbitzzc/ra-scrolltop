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
            <div>这里应该是一个椭圆</div>
        </div>
    </slot>
    </div>
  </transition>
</template>

<script>
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
            default: 500
        },
        offsetbottom: {
            type: [String, Number],
            default: 0
        }
    },
    data() {
        return {
            visible: false
        }
    },
    methods: {
        scrollToTop() {

        }
    }

}
</script>

<style scoped>
</style>