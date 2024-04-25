let outputParagraph = document.getElementById("answertext");
let inputElement = document.getElementById("myInput");

executeButton.addEventListener("click", function(){
	let currentInputText = inputElement.value;
	generate(currentInputText);
})

function generate(incUserInput) {
	outputParagraph.innerText = incUserInput
	
}

