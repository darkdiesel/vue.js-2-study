var app = new Vue({
  el: '#app',
  data: {
    name: 'Igor Peshkov',
    job: 'Web Developer',
    message: 'You loaded this page on ' + new Date().toLocaleString()
  },
  methods : {
    greet: function() {
        return 'My name is ' + this.name
    }
  }
})