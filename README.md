# ra-scrolltop
🌝A vue component that goes back to the top of the page.

- [中文]((README.zh-CN.md))
- [English](README.md)
## demo

see demo

## install by npm or yarn

### npm
```shell
npm install ra-scrolltop --save
```
### yarn
```shell
yarn add ra-scrolltop
```

## import and use

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

## Props

|Name|Type|Default|Description|
|---|---|---|---|
|bottom|String|40px|bottom offset when component is visible|
|right|String|30px|right offset when component is visible|
|speed|String|average|the rate of upward sliding, ['average', 'fast-to-slow','immediate']|
|offset|[String, Number]|600|where the component can visible when the user scrolls to an offset|

##  Events

|Name|Description|
|---|---|
|scrolled|Fired when page's scroll ends|

## How to use

## MIT

[LICENCE](LICENCE)