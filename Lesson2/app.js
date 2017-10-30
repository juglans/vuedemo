new Vue({
  el: '#app',
  data: {
    name: 'Emma',
    job: 'Ninja'
  },
  methods: {
    greet: function(time){
      return 'good ' + time + ' ' + this.name
    }
  }
})