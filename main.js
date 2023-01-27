const container = document.querySelector(".container");

const headContent = document.createElement("div");
headContent.classList.add("head-content");
container.appendChild(headContent);

const middleContent = document.createElement("div");
middleContent.classList.add("middle-content");
container.appendChild(middleContent);

const bottomContent = document.createElement("div");
bottomContent.classList.add("bottom-content");
container.appendChild(bottomContent);

const numberBar = document.createElement("div");
numberBar.classList.add("number-bar");
middleContent.appendChild(numberBar);

const screen = document.createElement("div");
screen.classList.add("screen");
middleContent.appendChild(screen);

const scrollBar = document.createElement("div");
scrollBar.classList.add("scroll-bar");
middleContent.appendChild(scrollBar);

const buttonBar = document.createElement("div");
buttonBar.classList.add("button-bar");
bottomContent.appendChild(buttonBar);

const pixel1 = document.createElement("div");
pixel1.classList.add("pixel");
screen.appendChild(pixel1);

const pixel2 = document.createElement("div");
pixel2.classList.add("pixel");
screen.appendChild(pixel2);

const pixel3 = document.createElement("div");
pixel3.classList.add("pixel");
screen.appendChild(pixel3);

const pixel4 = document.createElement("div");
pixel4.classList.add("pixel");
screen.appendChild(pixel4);

const pixel5 = document.createElement("div");
pixel5.classList.add("pixel");
screen.appendChild(pixel5);

const pixel6 = document.createElement("div");
pixel6.classList.add("pixel");
screen.appendChild(pixel6);

const pixel7 = document.createElement("div");
pixel7.classList.add("pixel");
screen.appendChild(pixel7);

const pixel8 = document.createElement("div");
pixel8.classList.add("pixel");
screen.appendChild(pixel8);

const pixel9 = document.createElement("div");
pixel9.classList.add("pixel");
screen.appendChild(pixel9);