import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log("[next]: ", value),
    error: error => console.warn("[error]: ", error),
    complete: () => console.info("[complete]")
};

const intervalo$ = new Observable<number>(subs => {
    const intervalID = setInterval(() => subs.next(Math.random()), 1500);

    /** Al completar subject$ no destruye el intervalo
     * este se destruye al complete o unsubscribe de intervalo$ */
    return () => {
        clearInterval(intervalID);
        console.log('Intervalo Destruido')
    };
});

/** SUBJECT
 * 1 - Casteo múltiple: Muchas subscripciones estan sujetas a este observable y todas reciven la misma informacion
 * 2 - Tambien es un observer
 * 3 - Next, error y complete
 */

const subject$ = new Subject();
/** Se pasa como parametro observer */
const intervalSubject = intervalo$.subscribe( subject$ );

/** Al subscribirse al intervalo$ cada instancia crea un nuevo numero aleatorio */
// const subs1 = intervalo$.subscribe( rnd =>console.log('subs1: ',rnd))
// const subs2 = intervalo$.subscribe( rnd =>console.log('subs2: ',rnd))

/** Enves de suscribirse al intervalo$ se hace al subject$ y ambas subscripciones
 *  obtienen el mismo numero aleatorio */
const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout(()=>{

    /** Cuando la data es producida por el observable en si mismo, es considerado un "Cold Observable"
     * Pero cuando la data es producida FUERA del observable es llamado "Hot Observable" - @Fernando_Her85 */

    /** Se puede insertar informacion al flujo de datos del observable */
    subject$.next(10);
    /** Al completar el subject$ se dispara el [complete] de observer, pero no el del intervalo$ */
    subject$.complete();
    /** Ahora SI se ejecuta el return de intervalo$ */
    intervalSubject.unsubscribe();

}, 3500 )
