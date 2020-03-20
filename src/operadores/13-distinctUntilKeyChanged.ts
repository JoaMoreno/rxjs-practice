import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    { nombre: "Megaman" },
    { nombre: "Megaman" },
    { nombre: "Zero" },
    { nombre: "Dr. Willy" },
    { nombre: "X" },
    { nombre: "X" },
    { nombre: "Zero" }
];

from(personajes)
    .pipe(
        /** comprueba si la propiedad pasada cambia similar al distinctUntilChanged */
        distinctUntilKeyChanged( 'nombre' )
    )
    .subscribe(console.log);