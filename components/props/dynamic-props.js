var MyComponent = Vue.component('child', {
    // camelCase in JavaScript
    props: ['myMessage'],
    template: '<span>{{ myMessage }}</span>'
})

// register
Vue.component('my-component', MyComponent)

// create a root instance
new Vue({
    el: '#example',
    data: {
        parentMsg: ""
    }
})
