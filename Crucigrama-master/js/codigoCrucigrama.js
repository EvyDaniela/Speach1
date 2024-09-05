var oygCrosswordPuzzle = new oyCrosswordPuzzle(
    "5748185539682739085",
    "./oy-cword-1.0",
    "/a/a",
    "Crucigrama",
    "Instrucciones",
    [
        /*
        oyCrosswordClue(
            len,// length of the word in symnbols, i.e. for the word "Abstract" this will be 8
            clue,// the text of the word clue given to the user, i.e. for the word "Abstract" this will be "This factory creates an instance of several families of classes"
            answer,// thw word itself, i.e. "Abstract"; maybe be ommited, thus disabling the reveal function
            sign,// MD5 signature of the word itself with puzzle uid, i.e. for the word "Abstract" and uid "5748185539682739085" this will be "26f265b96e01081a5ef26a432eda9cff"
            dir,// word direction; 0 for horizontal and 1 for vertical
            xpos,// zero-based coordinate of the word on X axis, zero on the left, i.e. for the word "Abstract" this will be 12
            ypos// zero-based coordinate of the word on Y axis, zero at the top, i.e. for the word "Abstract" this will be 6
        )
        */
        //Colocar dentro de clue <span data-palabra='texto'>___________</span> si se quiere que se escriba la respuesta. También activar en oyMenu.js línea 537 a 552 (pistaCorrespondiente)
        new oyCrosswordClue(6, "a small, electronic device that is often new and unconventional", "Gadget", "", 0, 8, 3),
        new oyCrosswordClue(9, "to merge two or more programs, applications, interfaces, or devices together.", "integrate", "", 0, 6, 9),
        new oyCrosswordClue(8, "Physical parts of a computer or another electronic device.", "hardware", "", 1, 9, 2),
        new oyCrosswordClue(3, "A quality assurance system for software development.", "ISO", "", 0, 9, 13),
        new oyCrosswordClue(3, "User Interface.” The image of how a website is laid out and meant to be interacted with.", "GUI", "", 0, 12, 7),
        new oyCrosswordClue(7, "to set up for use or service.", "install", "", 2, 7, 8),
        new oyCrosswordClue(4, "A gigabyte is a billion characters.", "giga", "", 0, 4, 12),
        new oyCrosswordClue(4, "A markup language for the web that sturctures web pages.", "html", "", 0, 4, 14),
        new oyCrosswordClue(4, "stands for Hypertext Transfer Protocol, and is used to transfer data across the internet.", "http", "", 0, 9, 11),
        new oyCrosswordClue(3, "The interface that allows the program to interact with the outside world.", "HCI", "", 1, 9, 11),
        new oyCrosswordClue(3, "A system for programmers to manage code content and other versions.", "Git", "", 1, 10, 9),
        new oyCrosswordClue(3, "An application that facilitates software developers with writing code.", "IDE", "", 1, 14, 7)
    ],
    27,//Al final se configura el tamaño de la cuadrícula
    20
);
/*
 //	here we configure puzzle options, callbacks and publisher information
 // publisher information
 //oygCrosswordPuzzle.publisherName = "por Adib";
 //oygCrosswordPuzzle.publisherURL = "http://www.google.com";
 // game exit URL
 //oygCrosswordPuzzle.leaveGameURL = "http://www.google.com";
 // this is how to turn off server support; score submission and action tracking will be disabled
 */
oygCrosswordPuzzle.canTalkToServer = false;

function retroalimentar(mensaje) {
    //document.getElementById("retroalimentacion").innerHTML = mensaje;
    console.log(mensaje);
}
document.getElementById('toc-button').addEventListener('click', function() {
    const tocContent = document.getElementById('toc-content');
    tocContent.style.display = tocContent.style.display === 'none' || tocContent.style.display === '' ? 'block' : 'none';
});
document.querySelector('.floating-button-link').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace realice la acción predeterminada
    const content = document.getElementById('toc-content1');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
});