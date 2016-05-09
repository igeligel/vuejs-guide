// define
var MyComponent = Vue.extend({
    template: '<div v-for="item in items">{{item.name}}</div>',
    data: function() {
        return {
            items: [{
                name: '1'
            }, {
                name: '2'
            }]
        }
    }
})

// register
Vue.component('my-component', MyComponent)

// create a root instance
new Vue({
    el: '#example'
})
