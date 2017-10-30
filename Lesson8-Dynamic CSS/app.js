new Vue({
  el: '#app',
  data: {
    available: false
  },
  methods: {
    toggle: function(){
      this.available = !this.available
    }
  },
  computed: {
    computedClasses: function(){
      return {
        available: this.available
      }
    }
  }
})