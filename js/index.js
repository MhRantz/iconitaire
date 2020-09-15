
const icon = {};

icon.chars = ['a','b','c','d','e'];

//setting lengths
icon.handSize = 5;

//containers for hands
icon.hand1 = [];
icon.hand2 = [];

//get random number between 0 and n
icon.random = function(n){
	return Math.floor(Math.random() * n)
}

//deal hand
icon.dealPlayer = function(handNum, n){
	for(let i = 0; i < icon.handSize; i++){
		handNum.push(icon.chars[icon.random(n)])
	}
}

icon.init = function(){
	console.log(icon.hand1);
	icon.dealPlayer(icon.hand1, icon.handSize);
}

document.addEventListener("DOMContentLoaded", function(){
  icon.init();
});
