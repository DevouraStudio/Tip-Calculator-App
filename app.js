const inputOne = document.querySelector("#inputOne")

const buttonOne = document.querySelector("#option1")

const buttonTwo = document.querySelector("#option2")

const buttonThree = document.querySelector("#option3")

const buttonFour = document.querySelector("#option4")

const buttonFive = document.querySelector("#option5")

const custom = document.querySelector("#inputTwo")

const inputThree = document.querySelector("#inputThree")

const price = document.querySelector("#price")

const priceTwo = document.querySelector("#price2")

const reset = document.querySelector("#reset")

const inputGroupOne = document.querySelector("#input1")

const inputGroupTwo = document.querySelector("#input2")

const error = document.querySelector("#error")

const errorTwo = document.querySelector('#errorTwo')

const errorThree = document.querySelector('#errorThree')

const errorFour = document.querySelector('#errorFour')

buttonOne.checked = false
buttonTwo.checked = false
buttonThree.checked = false
buttonFour.checked = false
buttonFive.checked = false
buttonOne.disabled = true
buttonTwo.disabled = true
buttonThree.disabled = true
buttonFour.disabled = true
buttonFive.disabled = true
reset.disabled = true
custom.disabled = true


inputOne.addEventListener("input", function () {
	if (inputOne.value === "") {
		errorTwo.style.display = "inline"
		error.style.display = 'none'
		inputGroupOne.style.border = "2px rgb(255, 115, 0) solid"
		buttonOne.disabled = true
		buttonTwo.disabled = true
		buttonThree.disabled = true
		buttonFour.disabled = true
		buttonFive.disabled = true
		custom.disabled = true
		reset.disabled = false
	}
	else if (parseInt(inputOne.value) <= 0) {
		error.style.display = "inline"
		errorTwo.style.display = "none"
		inputGroupOne.style.border = "2px rgb(255, 115, 0) solid"
		buttonOne.disabled = true
		buttonTwo.disabled = true
		buttonThree.disabled = true
		buttonFour.disabled = true
		buttonFive.disabled = true
		custom.disabled = true
		reset.disabled = false
	}
	else {
		if (inputThree.value !== "" && parseInt(inputThree.value) !== 0) {
			inputGroupOne.style.border = "2px hsl(172, 67%, 45%) solid"
			buttonOne.disabled = false
			buttonTwo.disabled = false
			buttonThree.disabled = false
			buttonFour.disabled = false
			buttonFive.disabled = false
			custom.disabled = false
		}
		error.style.display = "none"
		errorTwo.style.display = "none"
		reset.disabled = false
	}
})

inputThree.addEventListener("input", function () {
	if (inputThree.value === "") {
		errorFour.style.display = "inline"
		errorThree.style.display = 'none'
		inputGroupTwo.style.border = "2px rgb(255, 115, 0) solid"
		buttonOne.disabled = true
		buttonTwo.disabled = true
		buttonThree.disabled = true
		buttonFour.disabled = true
		buttonFive.disabled = true
		custom.disabled = true
		reset.disabled = false
	}
	else if (parseInt(inputThree.value) <= 0) {
		errorThree.style.display = "inline"
		errorFour.style.display = "none"
		inputGroupTwo.style.border = "2px rgb(255, 115, 0) solid"
		buttonOne.disabled = true
		buttonTwo.disabled = true
		buttonThree.disabled = true
		buttonFour.disabled = true
		buttonFive.disabled = true
		custom.disabled = true
		reset.disabled = false
	}
	else {
		if (inputOne.value !== "" && parseInt(inputOne.value) !== 0) {
			inputGroupTwo.style.border = "2px hsl(172, 67%, 45%) solid"
			buttonOne.disabled = false
			buttonTwo.disabled = false
			buttonThree.disabled = false
			buttonFour.disabled = false
			buttonFive.disabled = false
			custom.disabled = false
		}
		errorThree.style.display = "none"
		errorFour.style.display = "none"
		reset.disabled = false
	}
})

buttonOne.addEventListener("click", function () {
	const tipPerPerson = ((parseInt(inputOne.value) * 0.05) / parseInt(inputThree.value)).toFixed(2)
	const totalPerPerson = (((parseInt(inputOne.value)) / (parseInt(inputThree.value))) + parseInt(tipPerPerson)).toFixed(2)
	price.textContent = `$${tipPerPerson}`
	price2.textContent = `$${totalPerPerson}`
})

buttonTwo.addEventListener("click", function () {
	const tipPerPerson = ((parseInt(inputOne.value) * 0.1) / parseInt(inputThree.value)).toFixed(2)
	const totalPerPerson = (((parseInt(inputOne.value)) / (parseInt(inputThree.value))) + parseInt(tipPerPerson)).toFixed(2)
	price.textContent = `$${tipPerPerson}`
	price2.textContent = `$${totalPerPerson}`
})

buttonThree.addEventListener("click", function () {
	const tipPerPerson = ((parseInt(inputOne.value) * 0.15) / parseInt(inputThree.value)).toFixed(2)
	const totalPerPerson = (((parseInt(inputOne.value)) / (parseInt(inputThree.value))) + parseInt(tipPerPerson)).toFixed(2)
	price.textContent = `$${tipPerPerson}`
	price2.textContent = `$${totalPerPerson}`
})

buttonFour.addEventListener("click", function () {
	const tipPerPerson = ((parseInt(inputOne.value) * 0.25) / parseInt(inputThree.value)).toFixed(2)
	const totalPerPerson = (((parseInt(inputOne.value)) / (parseInt(inputThree.value))) + parseInt(tipPerPerson)).toFixed(2)
	price.textContent = `$${tipPerPerson}`
	price2.textContent = `$${totalPerPerson}`
})

buttonFive.addEventListener("click", function () {
	const tipPerPerson = ((parseInt(inputOne.value) * 0.5) / parseInt(inputThree.value)).toFixed(2)
	const totalPerPerson = (((parseInt(inputOne.value)) / (parseInt(inputThree.value))) + parseInt(tipPerPerson)).toFixed(2)
	price.textContent = `$${tipPerPerson}`
	price2.textContent = `$${totalPerPerson}`
})

custom.addEventListener("change", function () {
	const tipPerPerson = ((parseInt(inputOne.value) * (custom.value / 100)) / parseInt(inputThree.value)).toFixed(2)
	const totalPerPerson = (((parseInt(inputOne.value)) / (parseInt(inputThree.value))) + parseInt(tipPerPerson)).toFixed(2)
	price.textContent = `$${tipPerPerson}`
	price2.textContent = `$${totalPerPerson}`
	buttonOne.checked = false
	buttonTwo.checked = false
	buttonThree.checked = false
	buttonFour.checked = false
	buttonFive.checked = false
})

reset.addEventListener("click", function () {
	inputOne.value = ""
	custom.value = ""
	inputThree.value = ""
	price.textContent = "$0.00"
	price2.textContent = "$0.00"
	error.style.display = "none"
	errorTwo.style.display = "none"
	errorThree.style.display = "none"
	errorFour.style.display = "none"
	buttonOne.checked = false
	buttonTwo.checked = false
	buttonThree.checked = false
	buttonFour.checked = false
	buttonFive.checked = false
	buttonOne.disabled = true
	buttonTwo.disabled = true
	buttonThree.disabled = true
	buttonFour.disabled = true
	buttonFive.disabled = true
	custom.disabled = true
	this.disabled = true
})

inputOne.addEventListener("focus", function () {
	inputGroupOne.style.border = "2px hsl(172, 67%, 45%) solid"
})

inputOne.addEventListener("blur", function () {
	inputGroupOne.style.border = "none"
})

inputThree.addEventListener("focus", function () {
	inputGroupTwo.style.border = "2px hsl(172, 67%, 45%) solid"
})

inputThree.addEventListener("blur", function () {
	inputGroupTwo.style.border = "none"
})

custom.addEventListener("focus", function () {
	custom.style.border = "2px hsl(172, 67%, 45%) solid"
})

custom.addEventListener("blur", function () {
	custom.style.border = "none"
})



