//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'

//resolve // QUESTION 1 here
let child = document.createElement("div")

document.getElementById("a-1").appendChild(child)

child.className = "square"
child.textContent = "X"
child.addEventListener("click", function(){
    if (child.textContent == "X") {
        child.textContent = "O"
    } else {
        child.textContent = "X"
    }
})

//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];

//resolve // QUESTION 2 here
let dropDown = document.createElement("select")
let option
dropDown.id = "colors"

for (i=0; i < colors.length; i++) {
    option = document.createElement("option")
    option.value = colors[i]
    option.innerHTML = colors[i]
    dropDown.appendChild(option)
}
document.getElementById("a-2").appendChild(dropDown)

let button = document.createElement("button")
button.type = "button"
button.textContent = "Remove"

document.getElementById("a-2").appendChild(button)

button.addEventListener("click", function(){
    let selected = document.getElementById
    ("colors")
    console.log(selected)
    console.log(selected.selectedIndex)
    dropDown.remove(selected.selectedIndex)
})

//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)

calculateSphere = () => {
    let radius = document.getElementById("radius")
    radius = parseInt(radius.value)
    console.log(typeof radius, radius)

    let volume = (4/3) * Math.PI * Math.pow(radius, 3)
    console.log(volume)
    document.getElementById("volume").value = volume.toFixed(2)

    let area = 4 * Math.PI * Math.pow(radius, 2)
    console.log(area)
    document.getElementById("area").value = area.toFixed(2)
}

//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer. 

//resolve // QUESTION 4 here
let buttonOne = document.createElement("button")
buttonOne.type = "button"
buttonOne.textContent = "Hide Q1"
let buttonTwo = document.createElement("button")
buttonTwo.type = "button"
buttonTwo.textContent = "Hide Q2"
let buttonThree = document.createElement("button")
buttonThree.type = "button"
buttonThree.textContent = "Hide Q3"

let answerSectionOne = document.getElementById("a-1")
answerSectionOne.style.display = "block"
buttonOne.addEventListener("click", function() {
    if (answerSectionOne.style.display == "block") {
        answerSectionOne.style.display = "none"
        buttonOne.textContent = "Show Q1"
    } else {
        answerSectionOne.style.display = "block"
        buttonOne.textContent = "Hide Q1"
    }
})

let answerSectionTwo = document.getElementById("a-2")
answerSectionTwo.style.display = "block"
buttonTwo.addEventListener("click", function() {
    if (answerSectionTwo.style.display == "block") {
        answerSectionTwo.style.display = "none"
        buttonTwo.textContent = "Show Q2"
    } else {
        answerSectionTwo.style.display = "block"
        buttonTwo.textContent = "Hide Q2"
    }
})

let answerSectionThree = document.getElementById("a-3")
answerSectionThree.style.display = "block"
buttonThree.addEventListener("click", function() {
    if (answerSectionThree.style.display == "block") {
        answerSectionThree.style.display = "none"
        buttonThree.textContent = "Show Q3"
    } else {
        answerSectionThree.style.display = "block"
        buttonThree.textContent = "Hide Q3"
    }
})

document.getElementById("a-4").appendChild(buttonOne)
document.getElementById("a-4").appendChild(buttonTwo)
document.getElementById("a-4").appendChild(buttonThree)