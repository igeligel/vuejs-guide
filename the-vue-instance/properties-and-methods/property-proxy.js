var data = { a: 1 }
var vm = new Vue({
  data: data
});

vm.a === data.a; // -> true

// setting the property also affects original data
vm.a = 2;
data.a; // -> 2

// ... and vice-versa
data.a = 3;
vm.a; // -> 3
