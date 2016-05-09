var MyComponent = Vue.component('child', {
  // declare the props
  props: ['msg'],
  // the prop can be used inside templates, and will also
  // be set as `this.msg`
  template: '<span>{{ msg }}</span>'
})

// register
Vue.component('my-component', MyComponent)

// create a root instance
new Vue({
  el: '#example'
})
