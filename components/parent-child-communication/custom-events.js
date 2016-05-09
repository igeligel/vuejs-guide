// register child, which dispatches an event with
// the current message
Vue.component('child', {
    template: '#child-template',
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

// bootstrap parent, which pushes message into an array
// when receiving the event
var parent = new Vue({
    el: '#events-example',
    data: {
        messages: []
    },
    // the `events` option simply calls `$on` for you
    // when the instance is created
    events: {
        'child-msg': function(msg) {
            // `this` in event callbacks are automatically bound
            // to the instance that registered it
            this.messages.push(msg)
        }
    }
})
