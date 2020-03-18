import { interval, timer, Observer } from "rxjs";

const observer: Observer<any> = {
    next: val => console.log('next: ', val),
    error: val => console.log('error: ', val),
    complete: () => console.log('complete')
}

/** Interval y Timer son asincronos por naturaleza */
/** Se ejecuta tan pronto el stack de callback lo permita */
const interval$ = interval(1000);

// const timer$ = timer(2000)
/** Es un interval que inicia en 2000ms */
// const timer$ = timer(2000, 1000)

/** Se puede programar cuando quieres que se emita el timer */
const hoyEn5s = new Date(); // ahora
hoyEn5s.setSeconds( hoyEn5s.getSeconds() + 5)

const timer$ = timer( hoyEn5s )

console.log('Start')

/** Nunca se dispara el complete del observer en el interval */
// interval$.subscribe( observer );

/** Al utilizar el timer emite el valor y se completa */
timer$.subscribe( observer )

console.log('End')