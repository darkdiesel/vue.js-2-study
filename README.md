# vue.js-2-study
Learning Vue.js 2

## Table of content
- [CDN](#cdn)
- [Install](#install)
- [Directives](#directives)
- [Event Modifiers](#event-modifiers)
- [Key Modifiers](#key-modifiers)

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
* `v-bind:title="title"` or short `:title="title"` - v-bind attach variable *title* to *title* attribute and update it when variable change value
* `v-html="markup"` - print html inside element with this directive from *markup* variable
* `v-model="model"` - assign variable to element with this directive
* `v-on:click="method_name` or short `@click="method_name"` - bind method on *click* event
* `v-on:dblclick="method_name` or short `@dblclick="method_name"` - bind method on *double click* event

## Event Modifiers 

* `.stop`
* `.prevent`
* `.capture`
* `.self`
* `.once`
* `.passive`

```html
<!-- the click event's propagation will be stopped -->
<a v-on:click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<form v-on:submit.prevent></form>

<!-- use capture mode when adding the event listener -->
<!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
<div v-on:click.capture="doThis">...</div>

<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div v-on:click.self="doThat">...</div>

<!-- the click event will be triggered at most once -->
<a v-on:click.once="doThis"></a>

<!-- the scroll event's default behavior (scrolling) will happen -->
<!-- immediately, instead of waiting for `onScroll` to complete  -->
<!-- in case it contains `event.preventDefault()`                -->
<div v-on:scroll.passive="onScroll">...</div>
```

## Key Modifiers 

```html
<!-- only call `vm.submit()` when the `key` is `Enter` -->
<input v-on:keyup.enter="submit">
```