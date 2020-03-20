import { interval, fromEvent } from "rxjs";
import { takeUntil, skip, tap } from "rxjs/operators";

/** Creando un boton y append on body */
const boton = document.createElement("button");
boton.innerHTML = "Detener Timer";
document.querySelector("body").append(boton);

const counter$ = interval(1000);
/** al realizar click en el boton emite un evento */
// const clickBtn$ = fromEvent( boton, 'click')
const clickBtn$ = fromEvent( boton, 'click').pipe(
    tap(()=> console.log('tap before skip')),
    /** Emitir el evento al segundo click */
    skip(1),
    /** Solo lo emprime si al completar el skip */
    tap(()=> console.log('tap after skip'))
)

counter$
.pipe(
    /** 
     * Completa el observable cuando el observable pasado como parametro
     * emite su primer valor
     */
    takeUntil(clickBtn$)
)
.subscribe({
    next: val => console.log('next',val),
    complete: ()=> console.log('complete')
})