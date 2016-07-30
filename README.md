# webgisdemo1

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

关于echarts在IE下出现zrender初始化失败的问题的解决方案 [here](https://github.com/ecomfe/zrender/issues/189) 
使用 requestAnimationFrame = window.requestAnimationFrame.bind(window) 即可修复这个问题