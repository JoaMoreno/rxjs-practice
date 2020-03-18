import { of } from "rxjs";

/** of() es sincrono */
// const obs$ = of(1,2,3,4,5,6);
// const obs$ = of(...[1,2,3,4,5,6],1,2,3);

const obs$ = of<any>(
    [1, 2],
    { a: 1, b: 2 },
    function() {},
    true,
    Promise.resolve(true)
);

console.log("Start Obs");

obs$.subscribe(
    next => console.log("next: ", next),
    err => console.log("error: ", err),
    () => console.log("complete")
);
console.log("End Obs");
