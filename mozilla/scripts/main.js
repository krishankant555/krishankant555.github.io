// it change image on click
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/google.png');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}

// selecting button and heading 
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// creating function setusername
 function setUserName(){
  let myName =prompt('Please Enter your name.');
  if(!myName){
    setUserName();
  }
  else{
  localStorage.setItem('name', myName);
  myHeading.textContent= 'Mozilla is cool, ' + myName;
  }
 }

// conditons
 if (!localStorage.getItem('name')) {
  setUserName();
 }else{
 let storedName= localStorage.getItem('name');
 myHeading.textContent = 'Mozilla is cool, ' + storedName;
 }
 
// button event handler
myButton.onclick =function(){
  setUserName();
}