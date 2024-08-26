// Función para obtener el contador de visitas del almacenamiento local
function getVisitCount() {
    let visitCount = localStorage.getItem('visitCount');
    if (!visitCount) {
        visitCount = 0;
    }
    return parseInt(visitCount, 10);
}

// Función para actualizar el contador en el almacenamiento local
function updateVisitCount() {
    let visitCount = getVisitCount();
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    return visitCount;
}

// Mostrar el número de visitas en la página
function displayVisitCount() {
    const visitCount = updateVisitCount();
    document.getElementById('visitCount').textContent = `Visitas ${visitCount}`;
}

displayVisitCount();
