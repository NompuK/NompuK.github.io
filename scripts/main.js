let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/initech.gif');
    } else {
      myImage.setAttribute('src','images/initech_building.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Bitte gib deinen Namen ein:');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Hallo ' + myName +'! Wie geht es dir?';
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContext = 'Hallo ' + storedName + '! Wie geht es dir?';
}

myButton.onclick = function() {
	setUserName();
}


