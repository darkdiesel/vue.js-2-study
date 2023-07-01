var app = new Vue({
  el: '#app',
  data: {
    name: 'Igor Peshkov',
    job: 'Web Developer',
    message: 'You loaded this page on ' + new Date().toLocaleString(),
    link: 'http://peshkov.website',
    markup: '<a href="http://peshkov.website" target="_blank">Click me!</a>',
    users: [
        {
            'name' : 'Igor Peshkov',
            'birthday' : '27.07.1988',
            'is_admin': true,
        },
        {
            'name' : 'Evgeny Peshkov',
            'birthday' : '30.11.1990',
            'is_admin': false,
        },
        {
            'name' : 'Elena Peshkova',
            'birthday' : '17.01.1966',
            'is_admin': false,
        },
        {
            'name' : 'Maria Peshkova',
            'birthday' : '20.04.2013',
            'is_admin': false,
        },
    ],
    counter: 0,
  },
  methods : {
    greet: function() {
        return 'My name is ' + this.name
    },
    substract: function(){
        this.counter--;
    },
    say: function (message) {
        alert(message);
    }
  }
})