// enable @keyup.f1
// Vue.directive('on').keyCodes.f1 = 112

var vm = new Vue({
    el: '#app',
    methods: {
        submit: function() {
            alert("Submitted");
        }
    }
})
