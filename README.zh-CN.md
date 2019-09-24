
# ra-scrolltop
🌝一个返回到页面顶部的vue组件。

- [中文](README.zh-CN.md)
- [English](README.md)
## demo

see demo

## 通过 npm 或 yarn 安装

### npm
```shell
npm install ra-scrolltop --save
```
### yarn
```shell
yarn add ra-scrolltop
```

## 导入及使用

全局使用
```js
import Vue from 'vue'
import RaScrolltop from 'ra-scrolltop'

Vue.use(RaScrolltop)
```
单组件使用
```js
import RaScrolltop from 'ra-scrolltop'
...
components: { RaScrolltop }
...
```

## Props

|prop|类型|默认值|说明|
|---|---|---|---|
|bottom|String|40px|组件可见时底部偏移量|
|right|String|30px|组件可见时侧边偏移量|
|speed|String|average|向上滑动的速度['average', 'fast-to-slow','immediate']|
|offset|[String, Number]|600|用户滚动达到某个偏移量时组件可见|

##  Events

|名称|说明|
|---|---|
|scrolled|页面滚动结束时触发|

## How to use


## MIT

[LICENCE](LICENCE)