document.addEventListener("DOMContentLoaded", function () {
    var map1 = L.map("map1").setView([4.7110, -74.0721], 13); 
    var map2 = L.map("map2").setView([4.7110, -74.0721], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map1);

    L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenTopoMap contributors'
    }).addTo(map2);

    map1.sync(map2);
    map2.sync(map1);

    // Agregar controles de Geoman a ambos mapas
    map1.pm.addControls({
        position: "topleft",
        drawMarker: true,
        drawPolygon: true,
        drawPolyline: true,
        drawCircle: true,
        drawRectangle: true,
        editMode: true,
        dragMode: true,
        cutPolygon: true,
        removalMode: true
    });

    map2.pm.addControls({
        position: "topleft",
        drawMarker: true,
        drawPolygon: true,
        drawPolyline: true,
        drawCircle: true,
        drawRectangle: true,
        editMode: true,
        dragMode: true,
        cutPolygon: true,
        removalMode: true
    });
});
