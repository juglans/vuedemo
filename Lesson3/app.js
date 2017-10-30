new Vue({
  el: '#app',
  data: {
    name: 'Emma',
    job: 'Ninja',
    website: 'https://www.ddr888.cc'
  },
  methods: {
    greet: function(time){
      return 'good ' + time + ' ' + this.name
    }
  }
})