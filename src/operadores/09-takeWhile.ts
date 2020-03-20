import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>( document, 'click')

click$
.pipe(
    map(({x , y}) => ({x,y})),
    /** TakeWhile completa el observable */
    // takeWhile( ({ y }) => y <= 150 )
    /** El true final se refiere al inclusive, envia el ultimo valor que lo disparo  */
    takeWhile( ({ y }) => y <= 150 , true)
)
.subscribe({
    next: val => console.log('next', val),
    complete: ()=> console.log('complete')
})