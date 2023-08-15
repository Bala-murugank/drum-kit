
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function () {

  //this.style.color="bule";
  //console.log(this.innerHTML)

  //this.style.color="white";
 // var buttonInnerHtml= this.innerHTML;
makeSound(this.innerHTML);

buttonAnimation(this.innerHTML);
}
);


}

document.addEventListener("keydown", function(e){
   makeSound(e.key);
   buttonAnimation(e.key);
});


function makeSound(key){

    switch(key){

    case 'w':
        new Audio("sounds/tom-1.mp3").play();
        break;

    case 'a':
        new Audio("sounds/tom-2.mp3").play();
        break;
    case 's':
        new Audio("sounds/snare.mp3").play();
        break;
    case 'd':
        new Audio("sounds/tom-4.mp3").play();
        break;
    case 'j':
        new Audio("sounds/tom-3.mp3").play();
        break;
    case 'k':
        new Audio("sounds/kick-bass.mp3").play();
        break;
    case 'l':
        new Audio("sounds/crash.mp3").play();
        break;            
  }
}


function buttonAnimation(currentButtonOrKey){

 var activeButton= document.querySelector("."+currentButtonOrKey);

 activeButton.classList.add("pressed");

 setTimeout(function (){
    activeButton.classList.remove("pressed")
    
 }, 1.26);
}




