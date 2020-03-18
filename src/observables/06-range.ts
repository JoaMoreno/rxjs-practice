import { range, asyncScheduler } from "rxjs";

const src$ = range(1,5, asyncScheduler);

/** Range es sincrono por defecto, al utilizar asyncScheduler es async */
console.log("start");
src$.subscribe(console.log);
console.log("end");
 