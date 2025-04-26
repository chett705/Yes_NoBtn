const btnyes =document.getElementById("btn-yes");
const btnNo =document.getElementById("btn-no");

btnNo.onmousemove= ()=>{
    const widthran =window.innerWidth;
    const heightran =window.innerHeight;

    const random =Math.floor(Math.random() * (widthran-100));
    const randomh =Math.floor(Math.random() * (heightran-50));
    

    btnNo.style.left =`${random}px` ;
    btnNo.style.top =`${randomh}px` ;
}