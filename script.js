// Obtaining Elements from DOM
const alteredElememt = document.getElementsByClassName("mainContainer");
const elementArray = document.getElementsByTagName("h4");

const elementTexted = elementArray[0];
const appendedElement = document.createElement("span");
const embeddedText = document.createTextNode("| Yeah, See it down below! 👇");
appendedElement.appendChild(embeddedText);

// Prepending a child on the h4 tag by attaching the child as a node
const texts = ["Click here"];

const nodes = texts.map((text) => {
    const prepended = document.createElement("i");
    prepended.textContent = text;
    return prepended;
});
elementTexted.prepend(...nodes);

// Fetching tag elements as an array && then enumerating the first item
tagIElements = document.getElementsByTagName("i");
hiddenElement = tagIElements[0];

onlySpanElement = document.getElementsByClassName("hiddenSpan");
hiddenSpanElement = onlySpanElement[0];

// variable For Button That ReLoads Page
const allButtons = document.getElementsByTagName("button");
const buttonToReload = allButtons[0];

// Querying for the animation div
const animatedDiv = document.querySelector(".animatedContainer");

// Activating the "class animate" once the "Click here" is clicked
function animate() {
    animatedDiv.classList.add("animate");
}

// Function called at a click of the HTML element "div"
function changeText() {
    elementTexted.appendChild(appendedElement);
    elementTexted.classList.add("alignText");
    hiddenElement.classList.add("invisible");
    hiddenSpanElement.classList.add("invisible");
    elementTexted.classList.add("appearedText");
    buttonToReload.classList.add("visible");

    animate();
}

buttonToReload.addEventListener("click", function () {
    location.reload();
});
