
//////////////////////////

const preguntas = [
    {
        id:1,
        categoria: "quiz1",
        titulo: "What is Machine Code?",
        opcionA: "a) A high-level programming language",
        opcionB: "b) Native computer code that can be understood without translation ",
        opcionC: "c) A type of encryption",
        opcionD: "d) A coding style guide",
        correcta: "b"
    },
    {
        id:2,
        categoria: "quiz1",
        titulo: "What does Maintenance refer to in software context?",
        opcionA: "a) The cleaning of computer hardware",
        opcionB: "b) The upkeep of a software program",
        opcionC: "c) The process of creating new software",
        opcionD: "d) The deletion of old files",
        correcta: "b"
    },
    {
        id: 3,
        categoria: "quiz1",
        titulo: "What does 'Manage' mean?",
        opcionA: "a) To create",
        opcionB: "b) To destroy",
        opcionC: "c) To handle or control",
        opcionD: "d) To ignore",
        correcta: "c"
    },
    {
        id: 4,
        categoria: "quiz1",
        titulo: "What does 'Migrate' mean in a technological context?",
        opcionA: "a) To upgrade software",
        opcionB: "b) To move from one place to another",
        opcionC: "c) To copy data",
        opcionD: "d) To delete information",
        correcta: "b"
    },
    {
        id: 5,
        categoria: "quiz1",
        titulo: "What does 'Modify' mean?",
        opcionA: "a) To create something new",
        opcionB: "b) To delete",
        opcionC: "c) To change or alter",
        opcionD: "d) To leave unchanged",
        correcta: "c"
    },
    {
        id: 6,
        categoria: "quiz1",
        titulo: "What does NaaS stand for?",
        opcionA: "a) Network as a Service",
        opcionB: "b) New as a System",
        opcionC: "c) Network and System",
        opcionD: "d) None as a Service",
        correcta: "a"
    },
    {
        id: 7,
        categoria: "quiz1",
        titulo: "What is NAT?",
        opcionA: "a) New Address Technology",
        opcionB: "b) Network Address Translation",
        opcionC: "c) National Advanced Technology",
        opcionD: "d) Network Administration Tool",
        correcta: "b"
    },
    {
        id: 8,
        categoria: "quiz1",
        titulo: "What is a Network?",
        opcionA: "a) A single computer",
        opcionB: "b) A system of connected devices that can share information with each other",
        opcionC: "c) A type of software",
        opcionD: "d) A cloud storage service",
        correcta: "b"
    },
    {
        id: 9,
        categoria: "quiz1",
        titulo: "What is a Network Adapter?",
        opcionA: "a) A software program",
        opcionB: "b) A device that connects your computer to a network",
        opcionC: "c) A type of cable",
        opcionD: "d) A wireless router",
        correcta: "b"
    },
    {
        id: 10,
        categoria: "quiz1",
        titulo: "What does 'Outdated' mean?",
        opcionA: "a) Recently updated",
        opcionB: "b) Currently in use",
        opcionC: "c) Out of date",
        opcionD: "d) Highly advanced",
        correcta: "c"
    },
    {
        id: 11,
        categoria: "quiz1",
        titulo: "What is Open Source software?",
        opcionA: "a) Software that is free to use",
        opcionB: "b) Software with restricted access",
        opcionC: "c) A program in which the code is distributed allowing programmers to alter and change the original software",
        opcionD: "d) Software developed by a single company",
        correcta: "c"
    },
    {
        id: 12,
        categoria: "quiz1",
        titulo: "What is an Operating System?",
        opcionA: "a) A type of computer hardware",
        opcionB: "b) Software that communicates with computer hardware and allows other software to run",
        opcionC: "c) A network protocol",
        opcionD: "d) A programming language",
        correcta: "b"
    },
    {
        id: 13,
        categoria: "quiz1",
        titulo: "What does 'Obsolete' mean?",
        opcionA: "a) Newly introduced",
        opcionB: "b) Currently popular",
        opcionC: "c) Not used anymore",
        opcionD: "d) Under development",
        correcta: "c"
    },
    {
        id: 14,
        categoria: "quiz1",
        titulo: "In the context of social media, what does 'Organic' content refer to?",
        opcionA: "a) Content related to nature and environment",
        opcionB: "b) Paid advertisements",
        opcionC: "c) Content that ranks highly because individual users have liked, reposted, or viewed it",
        opcionD: "d) Content created by official company accounts ",
        correcta: "c"
    },
    {
        id: 15,
        categoria: "quiz2",
        titulo: "What is Viral content?",
        opcionA: "a) Content that contains computer viruses",
        opcionB: "b) Content, usually a video, that gets a lot of attention in a short amount of time",
        opcionC: "c) Content that is harmful to computers",
        opcionD: "d) Content that is shared only through email",
        correcta: "b"
    },
    {
        id: 16,
        categoria: "quiz2",
        titulo: "What does Virus mean in this context?",
        opcionA: "a) A computer malware",
        opcionB: "b) To move or send something from one place to another",
        opcionC: "c) A biological pathogen",
        opcionD: "d) A type of file compression",
        correcta: "b"
    },
    {
        id: 17,
        categoria: "quiz2",
        titulo: "What is a Visual in the context of technology?",
        opcionA: "a) A type of computer screen",
        opcionB: "b) A video file format",
        opcionC: "c) Something you look at that is used to make something appealing or easier to understand",
        opcionD: "d) A virtual reality device",
        correcta: "c"
    },
    {
        id: 18,
        categoria: "quiz2",
        titulo: "What is a VPN?",
        opcionA: "a) Virtual Personal Network",
        opcionB: "b) Visual Private Network",
        opcionC: "c) Virtual Public Network",
        opcionD: "d) Virtual Private Network",
        correcta: "d"
    },
    {
        id: 19,
        categoria: "quiz2",
        titulo: "What is a Web Browser?",
        opcionA: "a) A website creation tool",
        opcionB: "b) A software that is programmed to retrieve and display websites",
        opcionC: "c) An internet service provider",
        opcionD: "d) A type of computer virus",
        correcta: "b"
    },
    {
        id: 20,
        categoria: "quiz2",
        titulo: "What is a Website?",
        opcionA: "a) A computer program",
        opcionB: "b) A set of pages of information on the internet about a particular subject, published by a single person or organization",
        opcionC: "c) A type of internet connection",
        opcionD: "d) A social media platform",
        correcta: "b"
    },
    {
        id: 21,
        categoria: "quiz2",
        titulo: "What is Wifi?",
        opcionA: "a) A type of computer cable",
        opcionB: "b) A wireless technology that enables devices to connect to the internet without physical cables",
        opcionC: "c) A web browser",
        opcionD: "d) A file compression format",
        correcta: "b"
    },
    {
        id: 22,
        categoria: "quiz2",
        titulo: "What does WORD refer to in this context?",
        opcionA: "a) A single unit of language",
        opcionB: "b) A speech recognition software",
        opcionC: "c) A type of file format",
        opcionD: "d) The process of producing, editing and storing text on a computer",
        correcta: "d"
    },
    {
        id: 23,
        categoria: "quiz2",
        titulo: "What is X2?",
        opcionA: "a) A mathematical operation",
        opcionB: "b) A technology that enables data transmission speeds up to 56 Kbps using regular telephone service",
        opcionC: "c) A type of computer processor",
        opcionD: "d) A video game console",
        correcta: "b"
    },
    {
        id: 24,
        categoria: "quiz2",
        titulo: "What is XDR?",
        opcionA: "a) X-ray Detection and Response",
        opcionB: "b) Extended Data Recovery",
        opcionC: "c) Extended Detection and Response",
        opcionD: "d) X-ray Digital Reading",
        correcta: "c"
    },
    {
        id: 25,
        categoria: "quiz2",
        titulo: "What is XHTML?",
        opcionA: "a) Extensible Hypertext Markup Language",
        opcionB: "b) Extra Hypertext Markup Language",
        opcionC: "c) Extended Hypertext Markup Language",
        opcionD: "d) Extreme Hypertext Markup Language",
        correcta: "a"
    },
    {
        id: 26,
        categoria: "quiz2",
        titulo: "What is XML?",
        opcionA: "a) Extensible Markup Language",
        opcionB: "b) Extra Markup Language",
        opcionC: "c) Extended Markup Language",
        opcionD: "d) Extreme Markup Language",
        correcta: "a"
    },
    {
        id: 27,
        categoria: "quiz2",
        titulo: "What is a Zero-day attack?",
        opcionA: "a) An attack that occurs at midnight",
        opcionB: "b) A computer threat that tries to exploit unknown application vulnerabilities",
        opcionC: "c) A type of denial of service attack",
        opcionD: "d) An attack that takes zero days to execute",
        correcta: "b"
    },
    {
        id: 28,
        categoria: "quiz2",
        titulo: "What is Zero Trust Network Access (ZTNA)?",
        opcionA: "a) A network without any security measures",
        opcionB: "b) A security framework that requires all users to be authenticated, authorized, and continuously validated",
        opcionC: "c) A type of VPN",
        opcionD: "d) A network that doesn't allow any access",
        correcta: "b"
    },
    {
        id: 29,
        categoria: "quiz2",
        titulo: "What is a Zip file?",
        opcionA: "a) A type of computer virus",
        opcionB: "b) A common file compression format",
        opcionC: "c) A type of email attachment",
        opcionD: "d) A web browser extension",
        correcta: "b"
    },
    {
        id: 30,
        categoria: "quiz2",
        titulo: "What is a Zip drive?",
        opcionA: "a) A type of hard drive",
        opcionB: "b) A USB flash drive",
        opcionC: "c) A high capacity floppy disk drive",
        opcionD: "d) A CD-ROM drive",
        correcta: "c"
    },
    {
        id: 31,
        categoria: "quiz2",
        titulo: "What does Zoom mean in the context of computer graphics?",
        opcionA: "a) A video conferencing software",
        opcionB: "b) The act of enlarging a portion of an onscreen image for fine detail work",
        opcionC: "c) A type of computer monitor",
        opcionD: "d) A file compression technique",
        correcta: "b"
    },
]


//tomamos los elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");
nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;

/// total de quiz 
const totalPreguntasPorCategoria = {
    "quiz1": 14,
    "quiz2": 17
};
function ajustarTamañoContenedor() {
    const juegoHeight = juegoElement.offsetHeight;
    container.style.minHeight = `${juegoHeight + 40}px`; // Ajusta según sea necesario
}

//Recupero el puntaje en caso que ya este jugando
let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

//cargar las preguntas del tema que eligió
const categoriaActual = localStorage.getItem("categoria-actual");
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);
const totalPreguntas = totalPreguntasPorCategoria[categoriaActual] || 0;
function cargarSiguientePregunta(num){
    //tomo los elementos donde se cargaran los datos de la pregunta
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    numPregunta.innerHTML = num + 1;
    txtPregunta.innerHTML = preguntasCategoria[num].titulo;
    opcionA.innerHTML = preguntasCategoria[num].opcionA;
    opcionB.innerHTML = preguntasCategoria[num].opcionB;
    opcionC.innerHTML = preguntasCategoria[num].opcionC;
    opcionD.innerHTML = preguntasCategoria[num].opcionD;

    const totalPreguntasElement = document.querySelector("#total-preguntas");
    totalPreguntasElement.innerHTML = totalPreguntas;
    

    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen y las clases
    botonesRespuesta.forEach(opcion=>{
        opcion.removeEventListener("click", (e)=>{});
        opcion.classList.remove("correcta");
        opcion.classList.remove("incorrecta");
        opcion.classList.remove("no-events");
    })

    botonesRespuesta.forEach(opcion=>{
        opcion.addEventListener("click", agregarEventListenerBoton);
    })

    txtPuntaje.classList.remove("efecto");
}

function agregarEventListenerBoton(e){
    console.log(e.currentTarget.id);
    console.log(numPreguntaActual);
    console.log(preguntas[numPreguntaActual].correcta);
    //Controlo si la respuesta es correcta
    if(e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta){
        e.currentTarget.classList.add("correcta");
        puntajeTotal = puntajeTotal + 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");
    }else{
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#"+preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");
    }
    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen para que no pueda seguir haciendo clic
    console.log(botonesRespuesta)
    botonesRespuesta.forEach(opcion=>{
        opcion.classList.add("no-events");
    })
}

cargarSiguientePregunta(numPreguntaActual);

//tomo el boton siguiente
const btnSiguiente = document.querySelector("#siguiente")
btnSiguiente.addEventListener("click",()=>{
    numPreguntaActual++;
    if(numPreguntaActual < preguntasCategoria.length){
        cargarSiguientePregunta(numPreguntaActual);
    }
    else{
        const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
       
        console.log(categoriasJugadasLS.length);
        if(parseInt(categoriasJugadasLS.length) < 2){
            //alert(categoriasJugadasLS.length);
            location.href = "menu.html";
        }else{
            //lo mando a la pantalla final
            location.href = "final.html";
        }
        
    }
   
    
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