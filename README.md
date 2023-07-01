# vue.js-2-study
Learning Vue.js 2

## Table of content
- [CDN](#cdn)
- [Install](#install)
- [Directives](#directives)

## CDN
You can found url for cdn vue.js on [v2.vuejs.org](https://v2.vuejs.org/v2/guide/) 

`<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>`

## Install
* Install laravel globally via composer: `composer global require "laravel/installer"`

## Start
For create new application you should create block in html, for example:

```html
<div id="app"></div>
```

in js add next code and assign you created element by id:

```js script
var app = new Vue({
    el: '#app',
)}
```

## Directives
* `v-bind:title="title"` - v-bind attach variable *title* to *title* attribute and update it when variable change value
* `v-html="markup"` - print html inside element with this directive from *markup* variable
* `v-model="model"` - assign variable to element with this directive
* `v-on:click="run_method()` - bind method on *click* event
* `v-on:dblclick="run_method()` - bind method on *double click* event
* 