const btnMostrar = document.querySelector(".btnMostrar")
const liNone = document.querySelectorAll(".liNone")

btnMostrar.addEventListener("click",()=>{
    liNone.forEach((elemento) =>{
        elemento.classList.toggle("liAtivo")
        
    })

    if(liNone[0].classList.contains('liAtivo')){
        btnMostrar.innerHTML = 'Mostrar Menos...'
        btnMostrar.style.width = '130px'
    } else{
        btnMostrar.innerHTML = 'Mostrar Mais...'
        btnMostrar.style.width = '116px'
    }
    
})
