var vm = new Vue({
    el: '#example-2',
    methods: {
        say: function(msg) {
            alert(msg)
        },
        sayEvent: function(msg, event) {
            // now we have access to the native event
            event.preventDefault();
            alert(event.target);
        }
    }
})
