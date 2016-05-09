// DONT USE BECAUSE DATA INSTANCE IS SHARED FOR ALL COMPONENTS!
/*
var data = {
    a: 1
}
var MyComponent = Vue.extend({
    data: data
})
*/

var MyComponent = Vue.extend({
    data: function() {
        return {
            a: 1
        }
    }
})
