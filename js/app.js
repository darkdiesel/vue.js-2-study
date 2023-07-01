var app = new Vue({
  el: '#app',
  data: {
    name: 'Igor Peshkov',
    job: 'Web Developer',
    message: 'You loaded this page on ' + new Date().toLocaleString(),
    link: 'http://peshkov.website',
    markup: '<a href="http://peshkov.website" target="_blank">Click me!</a>',
  },
  methods : {
    greet: function() {
        return 'My name is ' + this.name
    }
  }
})