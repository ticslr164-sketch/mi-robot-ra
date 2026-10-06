```javascript
// Obtener el robot
const robot = document.getElementById("robot");

// Colores para cambiar el robot
const colores = [
    "#2196F3",
    "#F44336",
    "#4CAF50",
    "#FF9800",
    "#9C27B0"
];

let colorActual = 0;

// Cambiar color al tocar el robot
function cambiarColor() {

    colorActual++;

    if (colorActual >= colores.length) {
        colorActual = 0;
    }

    document.getElementById("cuerpo")
        .setAttribute("color", colores[colorActual]);
}

// Cambiar posición
function moverRobot() {

    let posicion = robot.getAttribute("position");

    posicion.x += 0.5;

    robot.setAttribute("position", posicion);
}

// Aumentar tamaño
function agrandarRobot() {

    let escala = robot.getAttribute("scale");

    escala.x += 0.2;
    escala.y += 0.2;
    escala.z += 0.2;

    robot.setAttribute("scale", escala);
}

// Reducir tamaño
function reducirRobot() {

    let escala = robot.getAttribute("scale");

    if (escala.x > 0.4) {

        escala.x -= 0.2;
        escala.y -= 0.2;
        escala.z -= 0.2;

        robot.setAttribute("scale", escala);
    }
}

// Rotar robot
function rotarRobot() {

    let rotacion = robot.getAttribute("rotation");

    rotacion.y += 45;

    robot.setAttribute("rotation", rotacion);
}
```
