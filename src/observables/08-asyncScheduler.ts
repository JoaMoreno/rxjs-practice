import { asyncScheduler } from "rxjs";

/** AsyncScheduler crea una subscripcion 
 * se pueden conseguir las siguientes funciones con AsyncScheduler
 * setTimeout();
 * setInterval();
*/

const saludar = () => console.log("Hola Mundo");
const saludar2 = nombre => console.log(`Hola ${nombre}`);

/** Para conseguir un setTimeout
 * Firma:
 * 1- Definicion de la funcion (Lo mismo que declararla ahi)
 * 2- delay
 * 3- State ( solo puede ser un argumento )
 */
// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule( saludar2 , 2000, 'Joa');

/** Para conseguir un setInterval
 * No puede ser una arrowFunction */
const subs = asyncScheduler.schedule(function(state) {

    console.log("state: ", state);
    this.schedule(state+1, 1000)

}, 3000, 0);

// setTimeout(()=>{
//     subs.unsubscribe();
// },6000)

/** Utilizando un asyncScheduler para finalizar el conteo */
asyncScheduler.schedule( () => subs.unsubscribe(), 6000 )