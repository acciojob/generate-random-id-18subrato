function makeid(l) {
	l = Number(l);
	let str = 'abcdefghizklmnopqrstwxyzABCDEFGHIJKLMONPQRSTWXYZ123456789';
	let newStr = '';

	for(let i=0;i<l;i++){
		newStr += str[Math.floor(Math.random()*str.length)]
	}
	return newStr;
}

// Do not change the code below.
const l = prompt("Enter a number.")
alert(makeid(l));
