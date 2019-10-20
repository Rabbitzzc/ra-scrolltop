# ra-scrolltop
🌝A vue component that goes back to the top of the page.

- [中文](README.zh-CN.md)
- [English](README.md)


## demo

<!-- see demo -->

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
Import for global usage
```js
import Vue from 'vue'
import RaScrolltop from 'ra-scrolltop'

Vue.use(RaScrolltop)
```
Or on a single component
```js
import RaScrolltop from 'ra-scrolltop'
...
components: { RaScrolltop }
...
```

## Props

| Name       | Type             | Default       | Description                                                                     |
| ---------- | ---------------- | ------------- | ------------------------------------------------------------------------------- |
| bottom     | String           | 40px          | bottom offset when component is visible                                         |
| right      | String           | 30px          | right offset when component is visible                                          |
| speed      | String           | average       | the rate of upward sliding, ['average', 'fast-to-slow','immediate']             |
| offset     | [String, Number] | 600           | where the component can visible when the user scrolls to an offset              |
| theme[new] | string           | scroll-circle | provide some theme styles, ['scroll-circle', 'orange', 'rocket', 'rectangular'] |


##  Events

| Name     | Description                   |
| -------- | ----------------------------- |
| scrolled | Fired when page's scroll ends |

## How to use

default
```html
<ra-scrolltop>
</ra-scrolltop>
```
It's possible to use your own html/vue component inside vue-backtotop component.
```html
<ra-scrolltop>
    <button>Top</button>
</ra-scrolltop>
```

Now, you can add some props
```
<ra-scrolltop right="50px" bottom="20px" speed="immediate">
    <button>Top</button>
</ra-scrolltop>
```

## Release Notes

### v1.x

- Configuration with speed, position and slot

### v2.x

- Add theme configuration - theme


## Note

I am sorry that before version 1.0.3, I forgot to export the install function, which resulted in the undefined error of the component.

At the same time, my design ability is not very good, so I hope users can help to add some themes for other users to use. Thank you!

## MIT

[LICENCE](LICENCE)