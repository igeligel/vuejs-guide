var vm = new Vue({
    el: '#app',
    methods: {
      doThis: function() {
        alert("Do This.")
      },
      onSubmit: function() {
        alert("On Submit.")
      },
      doThat: function() {
        alert("Do That.")
      }
    }
})
