class Sorter {
	constructor() {
		this.arr = [];
		this.length = 0;
		this.compareFunction = (left, right) => left - right;
	}

	add(element) {
		this.length++;
		this.arr.push(element);	
	}

	at(index) {
		return this.arr[index];
	}

	toArray() {
		return(this.arr);
	}

	sort(indices) {
		indices.sort();
		for(var i = 0; i < indices.length; i++){
			for(var j = 0; j < indices.length - 1; j++){
				var currentNumber = this.arr[indices[j]];
				if(this.compareFunction(currentNumber, this.arr[indices[j + 1]]) > 0){
					this.arr[indices[j]] = this.arr[indices[j + 1]];
					this.arr[indices[j + 1]]  = currentNumber;
				}
			}
		}
	}

	setComparator(compareFunction) {
		this.compareFunction = compareFunction;
	}
}
module.exports = Sorter;