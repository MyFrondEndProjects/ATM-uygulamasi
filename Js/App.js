let Powerbutton=document.querySelector("#Powerbutton");
let Walcometext=document.querySelector(".Walcome-text");
let Onbutton=document.querySelector(".Onbutton");
let walcomeimg=document.querySelector(".Walcome");
let Loginform=document.querySelector("#Loginform");
let blackpanel=document.querySelector(".blackpanel");
let activepanel=document.querySelector("#Loginform");
let activepanel1=document.querySelector("activepanel ");
let adsoyad=document.querySelector(".isimsoyisim");


const data =[
    {
        Kartnumarası:"123",
        sifre:"123",
        isimsoyisim:"Mustafa",
        bakiye:4000,
        borc:2000,
        asgaritutar:0,
        nakitavans:0,
        kalankullanımhakkı:0,
        nakitavanslimit:0,
        odenenborc:800

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
          
            walcomeimg.remove();


           let text=document.createElement("p");
           text.classList.add("Walcome-text");
           text.style.marginLeft="20px";
         
           kartnumarasi.value="";
           sifre.value="";
           


           let  Kullanılabilirlimit=document.createElement("button");
           Kullanılabilirlimit.classList.add("Kullanılabilirlimit");
           Kullanılabilirlimit.textContent="Kullanılabilir limit";

           let  borcbtn=document.createElement("button");
           borcbtn.classList.add("borcbtn");
           borcbtn.textContent="Toplam borc";

           let asgaritutarbtn=document.createElement("button");
           asgaritutarbtn.classList.add("asgaritutarbtn");
           asgaritutarbtn.textContent="Asgari tutar";


           let nakitavansbtn =document.createElement("button");
           nakitavansbtn.classList.add("nakitavansbtn");
           nakitavansbtn.textContent="Nakit avans";

           let Bakiyesorgulabtn=document.createElement("button");
           Bakiyesorgulabtn.classList.add("Bakiyesorgulabtn");
           Bakiyesorgulabtn.textContent="Bakiye sorgula";


           blackpanel.appendChild(text);
           blackpanel.appendChild(Kullanılabilirlimit);
           blackpanel.appendChild(borcbtn);
           blackpanel.appendChild(asgaritutarbtn);
           blackpanel.appendChild(nakitavansbtn);
           blackpanel.appendChild(Bakiyesorgulabtn);


           kartnumarasi.remove();
           sifre.remove();
           Kartno.remove();
           Pass.remove();
           girisbuton.remove();




           const bakiyesorgula = () => 
           {
            Kullanılabilirlimit.remove();
            borcbtn.remove();
            asgaritutarbtn.remove();
            nakitavansbtn.remove();
            Bakiyesorgulabtn.remove();

            let text=document.createElement("p");
            text.classList.add("Walcome-text");
            text.textContent="Hesaptaki bakiyeniz:"+data[i].bakiye+" TL ";
            text.style.marginLeft="0.2em";
            kartnumarasi.remove();
            sifre.remove();
            Kartno.remove();
            Pass.remove();
            girisbuton.remove();



            let geri=document.createElement("button");
            geri.classList.add("Geri");
            geri.textContent="Çıkış yap";

            let information=document.createElement("p");
            information.classList.add("information");
            information.textContent="Güle güle tekrar bekleriz";

            blackpanel.appendChild(text);
            blackpanel.appendChild(geri);
            blackpanel.appendChild(information);


              const geridon = () => 
              {
                
              }
            geri.addEventListener('click',geridon);
           }






          const Borcsorgula=() =>
          {
            Kullanılabilirlimit.remove();
            borcbtn.remove();
            asgaritutarbtn.remove();
            nakitavansbtn.remove();
            Bakiyesorgulabtn.remove();

            let text=document.createElement("p");
            text.classList.add("Walcome-text");
            text.textContent="Toplam borcunuz:"+data[i].borc+" TL ";
            text.style.marginLeft="0.2em";
            kartnumarasi.remove();
            sifre.remove();
            Kartno.remove();
            Pass.remove();
            girisbuton.remove();



            let geri=document.createElement("button");
            geri.classList.add("Geri");
            geri.textContent="Çıkış yap";

            let information=document.createElement("p");
            information.classList.add("information");
            information.textContent="Güle güle tekrar bekleriz";

            blackpanel.appendChild(text);
            blackpanel.appendChild(geri);
            blackpanel.appendChild(information);




             const geridon = () => 
              {
                active ();
                text.remove();
                geri.remove();
                information.remove();
              }
            geri.addEventListener('click',geridon);

          }


          const Nakitavans=() =>
          {
            Kullanılabilirlimit.remove();
            borcbtn.remove();
            asgaritutarbtn.remove();
            nakitavansbtn.remove();
            Bakiyesorgulabtn.remove();

            let text=document.createElement("p");
            text.classList.add("Walcome-text");
            data[i].kalankullanımhakkı=data[i].borc-data[i].odenenborc;
            data[i].nakitavans=data[i].kalankullanımhakkı;
            text.textContent="Nakit avans çekebileceğiniz miktar:"+data[i].nakitavans+" TL ";
            text.style.marginLeft="0.2em";
            kartnumarasi.remove();
            sifre.remove();
            Kartno.remove();
            Pass.remove();
            girisbuton.remove();
 
          
           let Paracek=document.createElement("input");
           Paracek.classList.add("Paracek");
           Paracek.type="Number";
           Paracek.placeholder="Cekmek istediğiniz tutarı giriniz";
           

           blackpanel.appendChild(text);
           blackpanel.appendChild(Paracek);
     
          }

const asgaritutarhesapla= () =>
{
    data[i].asgaritutar=(data[i].borc / 100)*20;

    Kullanılabilirlimit.remove();
    borcbtn.remove();
    asgaritutarbtn.remove();
    nakitavansbtn.remove();
    Bakiyesorgulabtn.remove();

    let text=document.createElement("p");
    text.classList.add("Walcome-text");
    text.textContent="Borcunuzun asgari tutarı:"+data[i].asgaritutar+" TL ";
    text.style.marginLeft="0.2em";
    kartnumarasi.remove();
    sifre.remove();
    Kartno.remove();
    Pass.remove();
    girisbuton.remove();

    let information=document.createElement("p");
    information.classList.add("information");
    information.textContent="Güle güle tekrar bekleriz";

    blackpanel.appendChild(text);
    blackpanel.appendChild(geri);
    blackpanel.appendChild(information);


}

     const KullanılabilirlimitF=() => 
     {
      Kullanılabilirlimit.remove();
      Bakiyesorgulabtn.remove();
      nakitavansbtn.remove();
      asgaritutarbtn.remove();
      borcbtn.remove();

      data[i].kalankullanımhakkı=data[i].borc-data[i].odenenborc;

      let text=document.createElement("p");
      text.classList.add("Walcome-text");
      text.textContent="Kullanılabilirlimit:"+data[i].kalankullanımhakkı+" TL";
       
 

      
      blackpanel.appendChild(text);
     }

           Bakiyesorgulabtn.addEventListener("click", bakiyesorgula);
           borcbtn.addEventListener('click',Borcsorgula);
           nakitavansbtn.addEventListener("click",Nakitavans);
           asgaritutarbtn.addEventListener("click",asgaritutarhesapla);
           Kullanılabilirlimit.addEventListener('click',KullanılabilirlimitF);
           
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
    
    location.reload();

     
}


Onbutton.addEventListener('click',Off);
Powerbutton.addEventListener('click',active);