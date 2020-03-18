import { of, from } from "rxjs";

/**
 * of = toma argumentos y genera un secuancia
 * from = crea un observable en base a un array, promise, iterable, observable
 */

const observer = {
    next: val => console.log("next: ", val),
    complete: () => console.log("complete")
};

const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// for( let id of miIterable ){
//     console.log(id);
// }
from( miIterable).subscribe( observer )

// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);
// const source$ = from('Joa');

const source$ = from(fetch("https://api.github.com/users/JoaMoreno"));

// source$.subscribe(async res => {
//     console.log(res);

//     const dataRes = await res.json();
//     console.log(dataRes);
// });

// source$.subscribe( observer )
