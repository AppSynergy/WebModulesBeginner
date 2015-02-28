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
	buffers: {
		nom: "",
		denom: "",
	},
	openBuffer: "nom"
  },
  // access these methods for our click handlers
  methods: {
    operator: function (op) {
      this.operation = op;
	  this.openBuffer = "denom";
	  this.buffers.denom = "";
	  this.output += op;
	},
    operand: function (n) {
	  this.buffers[this.openBuffer] += String(n);
	  this.output += n;
    },
	clear: function() {
		this.buffers.nom = "";
		this.buffers.denom = "";
		this.openBuffer = "nom";
		this.output = "";
	},
	evaluate: function() {
		var answer = this.calculate();
		this.buffers.nom = answer;
		this.output = answer;
	},
	calculate: function() {
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