


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Initech.gif') {
      myImage.setAttribute('src','images/initech_building.jpeg');
    } else {
      myImage.setAttribute('src','images/Initech.gif');
    }
}

let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

function setUserName() {
	let myName = prompt('Bitte gib deinen Namen ein:');
	if(!myName) {
		setUserName();
	} else {
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Hallo ' + myName +'! Wie geht es dir?';
	}	
}


myButton.onclick = function() {
	setUserName();
}




if(localStorage.getItem('name') !== null) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContext = 'Hallo ' + storedName + '! Wie geht es dir?';
}
