// Si se estrae directamente de rxjs, quiere decir que es para crear Observables
import { Observable, Observer } from 'rxjs'

/** Interfaz de Observer */
const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]: ', value),
    error: error => console.warn('Error [obs]: ', error),
    complete: ()=> console.info('Complete')
}

// const obs$ = Observable.create();
const obs$ = new Observable<string>( subs => {  /** subs es del tipo Suscriber */ 

    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    // Forzar un error
    // const a = undefined;
    // a.nombre = 'Joa'

    subs.complete();
    /** Al usar complete, ya no notifica a los suscribers */
    subs.next('Hola');
    subs.next('Mundo');

});

/** Escribiendo en el suscribe */
// obs$.subscribe(
//     value => console.log('next: ',value),
//     err => console.warn('error',err),
//     () => console.log('subscribe complete')
// );

/** Utilizando la interface Observer */
obs$.subscribe( observer );
