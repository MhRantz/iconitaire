
const icon = {};

//get base elements
icon.playerHand = document.querySelector('.playerHand');
icon.choiceHand = document.querySelector('.choiceHand');

icon.chars = ['a','a','b','c','d','e','f'];

//containers for hands
icon.hand1 = [];
icon.hand2 = [];
icon.occur = {};
//get random number between 0 and n
icon.random = function(n){
	return Math.floor(Math.random() * n)
}

//deal hand
icon.dealPlayer = function(handNum, numReturn, numOptions){
	for(let i = 0; i < numReturn; i++){
		handNum.push(icon.chars[icon.random(numOptions)])
	}
}

icon.showHand = function(handNum, handDiv){
	handNum.forEach(char => {
		icon.createCard(char, handDiv);
	})
}

icon.createCard = function(char, handDiv) {
	let div = document.createElement("DIV");
	div.classList.add('card');
	div.innerText = char;
	handDiv.appendChild(div);
}

icon.formHand = function(handNum, handDiv){
	handNum.forEach(char => {
		//create form input labels
		let label = document.createElement("LABEL");
		label.innerText = char;
		label.setAttribute("for", `choose ${char}`)
		//create the input, so the choice form can be submitted
		let input = document.createElement("INPUT");
		input.setAttribute("type", "radio")
		input.setAttribute("value", char)
		input.setAttribute("id", `choose ${char}`);
		input.setAttribute("name", "choice")
		handDiv.appendChild(label);
		handDiv.appendChild(input);
	})
}

//create the choice form with the two random characters for last choice
icon.choiceForm = () => {
	icon.formHand(icon.hand2, icon.choiceHand);
	let button = document.createElement("BUTTON");
	button.setAttribute("type", "submit");
	button.classList.add('choiceSubmit');
	icon.choiceHand.appendChild(button);
	icon.choiceHand.addEventListener('submit', icon.handleSubmit)
}

//handle submit of last choice character, find chosen value, add it to the players hand array and on dom
icon.handleSubmit = e => {
	e.preventDefault();
	let choice = document.querySelector('input[name="choice"]:checked').value;
	icon.hand1.push(choice);
	icon.createCard(choice, icon.playerHand);
	icon.choiceHand.innerHTML = "";
	let cool = icon.counter(icon.hand1);
	if(cool.a > 1){
		console.log('yo')
	} else {
		console.log('cool')
	}
}

icon.counter = arr => {
	const str = arr.sort();
	return str.reduce((total, letter) => {
		total[letter] ? total[letter]++ : total[letter] = 1;
		return total;
	}, {});
};

icon.init = function(){
	icon.dealPlayer(icon.hand1, 5, 7);
	icon.dealPlayer(icon.hand2, 2, 7);
	icon.showHand(icon.hand1, icon.playerHand);
	icon.choiceForm();
}

document.addEventListener("DOMContentLoaded", function(){
  icon.init();
});
