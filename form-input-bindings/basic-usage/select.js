var selectModel = new Vue({
    el: '#app-select',
    data: {
        selected: ""
    }
})

var multipleSelectModel = new Vue({
    el: '#app-multiple-select',
    data: {
        selected: []
    }
})

var renderedWithVfor = new Vue({
  el: '#app-select-rendered-with-vfor',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})
