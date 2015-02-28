// create a new Vue
var calculator = new Vue({
  // on the element with class calculator
  el: '.calculator',
  // with the following data attached to the object:
  data: {
    numbers: [0,1,2,3,4,5,6,7,8,9],
	operators: ["+", "-"],
	output: "."
  },
  // access these methods for our click handlers
  methods: {
    operator: function (op) {
      this.output += op;
	},
    operand: function (n) {
	  this.output += n;
    }
  }
})