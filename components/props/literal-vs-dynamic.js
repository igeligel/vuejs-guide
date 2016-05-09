var MyComponent = Vue.component('comp', {
    // camelCase in JavaScript
    props: ['someProp'],
    template: '<span>{{ someProp }}</span>'
})

// register
Vue.component('my-component', MyComponent)

// create a root instance
new Vue({
    el: '#example'
})
