import { range } from "rxjs";
import { take, tap } from "rxjs/operators";

const numeros$ = range(1,5).pipe(tap(console.log ));

numeros$
.pipe(
    tap( console.log ),
    take(3)
    /** 
     * El take completa el observable
     * en este caso el observable que los genera es range.
     * sin embargo tambien se finaliza junto con el take
     */
)
.subscribe({
    next: val => console.log('next',val),
    complete: ()=> console.log('Complete')
})