var Child = Vue.extend({})

var Parent = Vue.extend({
    template: 'this is my parent template',
    components: {
        'my-component': Child
    }
})

// register
Vue.component('my-component', Parent)

// create a root instance
new Vue({
    el: '#example'
})
