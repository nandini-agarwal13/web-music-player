const music =new Audio('songs/espresso.mp3');
music.play();

let popsongleft = document.getElementById('popsongleft');
let popsongright = document.getElementById('popsongright');
let popsong = document.getElementsByClassName('popsong')[0];

popsongright.addEventListener('click',()=>{
    popsong.scrollLeft += 330;
});
popsongleft.addEventListener('click',()=>{
    popsong.scrollLeft -= 330;
});
let popartleft = document.getElementById('popartleft');
let popartright = document.getElementById('popartright');
let item = document.getElementsByClassName('item')[0];

popartright.addEventListener('click',()=>{
    item.scrollLeft += 330;
});
popartleft.addEventListener('click',()=>{
    item.scrollLeft -= 330;
});






