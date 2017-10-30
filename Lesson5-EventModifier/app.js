new Vue({
  el: '#app',
  data: {
    name: 'Emma',
    job: 'Ninja',
    website: 'https://www.ddr888.cc',
    age: 20,
    x: 0,
    y: 0
  },
  methods: {
    greet: function(time){
      return 'good ' + time + ' ' + this.name
    },
    add: function(time){
      this.age = this.age + time
    },
    sub: function(time){
      this.age = this.age - time
    },
    updateXY: function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function(){
      alert('You clicked.')
    }

  }
})