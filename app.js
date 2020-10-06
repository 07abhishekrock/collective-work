container = document.querySelector("div.image-container");
images_list = document.querySelectorAll("div.image-container>div.image")
//initialisation of the image frame
let i=0;
// function animation(value){
//     images_list[i%3].style.zIndex=-1;
//     images_list[(i+1)%3].style.zIndex=0;
//     images_list[(i+2)%3].style.zIndex=1;
//     images_list[i%3].style.transform=`translateY(${value}%)`;
//     images_list[(i+1)%3].style.transform="translateY(0%)";
//     images_list[(i+2)%3].style.transform="translateY(0%)";
//     i=i+1;
//     if(i===3){
//         i=0;
//     }
// }

function animation(value){
images_list[i%3].style.zIndex=-1;
images_list[(i+1)%3].style.zIndex=0;
images_list[(i+2)%3].style.zIndex=1;

images_list[i%3].style.transform="translateY(-100%)";
images_list[(i+1)%3].style.transform="translateY(0%)";
images_list[(i+2)%3].style.transform="translateY(0%)";
i++;
if(i==3){
    i=0;
}
}





// clearInterval(animationInterval);

    var clientY;
container.addEventListener('touchstart',function(e)
{
    e.preventDefault();
        clientY = e.touches[0].clientY;

})

container.addEventListener('touchend',function(ev){
    ev.preventDefault();
    let deltaY;
   deltaY = ev.changedTouches[0].clientY - clientY;
   
   if(deltaY<-50){
       animation();
   };

})