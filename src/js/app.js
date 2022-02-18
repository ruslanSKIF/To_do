import * as funcjsFunctions from "./modules/functions.js";

funcjsFunctions.isWebp();

function onPageLoaded() {

	const input = document.querySelector("#input");
	const ul = document.querySelector("ul.todos");
	const saveBtn = document.querySelector(".save");
	const cleanUp = document.querySelector(".clean-up");
	const showTips = document.querySelector(".show-tips");

	//create To DO 

	function createTodo() {
		// Create li text element
		const li = document.createElement("li");
		const textSpan = document.createElement("span");
		textSpan.classList.add("todo-items");
		const newTodo = input.value;
		textSpan.append(newTodo);

		// Create trash icon button 
		const deleteBtn = document.createElement("span");
		deleteBtn.classList.add("to-do-trash")
		const icon = document.createElement("span")
		icon.classList.add("icon-trash");
		deleteBtn.appendChild(icon);

		ul.appendChild(li).append(textSpan, deleteBtn);
		input.value = "";
		listenDeleteTodo(deleteBtn);
	}

	// Remove 1 list item
	function listenDeleteTodo(element) {
		element.addEventListener("click", (event) => {
			element.parentElement.remove();
			event.stopPropagation();
		});
	}

	// Add new list item after entering it in input tag
	input.addEventListener("keypress", (keyPressed) => {
		const keyEnter = 13;
		if (keyPressed.which == keyEnter) {
			createTodo();
		}
	});

	// Add line throught to the text element 
	function checkedTodo(event) {
		if (event.target.tagName === "LI") {
			event.target.classList.toggle("cheked");
		}
	}

	ul.addEventListener("click", checkedTodo);

	// Save you list
	saveBtn.addEventListener('click', () => {
		localStorage.setItem("todos", ul.innerHTML)
	})

	// clean all list items

	cleanUp.addEventListener('click', () => {
		ul.innerHTML = "";
		localStorage.removeItem('todos', ul.innerHTML);
	});

	// show / hide tips

	function tipsBtn() {
		const tipsOff = document.querySelector(".tips");
		tipsOff.classList.toggle("_active");
	}

	showTips.addEventListener('click', tipsBtn);
}

document.addEventListener("DOMContentLoaded", onPageLoaded);