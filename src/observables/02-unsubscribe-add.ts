import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log("[next]: ", value),
    error: error => console.warn("[error]: ", error),
    complete: () => console.info("[complete]")
};

const intervalo$ = new Observable<number>(subs => {
    // Crear un contador, 1,2,3,4...
    let count = 0;
    const interval = setInterval(() => {
        // Cada segundo
        //console.log(count)
        subs.next(count++);
    }, 1000);

    setTimeout(() => {
        subs.complete();
    }, 2500);

    // Al momento de unsuscribe o complete, retorna
    return () => {
        clearInterval(interval);
        console.log("Intervalo Destruido");
    };
});

/** cada observable es independiente, cada uno es una nueva instancia del intervalo$ */
const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

/**se ejecuta durante el unsubscribe
 * Used to add a child subscription */
subs1.add(subs2)
     .add(subs3);

/** Timeout para desuscribirse */
setTimeout(() => {
    subs1.unsubscribe();
    /** Como se encuentra completado el observable, no se ejecuta aunque lo llame nuevamente */
    /**/ subs1.unsubscribe(); /**/

    // subs2.unsubscribe();
    // subs3.unsubscribe();

    /** En la consola solo muestra 3 [complete] */
    console.log("Complete Timeout");
}, 4000);
