let moveLogo = document.querySelector('.logo-heading');




// Move Logo

TweenMax.to(moveLogo, 5,{x:1220,y:4,skewX:45,rotation:360});
// move logo back

setTimeout(()=>{
    TweenMax.to(moveLogo,5,{x:46,y:4,scale:2,skewX:45,rotation:360});

}, 15000);