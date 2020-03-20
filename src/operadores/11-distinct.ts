import { of, from } from "rxjs";
import { distinct } from "rxjs/operators";

const numeros$ = of<number | string>(1, "1", 1, 2, 2, 3, 4, 4, 5, 3, 2, "1");

numeros$.pipe(
    /** Solo emite valores que nunca se hayan emitido */
    /** Si un valor ya fue emitido, no lo deja pasar */
    distinct() // ===
);
//.subscribe(console.log)

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    { nombre: "Megaman" },
    { nombre: "X" },
    { nombre: "Zero" },
    { nombre: "Dr. Willy" },
    { nombre: "Megaman" },
    { nombre: "Zero" }
];

from(personajes)
    .pipe(
        /** Usar distinct solo, en un objeto, los tomas como si fueran distintos */
        // distinct()
        distinct(p => p.nombre)
    )
    .subscribe(console.log);
