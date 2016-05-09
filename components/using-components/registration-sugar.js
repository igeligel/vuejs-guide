// extend and register in one step
Vue.component('my-component', {
    template: '<div>A custom component1!</div>'
})

// also works for local registration
var Parent = Vue.extend({
    components: {
        'my-component': {
            template: '<div>A custom component2!</div>'
        }
    }
})


// create a root instance
new Vue({
    el: '#example'
})
