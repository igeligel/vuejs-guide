var MyComponent = Vue.component('child', {
    // camelCase in JavaScript
    props: ['msg'],
    template: '<span>{{ msg }}</span>'
})

// register
Vue.component('my-component', MyComponent)

// create a root instance
new Vue({
    el: '#example'
})
