new Vue({
  el: '#app',
  data: {
    a: 0,
    b: 0,
    age: 20
  },
  computed: {
    addToA: function(){
      return this.age + this.a
    },
    addToB: function(){
      return this.age + this.b
    }
  }
})