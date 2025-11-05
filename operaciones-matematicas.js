import {PI, IVA, DESCUENTO} from './constantes.js';

export const sumar = function (a, b) {
    return a + b;

}
export const restar = function (a, b) {
    return a - b;

}
export const multiplicar = function (a, b) {
    return a * b;

}

export const areaCirculo = function (radio) {
    return PI * (radio * radio);
}

export const calcularTotal = function (precio, cantidad) {
    return precio * cantidad;
}

export const aplicarImpuestos = function (total) {
    return (total * IVA) + total;
}

export const aplicarDescuento = function (total) {
    return total - (total * DESCUENTO);
}

export const aplicarDescuentoPorRol = function (total, usuario) {
    if (usuario === 'admin') {
        return total - (total * 0.2);
    } else {
        return aplicarDescuento(total);
    }
}