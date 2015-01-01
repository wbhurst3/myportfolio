var CalcPrototype = {
	constructor: function() {
		this.num_list = []; // For holding the list of numbers to be operated on
		this.last_op = ""; // For function hash to call current operation
		this.current_num = ""; // For holding the current single or multi-digit number
	},
	// Takes in a number and displays it in the results box
	display: function(num){
		if (! this.current_num) {
			this.current_num = num;
			if (num !== 0){
				document.getElementById("results").value = num;
			}
		} else {
			document.getElementById("results").value += num;
			this.current_num += num;
		}
	},
	// Convenience fn for finding sum
	sum: function(list){
		var total = parseFloat(list[0]) + parseFloat(this.num_list.pop());
		this.num_list[0] = total
	},
	// Convenience fn for finding difference
	difference: function(list){
		var total = parseFloat(list[0]) - parseFloat(this.num_list.pop());
		this.num_list[0] = total
	},
	// Convenience fn for finding product
	prod: function(list){
		var total = parseFloat(list[0]) * parseFloat(this.num_list.pop());
		this.num_list[0] = total
	},
	// Convenience fn for finding quotient
	quotient: function(list){
		var total = parseFloat(list[0]) / parseFloat(this.num_list.pop());
		this.num_list[0] = total
	},
	// Adds the number in the results box to the array of items to be operated on
	add: function() {
		if (this.current_num){
			// Add current number to the list
			this.num_list.push(parseFloat(this.current_num).toFixed(3));
			this.current_num = "";
			calculator.runLastOp(this.last_op);
			// Declare current operation done
			this.last_op = "add";
			// Append operation to results box
			document.getElementById("results").value = this.num_list.toString();
		}
	},
	// Subtracts the number in results box from sum so far
	subtract: function() {
		if (this.current_num){
			// Add current number to the list
			this.num_list.push(parseFloat(this.current_num).toFixed(3));
			this.current_num = "";
			// Run current operation
			calculator.runLastOp(this.last_op);
			// Declare current operation done
			this.last_op = "subtract";
			// Append operation to results box
			document.getElementById("results").value = this.num_list.toString();
		}
	},
	// Multiplies the number in results box from sum so far
	multiply: function() {
		if (this.current_num){
			// Add current number to the list
			this.num_list.push(parseFloat(this.current_num).toFixed(3));
			this.current_num = "";
			// Run current operation
			calculator.runLastOp(this.last_op);
			// Declare current operation done
			this.last_op = "multiply";
			// Append operation to results box
			document.getElementById("results").value = this.num_list.toString();
		}
	},
	// Divides the number in results box from sum so far
	divide: function() {
		if (this.current_num){
			// Add current number to the list
			this.num_list.push(parseFloat(this.current_num).toFixed(3));
			this.current_num = "";
			// Run current operation
			calculator.runLastOp(this.last_op);
			// Declare current operation done
			this.last_op = "divide";
			// Append operation to results box
			document.getElementById("results").value = this.num_list.toString();
		}
	},
	// Does the specified operations to the numbers
	solve: function() {
		if (this.current_num){
			// Add current number to the list
			this.num_list.push(parseFloat(this.current_num).toFixed(3));
			calculator.runLastOp(this.last_op);
			// Set current_num to solution for continued operation
			this.current_num = this.num_list.toString();
			//	Clear current operation
			this.last_op = "";
			// Append operation to results box
			document.getElementById("results").value = this.num_list.toString();
		}
	},
	// Deletes last number entered
	backsp: function(){
		this.current_num = this.current_num.slice(0, this.current_num.length-1);
		document.getElementById("results").value = document.getElementById("results").value.slice(0, document.getElementById("results").value.length-1)
	},
	// Clears the results box and num_list
	wipe: function() {
		document.getElementById("results").value = "";
		// Clear number list
		this.num_list = [];
		// Clear last operation pressed
		this.last_op = "";
		// Clear any number currently queued
		this.current_num = "";
	},
	runLastOp: function(operation){
		// Switch for determining which operation to run. Takes last_op as string
		switch(operation){
			case "add" : calculator.sum(this.num_list); break;
			case "subtract" : calculator.difference(this.num_list); break;
			case "multiply" : calculator.prod(this.num_list); break;
			case "divide" : calculator.quotient(this.num_list); break;
			case "add" : calculator.sum(this.num_list); break;
			case "subtract" : calculator.difference(this.num_list); break;
			case "multiply" : calculator.prod(this.num_list); break;
			case "divide" : calculator.quotient(this.num_list); break;
		}
	}
}

var calculator = Object.create(CalcPrototype);
calculator.constructor();

// Keyboard listeners for 0-9, +, -, /, *

$(document).ready(function(){
	window.addEventListener("keydown", checkKeyPressed, false);
});

function checkKeyPressed(e){
	switch(e.keyCode){
		case 96:
			calculator.display('0');
			break;
		case 97:
			calculator.display('1');
			break;
		case 98:
			calculator.display('2');
			break;
		case 99:
			calculator.display('3');
			break;
		case 100:
			calculator.display('4');
			break;
		case 101:
			calculator.display('5');
			break;
		case 102:
			calculator.display('6');
			break;
		case 103:
			calculator.display('7');
			break;
		case 104:
			calculator.display('8');
			break;
		case 105:
			calculator.display('9');
			break;
		case 106:
			calculator.multiply();
			break;
		case 107:
			calculator.add();
			break;
		case 109:
			calculator.subtract();
			break;
		case 110:
			calculator.display('.');
			break;
		case 111:
			calculator.divide();
			break;
		case 8: // Backspace key
			e.preventDefault();
			calculator.backsp();
			break;
		case 13: // Enter key
			e.preventDefault();
			calculator.solve();
			break;
		case 46: // Delete key
			e.preventDefault();
			calculator.clear();
	};
};