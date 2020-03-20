import { fromEvent } from 'rxjs';
import { debounceTime, filter, pluck, distinctUntilChanged } from 'rxjs/operators';

/** Permite restringir la cantidad de emiciones */
/** Se usapara controlar observables que emiten muchos valores */

const click$ = fromEvent( document, 'click');

click$.pipe(
    debounceTime(1000)
)
.subscribe( console.log )

/** EJEMPLO 2 */
const input = document.createElement('input');
document.querySelector('body').append( input );

const input$ = fromEvent<KeyboardEvent>( input , 'keyup');

input$.pipe(
    debounceTime(500),
    pluck('target','value'),
    /** Solo emite el valor si este cambio */
    distinctUntilChanged()
)
.subscribe( console.log )