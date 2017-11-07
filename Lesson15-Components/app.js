var data = {
  name: 'Yoshi'
}

Vue.component('greeting', {
  template: '<p>Hey there , I am {{ name }}.<button @click="changeName">Change Name</button></p>',
  data: function(){
    return data
    
  },
  methods: {
    changeName: function(){
      this.name = 'Mario';
    }
  }
})


var one = new Vue({
  el: '#app-one',
  data: {
    title: 'Multiple Instanse One'
  },
  methods: {
  },
  computed: {
    
  }
});

var two = new Vue({
  el: '#app-two',
  data: {
    title: 'Multiple Instanse Tow'
  },
  methods: {
  },
  computed: {
    
  }
})