import { of, from } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

const numeros$ = of<number | string>(1, "1", 1, 2, 2, 3, 4, 4, 5, 3, 2, "1");

numeros$.pipe(
    /** Emite un valor solo si es distinto al anterior */
    distinctUntilChanged() // ===
)
//.subscribe(console.log)

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
        distinctUntilChanged( (anterior, actual) => anterior.nombre === actual.nombre )
    )
    .subscribe(console.log);
