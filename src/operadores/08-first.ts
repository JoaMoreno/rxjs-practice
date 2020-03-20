import { fromEvent } from "rxjs";
import { take, first, tap, map } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
    .pipe(
        tap<MouseEvent>(console.log),
        // map(event => ({
        //     clientX: event.clientX,
        //     clientY: event.clientY
        // })),

        map(({ clientX, clientY }) => ({ clientX, clientY })),

        /** El primer valor que cumpla con esta condicion */
        first(event => event.clientY >= 150)
    )
    .subscribe({
        next: val => console.log("next", val),
        complete: () => console.log("Complete")
    });
