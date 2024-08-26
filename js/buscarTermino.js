document.getElementById('search-bar').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        buscarTermino();
    }
});

document.getElementById('search-bar').addEventListener('input', function() {
    if (this.value.trim() === "") {
        eliminarResaltados();
    }
});

function eliminarResaltados() {
    var terminosResaltados = document.querySelectorAll('.resaltado');
    terminosResaltados.forEach(function(resaltado) {
        var parent = resaltado.parentNode;
        parent.replaceChild(document.createTextNode(resaltado.textContent), resaltado);
        parent.normalize();
    });
}

function buscarTermino() {
    var terminoBusqueda = document.getElementById('search-bar').value.toLowerCase().trim();

    if (terminoBusqueda === "") {
        eliminarResaltados();
        return;
    }

    eliminarResaltados();

    var contenido = document.getElementById('glossary');

    function resaltarTexto(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            var texto = node.nodeValue;
            var nuevoHTML = texto.replace(new RegExp(terminoBusqueda, 'gi'), function(matched) {
                return '<span class="resaltado">' + matched + '</span>';
            });

            if (nuevoHTML !== texto) {
                var tempDiv = document.createElement('div');
                tempDiv.innerHTML = nuevoHTML;
                while (tempDiv.firstChild) {
                    node.parentNode.insertBefore(tempDiv.firstChild, node);
                }
                node.parentNode.removeChild(node);
            }
        } else if (node.nodeType === Node.ELEMENT_NODE && node.childNodes) {
            node.childNodes.forEach(resaltarTexto);
        }
    }

    resaltarTexto(contenido);

    var primerTerminoResaltado = document.querySelector('.resaltado');
    if (primerTerminoResaltado) {
        primerTerminoResaltado.scrollIntoView({ behavior: 'smooth' });
    }
}
