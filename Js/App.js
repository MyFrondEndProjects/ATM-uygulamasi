let Powerbutton=document.querySelector("#Powerbutton");
let Walcometext=document.querySelector(".Walcome-text");
let Onbutton=document.querySelector(".Onbutton");
let walcomeimg=document.querySelector(".Walcome");
let Loginform=document.querySelector("#Loginform");
let blackpanel=document.querySelector(".blackpanel");
let activepanel=document.querySelector("#Loginform");


const data =[
    {
        Kartnumarası:"123",
        sifre:"123",
        isim:"Mustafa",


        bakiye:3000,
        borc:3000,
        asgaritutar:0,
        kredikartinakitavans:0,

        
    }
]
function active ()
{
Walcometext.remove();
Powerbutton.remove();
walcomeimg.src="İmg/Hos-geldiniz.png";



let kartnumarasi=document.createElement("input");
kartnumarasi.type="text";
kartnumarasi.classList.add("kartnumarasi");
kartnumarasi.placeholder="Kart numaranızı giriniz";

let sifre=document.createElement("input");
sifre.type="password";
sifre.classList.add("sifre");
sifre.placeholder="Sifrenizi giriniz";

let girisbuton=document.createElement("button");
girisbuton.classList.add("girisbuton");
girisbuton.textContent="Giris Yap"
girisbuton.href="#";


let Kartno=document.createElement("p");
Kartno.classList.add("Kartno");
Kartno.textContent="Kart numarası";


let Pass=document.createElement("p");
Pass.classList.add("Pass");
Pass.textContent="Sifre";

Loginform.appendChild(kartnumarasi);
Loginform.appendChild(sifre);
Loginform.appendChild(girisbuton);
Loginform.appendChild(Kartno);
Loginform.appendChild(Pass);

function giris()
{
    for(let i=0; i<data.length; i++)
    {
         if(kartnumarasi.value==data[i].Kartnumarası && sifre.value==data[i].sifre)
         {
            walcomeimg.src="";


           let text=document.createElement("p");
           text.classList.add("Walcome-text");
           text.style.marginLeft="20px";
           blackpanel.appendChild(text);
           text.textContent="Hosgeldiniz Mustafa bey"
           setTimeout(() => {text.remove()},3000);

         


         }
       else
       {
        alert("Kart numarası ya da sifre hatalı");
       
       }
    }
}
girisbuton.addEventListener('click',giris);
}



function Off()
{
    while (blackpanel.firstChild) {
        blackpanel.removeChild(blackpanel.firstChild); 
    }
    while (Loginform.firstChild) {
        Loginform.removeChild(Loginform.firstChild); 
        
    }
    Onbutton.remove();
    
     let activebutton=document.createElement("a");
     activebutton.classList.add("Onbutton");
     
     let imgbuton=document.createElement("img");
     imgbuton.classList="ActiveButon";
     imgbuton.src="İmg/Onbutton.png";

     

     location.reload();
}


Onbutton.addEventListener('click',Off);
Powerbutton.addEventListener('click',active);