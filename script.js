function isSameType(value3, value4) {
  let a=typeof value3;
	let b=typeof value4;
	if(a==b){
		return "true";
	}
	else{
		return "false";
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
