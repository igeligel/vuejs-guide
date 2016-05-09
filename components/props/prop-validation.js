var validatorComponent = Vue.component('child', {
    props: {
        // basic type check (`null` means accept any type)
        propA: Number,
        // multiple possible types (1.0.21+)
        propM: [String, Number],
        // a required string
        propB: {
            type: String,
            required: true
        },
        // a number with default value
        propC: {
            type: Number,
            default: 100
        },
        // object/array defaults should be returned from a
        // factory function
        propD: {
            type: Object,
            default: function() {
                return {
                    msg: 'hello'
                }
            }
        },
        // indicate this prop expects a two-way binding. will
        // raise a warning if binding type does not match.
        propE: {
            twoWay: true
        },
        // custom validator function
        propF: {
            validator: function(value) {
                return value > 10
            }
        },
        // coerce function (new in 1.0.12)
        // cast the value before setting it on the component
        propG: {
            coerce: function(val) {
                return val + '' // cast the value to string
            }
        }
    },
    template:   '<span>{{propA}}</span></br>' +
                '<span>{{propM}}</span></br>' +
                '<span>{{propB}}</span></br>' +
                '<span>{{propC}}</span></br>' +
                '<span>{{propD}}</span></br>' +
                '<span>{{propE}}</span></br>' +
                '<span>{{propF}}</span></br>' +
                '<span>{{propG}}</span></br>'

})

// register
Vue.component('validator-component', validatorComponent)

// create a root instance
new Vue({
    el: '#example'
})
