var button = document.getElementById('enter');
var input = document.getElementById('user-input');
var myList = document.querySelector("ul");
var li = document.querySelector("li");

function inputLength() {
	return input.value.length;
}

function createListElement () {
	var newtextButton = document.createElement("button");
	var newdelButton = document.createElement("button");
	var newListItem = document.createElement("li");

		newtextButton.classList.add('list-item');
		newtextButton.appendChild(document.createTextNode(input.value));
		newListItem.appendChild(newtextButton);

		newdelButton.classList.add('del');
		newdelButton.textContent = "Delete";
		newListItem.appendChild(newdelButton);

		myList.appendChild(newListItem);
		input.value = "";

}

function addListAfterClick() {
	if (inputLength() > 0) {				
		createListElement();			
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {				
		createListElement();		
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


//===dynamic delete button making use of event delegation===//


myList.addEventListener("click", function(event) {
  if (event.target.classList.contains("del")) {
    event.target.closest("li").remove();
  }
});


//====dynamic done toggle======//


myList.addEventListener("click", function(event) {
  if (event.target.classList.contains("list-item")) {
    event.target.closest("button").classList.toggle("done");;
  }
});

			