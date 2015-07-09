/*JavaScript here*/

var numbers = [];

function createArray(_num){
	for(var i = 0; i < 10000+1; i++){
		//fill array
		if(i != _num){
			numbers.push(i);
		}
	}
}

function searchArray(){
	for(var i = 0; i < 10000+1; i++){
		var foo = numbers.indexOf(i);
		if(foo == -1){
			//gives missing entry
			console.log(i);
		}
	}
}
