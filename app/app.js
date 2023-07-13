const carta=document.querySelectorAll(".carta");
const img=document.querySelectorAll(".carta img");
const info=document.querySelector(".info");
const infoImg=document.querySelector(".info img");
const botonCerrar=document.querySelector(".cerrar");
const abrir = (i)=>{
    info.style.opacity = "0.9";
    info.style.width = "95vw";
    info.style.height="95vh";
    infoImg.src=img[i].src;
}
const cerrar = ()=>{
    info.style.opacity="0";
    info.style.width="0vw";
    info.style.height="0vh";
}

carta.forEach(function (carta,i){
    carta.addEventListener('click',()=>abrir(i))
})

botonCerrar.addEventListener("click",()=>
cerrar()
);