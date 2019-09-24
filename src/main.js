import RaScrolltop from './ra-scrolltop.vue'

RaScrolltop.install = function (Vue) {
    Vue.component(RaScrolltop.name, RaScrolltop)
}

/* supports the use of tags to introduce */
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component(RaScrolltop.name, RaScrolltop)
}

export default RaScrolltop