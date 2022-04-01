// TARGETS TO CLEAR OFF:
// attach the "Click here" text to refresh || load Page
// append an InnerText on the h4 element & let it be effected upon div hover | ✔
// trigger an animation by adding class "animate"
// function animation() {}

// Obtaining Elements from DOM
const alteredElememt = document.getElementsByClassName("mainContainer");
const elementArray = document.getElementsByTagName("h4");

const elementTexted = elementArray[0];
const appendedElement = document.createElement("span");
const embeddedText = document.createTextNode("| Yeah, See it down below! 👇");
appendedElement.appendChild(embeddedText);

// Prepending A Space because of the "a tag"
elementTexted.prepend(" ");

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

// target a div with className "mainContainer" && starting off its count at 0
let mainDiv = document.querySelector(".mainContainer");
let countOfMainDivClicks = 0;

// Listening for the number of clicks on the tackled div && strictly execute a block of instructions
mainDiv.addEventListener("click", function () {
    countOfMainDivClicks++;

    if (countOfMainDivClicks <= 1) {
        const links = ["Back To Default"];
        const nodes = links.map((link) => {
            const prepended2 = document.createElement("i");
            prepended2.textContent = link;
            prepended2.classList.add("adjustedText");
            return prepended2;
        });
        elementTexted.prepend(...nodes);
    }
});

// Function called at a click of the HTML element "div"
function changeText() {
    elementTexted.appendChild(appendedElement);
    hiddenElement.classList.add("invisible");
    hiddenSpanElement.classList.add("invisible");
    elementTexted.classList.add("appearedText");
}

// W3Schools pre-defined JavaScript Functons
function w3_open() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = "none";
}
function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}
