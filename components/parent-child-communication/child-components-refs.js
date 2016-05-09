// register child, which dispatches an event with
// the current message
var childComponent = Vue.component('child', {
    data: function() {
        return {
            msg: 'hello'
        }
    },
    methods: {
        notify: function() {
            if (this.msg.trim()) {
                this.$dispatch('child-msg', this.msg)
                this.msg = ''
            }
        }
    }
})

Vue.component('user-profile', childComponent);

var parent = new Vue({
  el: '#parent'
})
// access child component instance
var child = parent.$refs.profile
