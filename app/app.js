const contenedor=document.querySelector(".contenedor");
const img=document.querySelectorAll(".carta img");
const info=document.querySelector(".info");
const infoImg=document.querySelector(".info img");
const botonCerrar=document.querySelector(".cerrar");
const abrir = (i)=>{
    console.log(i)
    infoImg.src=i.src;
    info.style.opacity = "1";
    info.style.width = "95vw";
    info.style.height="95vh";
}
const cerrar = ()=>{
    info.style.opacity="0";
    info.style.width="0vw";
    info.style.height="0vh";
}

    contenedor.addEventListener('click',(a)=>{
        if(a.target.localName==="img"){
        abrir(a.target)
        }
    })

botonCerrar.addEventListener("click",()=>
cerrar()
);