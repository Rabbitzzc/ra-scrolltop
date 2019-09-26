
# ra-scrolltop
🌝一个返回到页面顶部的vue组件。

- [中文](README.zh-CN.md)
- [English](README.md)


## demo

<!-- see demo -->

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

## 如何使用

默认
```html
<ra-scrolltop>
</ra-scrolltop>
```

可以在vue-backtotop组件内使用您自己的html / vue组件
```html
<ra-scrolltop>
    <button>Top</button>
</ra-scrolltop>
```

现在，可以加上一些参数
```html
<ra-scrolltop right="50px" bottom="20px" speed="immediate">
    <button>Top</button>
</ra-scrolltop>
```

## 备注
我很抱歉在1.0.3版本之前，忘记导出了install函数，导致出现组件未undefined的错误

## MIT

[LICENCE](LICENCE)