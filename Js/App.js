let Powerbutton=document.querySelector("#Powerbutton");
let Walcometext=document.querySelector(".Walcome-text");
let Onbutton=document.querySelector(".Onbutton");
let walcomeimg=document.querySelector(".Walcome");
function active ()
{
Walcometext.remove();
Powerbutton.remove();
walcomeimg.src="İmg/Hos-geldiniz.png";



}

Powerbutton.addEventListener('click',active);