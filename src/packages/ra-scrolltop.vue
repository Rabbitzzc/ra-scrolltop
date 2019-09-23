<template>
  <transition name='scroll-to-top-fade'>
      <div
        class="ra-scroll-to-top"
      ></div>
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
        }
    },
    data() {
        return {}
    },

}
</script>

<style scoped>

</style>