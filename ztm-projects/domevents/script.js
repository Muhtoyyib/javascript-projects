var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

/*function clickListItem(){
	
}

function deleteItem(){
	*/

function createListElement() {
	var div = document.createElement('div');
	var li = document.createElement("li");
	var button = document.createElement('button');

	button.appendChild(document.createTextNode('delete'));
	button.classList.add('button-style');
	li.appendChild(document.createTextNode(input.value));

	div.classList.add('div-display');
	div.appendChild(li);
	div.appendChild(button);

	ul.appendChild(div);

	input.value = "";

	li.addEventListener('click', () => {
		li.classList.toggle('done');
	})

	button.addEventListener('click', () => {
		div.style.display = 'none';
	})

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


// Exercise Completed 

/* CheckList

1. If you click on the list item, it toggles the .done  class on and off.
2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
3. 3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)

*/
