# ra-scrolltop

## demo
see demo

## install by npm or yarn

### npm
`npm install ra-scrolltop --save`
### yarn
`yarn add ra-scrolltop`

## import and use
Import for global usage
全局使用 
```js
import Vue from 'vue'
import RaScrolltop from 'ra-scrolltop'

Vue.use(RaScrolltop)
```
Or on a single component
单组件使用
```js
import RaScrolltop from 'ra-scrolltop'
...
components: { RaScrolltop }
...
```

## 字段含义 | Props
1. bottom: 组件离底部的位置
2. right：组件离右边的位置
3. speed：表示向上滑动的速速 ['average', 'fast-to-slow','immediate']
4. offset：当用户滚动达到某个偏移量时组件应显示的位置，默认值为500
5. offsetbottom: 当用户滚动达到某个底部偏移量时组件应可见的位置，默认值为0

## 事件 | Event
1. 'scrolled'，页面滚动结束时触发，通知父组件

## How to use
// 这里可以参考 element-ui 中组件的使用