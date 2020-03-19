import { range, fromEvent } from "rxjs";
import { map, pluck, mapTo } from "rxjs/operators";

// range(1, 5)
//     .pipe(map<number, string>(val => (val * 10).toString()))
//     .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyupCode$ = keyup$.pipe(map(event => event.code));

/** Operador pluck extrae un valor del objeto que recibe y este es la nueva emision*/

/** Para entrar en subs propiedades se utiliza la "," = "./" */
const keyupPluck$ = keyup$.pipe(pluck("target", "baseURI"));

/** Emits the given constant value on the output Observable every time the source Observable emits a value. */
/** mapTo<T, R>(value: R): OperatorFunction<T, R> */
const keyupMapTo$ = keyup$.pipe(mapTo('key pressed'));

keyup$.subscribe(console.log);
keyupCode$.subscribe(code => console.log("map", code));
keyupPluck$.subscribe(code => console.log("pluck", code));
keyupMapTo$.subscribe( code => console.log('mapTo: ', code))