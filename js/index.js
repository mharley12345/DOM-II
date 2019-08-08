//-------------------Selectors---------------------------------
const moveLogo = document.querySelector('.logo-heading');                                                         
const body1 = document.querySelector('body');               
const wordColor = document.querySelector('body') 
let mouseOver1 = document.querySelector(".nav"); 
let keyDown1 = document.querySelector("body"); 
let wheel1 = document.querySelector("footer");
let wheel2 = document.querySelector("body");  
let doubleClick = document.querySelector('.text-content')
let button = document.querySelector('.btn') 
let destination = document.querySelector('.destination')
                                        
                                                                   

//-------------------------------------------------------------- 
 //   Mouse Over                                                 
                                                                
mouseOver1.addEventListener("mouseover", event =>  {                  
                                                                      
  event.target.style.color = "red";                                   
                                                                      
 setTimeout(function() {                                            
    event.target.style.color = "";                                  
  }, 10000);                                                      
}, false);                                                      
//---------------------------------------------------------------
// Key Down                                                     
                                                
                                                            
keyDown1.addEventListener('keydown', event => {                 
    alert(`${event.code}`)                                               
                                                                         
});                                                                      
//--------------------------------------------------------------                                                           
// Wheel Scroll                                                          
                                                                         
                                                                         
wheel1.addEventListener('wheel', event => {                              
    alert(event.textContent='You scrolled your mouse wheel')             
});                                                                      
//-----------------------------------------------------------------------                                                         
                                                                         
//    On Click                                                           
                                                                         
function random(number) {                                                
 return Math.floor(Math.random() * number);                              
}                                                                        
                                                           
function randomColor() {                                 
   return `rgb(${random(215)}, ${random(100)}, ${random(200)})`;
}                                                                       
                                                                        
wordColor.onclick = function() {                                        
  wordColor.style.color = randomColor();                                
  body1.style.backgroundColor = randomColor();                          
    setTimeout(function(){                   
    wordColor.style.color = "";                                          
    body1.style.backgroundColor = "";                                    
     }, 30000);                                                          
};  
button.addEventListener('click',function(event){event.stopPro}
)                                                                    
//----------------------------------------------------------------------                
//   Window Event                                                       
     window.addEventListener('load', (event) => {                       
  alert('Your page is now fully loaded');                                 
});                                                                       
                                                                        
//----------------------------------------------------------------------
//  Move Logo                                                         
                                                                      
TweenMax.to(moveLogo, 5, {x:1220, y:4, scale:2, skewX:45, rotation:360});                                               
                                                                                                 
                                                                                                      
// Set Timeout then move logo back to start                                                                                         
                                                                                                     
setTimeout(() => {                                                                                
TweenMax.to(moveLogo, 5, {x:46, y:4, scale:2, skewX:45, rotation:360});                 
                                                                                                                                            
}, 15000);                                                                        
                                                                                 
///-------------------------------------------------------------------------------  
// .preventDefault() nav bar links home is set to a link that would open new page                          
document.querySelector('a').addEventListener('click',function(event){            
  event.preventDefault();                                                   
});                                                                        
//-------------------------------------------------------------------------------
                                
//    Double Click "Let's"
doubleClick.addEventListener('dblclick',event=>{
  alert(event.textContent='You Double Clicked')
})                   
                          
destination.addEventListener('click',(event)=>{
  alert(event.textContent="click")
},
button.addEventListener('click',(event)=>{
 event.stopPropagation();
  // alert(event.textContent='click')
}))                                                                   
                                                                         
                                                                         
                                                                         
                                                                     
                                                                     
                                                                    
                                                            
                                                            
                                                         
                                         
                                        
                                        
                                     
                                     
                                     
                                     
                                     
                                     
                                     
                                     
                                     
                                     
     
     
     
     
     
     
                                   
                                



     




                                    




     



                                                            
                                                                    
                                       


 
     
         
        
      
                                                            
                                                                    