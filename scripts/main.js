let myImage = document.querySelector('img');
myImage.onclick = function(){
    let myScr = myImage.getAttribute('src');
    if(myScr === 'images/firefox-logo.png'){
        myImage.setAttribute ('src', 'images/firefox-logo2.png');
    }else{
        myImage.setAttribute ('src', 'images/firefox-logo.png');
    }

}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
 function setUserName()
 {
     let myName = prompt('Please enter your name:');
     if(!myName){
         setUserName();
     }
     localStorage.setItem('name', myName);
     myHeading.textContent = 'Mozilla is cool, ' + myName;
 }

 if(!localStorage.getItem('name')){
     setUserName();
 }
 else{
     let storedName = localStorage.getItem('name');
     myHeading.textContent = 'Mozilla is cool, ' + storedName;
 }

 myButton.onclick = function() {
     setUserName();
 }