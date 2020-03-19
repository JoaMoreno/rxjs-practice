import { range } from "rxjs";
import { tap, map } from "rxjs/operators";

const numeros$ = range(1, 5);

numeros$
    .pipe(
        /** Es similar a un observable, se utiliza para efectos secundarios */
        tap(x => {
            console.log("antes", x);
            /** El return no afeta el flujo de informacion */
            return 100;
        }),
        map(val => val * 10),
        /** partial observer */
        tap({
            next: valor => console.log("despues", valor),
            /** Este complete se imprime cuando todo el observable se complete */
            complete: () => console.log("Complete")
        })
    )
    .subscribe(val => console.log("subs", val));
