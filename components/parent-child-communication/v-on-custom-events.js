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
    el: '#example',
    data: {
        messages: []
    },
    methods: {
        handleIt: function(msg) {
            console.log("Handle it");
            this.messages.push(msg);
        }
    }
})
