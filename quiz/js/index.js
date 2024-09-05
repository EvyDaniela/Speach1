//tomo los elementos del html
const nombre = document.querySelector("#nombre");
const btnComenzar = document.querySelector("#comenzar");

//Agrego un event listener clic al botòn comenzar
btnComenzar.addEventListener("click",()=>{
    //seteo los valores del local storage que serán neceasarios en las otras pàginas
    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("puntaje-total",0);
    localStorage.removeItem("categorias-jugadas");
    
    //lo redirijo a la parte del menú
    location.href="menu.html";
})
document.getElementById('toc-button').addEventListener('click', function() {
    const tocContent = document.getElementById('toc-content');
    tocContent.style.display = tocContent.style.display === 'none' || tocContent.style.display === '' ? 'block' : 'none';
});
document.querySelector('.floating-button-link').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace realice la acción predeterminada
    const content = document.getElementById('toc-content1');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
});