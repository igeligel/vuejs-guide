var vm = new Vue({
    el: '#example',
    data: {
        a: 1
    },
    computed: {
        // a computed getter
        b: function() {
            // `this` points to the vm instance
            return this.a + 1
        }
    }
})
