import { fromEvent, asyncScheduler } from 'rxjs';
import { debounceTime, filter, pluck, distinctUntilChanged, throttleTime } from 'rxjs/operators';

const click$ = fromEvent( document, 'click');

click$.pipe(
    throttleTime(1000)
)
//.subscribe( console.log )

/** EJEMPLO 2 */
const input = document.createElement('input');
document.querySelector('body').append( input );

const input$ = fromEvent<KeyboardEvent>( input , 'keyup');

input$.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    pluck('target','value'),
    distinctUntilChanged()
)
.subscribe( console.log )