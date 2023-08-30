let night= document.getElementById("night")
function createStars(){
    var $div = $('#backgroundNight'),
        divWidth = $div.width(),
        divHeight = $div.height();
    var star = document.createElement('div');
    star.style.top= Math.floor( Math.random() * divHeight )+"px" 
    star.style.left = Math.floor( Math.random() * divWidth ) +"px"
    star.classList.add('star');
    star.addEventListener("animationend", deleteStar);
    night.appendChild(star);
}

function deleteStar(e) {
    e.target.remove()
}

setInterval(() => {
    createStars()
}, Math.floor(Math.random() * 2000));

// function test() {
//     var $div = $('#backgroundNight'),
//         divWidth = $div.width(),
//         divHeight = $div.height();

//     /*for(let i = 0; i < 5; i++) {
//         // console.log($('.star').eq(i));
//         $('.star').eq(i).css({
//             left: Math.floor( Math.random() * divWidth ),
//             top: Math.floor( Math.random() * divHeight ),
//             animation: "tail 3s ease-in-out , falling 3s ease-in-out "
//         });
//     }*/
//     $('.night').append('<div class="star"></div>');    

//     $('#star1').on("animationend", function(){
//         console.log("as");
        
//     });
//     setTimeout(test,10000)
// }