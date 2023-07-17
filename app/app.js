const contenedor=document.querySelector(".contenedor");
const img=document.querySelectorAll(".carta img");
const info=document.querySelector(".info");
const infoImg=document.querySelector(".info img");
const botonCerrar=document.querySelector(".cerrar");
const abrir = (i)=>{
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
        console.log(a.target.firstElementChild)
        if(a.target.parentElement.className==="carta"){
            abrir(a.target.parentElement.firstElementChild)
        }else if (a.target.parentElement.className==="contenedor"){
            abrir(a.target.firstElementChild)
        }
    })

botonCerrar.addEventListener("click",()=>
cerrar()
);