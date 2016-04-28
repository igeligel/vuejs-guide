var vm = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
    }
})

vm.$watch('firstName', function(val) {
    this.fullName = val + ' ' + this.lastName
})

vm.$watch('lastName', function(val) {
    this.fullName = this.firstName + ' ' + val
})
