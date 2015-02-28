// create a new Vue
var calculator = new Vue({
  // on the element with class calculator
  el: '.calculator',
  // with the following data attached to the object:
  data: {
    numbers: [0,1,2,3,4,5,6,7,8,9],
	operators: ["+", "-"],
	output: "",
	operation: null,
	// our simple app only has two buffers, so can perform one calculation at a time.
	buffers: {
		nom: "",
		denom: "",
	},
	openBuffer: "nom"
  },
  // access these methods for our click handlers
  methods: {
    operator: function (op) {
	  // set the operation
      this.operation = op;
	  // prepare to write to demon buffer
	  this.openBuffer = "denom";
	  this.buffers.denom = "";
	  // write to screen
	  this.output += op;
	},
    operand: function (n) {
	  // write characters to buffer
	  this.buffers[this.openBuffer] += String(n);
	  // write to screen
	  this.output += n;
    },
	clear: function() {
		// wipe all buffers and output
		this.buffers.nom = "";
		this.buffers.denom = "";
		this.openBuffer = "nom";
		this.output = "";
	},
	evaluate: function() {
		var answer = this.calculate();
		// store the answer in the nom buffer
		this.buffers.nom = answer;
		// write answer to screen
		this.output = answer;
	},
	calculate: function() {
		// mathematical computations
		switch (this.operation) {
			case "+":
				return (parseInt(this.buffers.nom, 10) + parseInt(this.buffers.denom, 10));
				break;
			case "-":
				return (parseInt(this.buffers.nom, 10) - parseInt(this.buffers.denom, 10));
				break;
		}
		return "Error"
	}
  }
})