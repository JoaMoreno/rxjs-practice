import { fromEvent } from "rxjs";

/** Eventos del DOM */
/** Para obtener el intellisense definir el tipo de evento */
const src1$ = fromEvent<MouseEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
    next: value => console.log("next: ", value)
};

/** Destructuracion del evento */
src1$.subscribe(({ x, y }) => {
    console.log(x, y);
});

src2$.subscribe(evento => {
    console.log(evento.key);
});
