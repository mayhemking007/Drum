var noOfLoops=document.querySelectorAll(".drum").length;
var i=0;

while(i<noOfLoops){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   
   makeSound(this.innerHTML);
   buttonAnimation(this.innerHTML);
})
i++;


}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch(key){
        case 'w':
         var tom1 = new Audio("tom-1.mp3"); 
         tom1.play();
         break;
         case 'a':
         var tom2 = new Audio("tom-2.mp3"); 
         tom2.play();
         break;
         case 's':
         var tom3 = new Audio("tom-3.mp3"); 
         tom3.play();
         break;
         case 'd':
         var tom4 = new Audio("tom-4.mp3"); 
         tom4.play();
         break;
         case 'j':
         var snare = new Audio("snare.mp3"); 
         snare.play();
         break;
         case 'k':
         var crash = new Audio("crash.mp3"); 
         crash.play();
         break;
         case 'l':
         var kickBass = new Audio("kick-bass.mp3"); 
         kickBass.play();
         break;
         

    }
}
function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

     setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100);
}