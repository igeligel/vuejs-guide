var MyComponent = Vue.extend({
    template: '<div>A custom component!</div>'
})

// register
Vue.component('my-component', MyComponent)

// create a root instance
new Vue({
    el: '#example'
})
