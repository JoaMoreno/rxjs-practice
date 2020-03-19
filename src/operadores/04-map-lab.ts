import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement("div");
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non euismod tellus, in sodales orci. Nam dictum elementum neque nec aliquet. Duis condimentum mi sit amet mi scelerisque feugiat. Sed nisl elit, tempus non odio at, dictum auctor tellus. Curabitur et elementum ante, efficitur varius ante. Vivamus eget justo mattis, rhoncus magna vitae, egestas arcu. Nunc elementum ullamcorper augue, ut tempus tortor laoreet pretium. Donec feugiat lacus erat, et ullamcorper eros euismod nec. Praesent tempor pretium ante a facilisis. Aenean ex lorem, scelerisque vitae lorem facilisis, vulputate efficitur eros. Suspendisse sit amet vestibulum urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque elit ligula, mattis vitae orci sed, porta fringilla tortor.
<br/><br/>
Aenean malesuada tincidunt hendrerit. Maecenas condimentum ligula purus, ut auctor nunc mattis at. Ut et tortor neque. In eget dapibus nisi. Duis sit amet venenatis augue. Fusce a placerat est, congue molestie orci. Cras nec sodales ipsum, sit amet scelerisque sapien. Aliquam pulvinar leo quis ipsum tristique, id euismod leo sollicitudin. Praesent tincidunt rutrum libero vel lacinia. Sed aliquet, nisi et tempus feugiat, metus orci congue turpis, sollicitudin blandit dui risus ut augue. Nulla facilisi. Mauris vitae turpis magna. Quisque suscipit nisi tincidunt, pharetra elit eget, congue nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris luctus non erat sed molestie.
<br/><br/>
Ut lobortis non felis maximus porttitor. Cras varius interdum lectus eu posuere. Ut nec fringilla risus. Donec finibus ullamcorper odio, at mattis nulla imperdiet non. Quisque tempor luctus neque, porta fringilla est pretium at. Nullam ullamcorper neque tellus, ut bibendum lectus rutrum in. Pellentesque augue est, laoreet vel nunc condimentum, rutrum ullamcorper est. Curabitur blandit commodo ex. In lectus purus, dictum et mi vitae, auctor mollis ipsum. Duis et leo bibendum, sodales ante at, lacinia nunc. In tristique, orci non blandit dictum, dolor justo luctus dui, ac dignissim neque quam quis dui.
<br/><br/>
Nam sed scelerisque dui, ut semper velit. Phasellus eu facilisis elit. Sed ornare, sem ut elementum faucibus, dolor metus mollis tellus, nec vulputate magna lacus in eros. Morbi nec dolor elementum, tincidunt arcu vitae, sollicitudin tortor. Cras pulvinar auctor orci, ac aliquam leo lobortis at. Praesent ultricies quis eros a ornare. Quisque ornare quis tortor vel iaculis. Cras feugiat pulvinar rhoncus. Proin a justo nec lorem imperdiet molestie et id arcu. Suspendisse porta volutpat tellus, non ullamcorper massa scelerisque vitae. In varius turpis at justo scelerisque, vitae sagittis neque tincidunt. Donec venenatis elit vel sapien consectetur varius. Nulla quis mollis tellus. Quisque efficitur lacinia arcu in scelerisque. In imperdiet in sem sit amet vulputate. Integer auctor consequat ex id luctus.
<br/><br/>
Vestibulum vehicula sem sapien, at rutrum urna efficitur sed. Phasellus sed eros vel mauris fringilla vulputate. Nullam fermentum libero nulla, sed varius neque condimentum ac. Curabitur enim ligula, sollicitudin nec diam non, aliquet sollicitudin risus. Maecenas nunc lacus, efficitur sit amet diam vitae, vulputate eleifend sapien. Aliquam vestibulum cursus magna. Duis at sagittis lorem, vitae efficitur libero. Donec tincidunt scelerisque mi sit amet sagittis.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non euismod tellus, in sodales orci. Nam dictum elementum neque nec aliquet. Duis condimentum mi sit amet mi scelerisque feugiat. Sed nisl elit, tempus non odio at, dictum auctor tellus. Curabitur et elementum ante, efficitur varius ante. Vivamus eget justo mattis, rhoncus magna vitae, egestas arcu. Nunc elementum ullamcorper augue, ut tempus tortor laoreet pretium. Donec feugiat lacus erat, et ullamcorper eros euismod nec. Praesent tempor pretium ante a facilisis. Aenean ex lorem, scelerisque vitae lorem facilisis, vulputate efficitur eros. Suspendisse sit amet vestibulum urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque elit ligula, mattis vitae orci sed, porta fringilla tortor.
<br/><br/>
Aenean malesuada tincidunt hendrerit. Maecenas condimentum ligula purus, ut auctor nunc mattis at. Ut et tortor neque. In eget dapibus nisi. Duis sit amet venenatis augue. Fusce a placerat est, congue molestie orci. Cras nec sodales ipsum, sit amet scelerisque sapien. Aliquam pulvinar leo quis ipsum tristique, id euismod leo sollicitudin. Praesent tincidunt rutrum libero vel lacinia. Sed aliquet, nisi et tempus feugiat, metus orci congue turpis, sollicitudin blandit dui risus ut augue. Nulla facilisi. Mauris vitae turpis magna. Quisque suscipit nisi tincidunt, pharetra elit eget, congue nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris luctus non erat sed molestie.
<br/><br/>
Ut lobortis non felis maximus porttitor. Cras varius interdum lectus eu posuere. Ut nec fringilla risus. Donec finibus ullamcorper odio, at mattis nulla imperdiet non. Quisque tempor luctus neque, porta fringilla est pretium at. Nullam ullamcorper neque tellus, ut bibendum lectus rutrum in. Pellentesque augue est, laoreet vel nunc condimentum, rutrum ullamcorper est. Curabitur blandit commodo ex. In lectus purus, dictum et mi vitae, auctor mollis ipsum. Duis et leo bibendum, sodales ante at, lacinia nunc. In tristique, orci non blandit dictum, dolor justo luctus dui, ac dignissim neque quam quis dui.
<br/><br/>
Nam sed scelerisque dui, ut semper velit. Phasellus eu facilisis elit. Sed ornare, sem ut elementum faucibus, dolor metus mollis tellus, nec vulputate magna lacus in eros. Morbi nec dolor elementum, tincidunt arcu vitae, sollicitudin tortor. Cras pulvinar auctor orci, ac aliquam leo lobortis at. Praesent ultricies quis eros a ornare. Quisque ornare quis tortor vel iaculis. Cras feugiat pulvinar rhoncus. Proin a justo nec lorem imperdiet molestie et id arcu. Suspendisse porta volutpat tellus, non ullamcorper massa scelerisque vitae. In varius turpis at justo scelerisque, vitae sagittis neque tincidunt. Donec venenatis elit vel sapien consectetur varius. Nulla quis mollis tellus. Quisque efficitur lacinia arcu in scelerisque. In imperdiet in sem sit amet vulputate. Integer auctor consequat ex id luctus.
<br/><br/>
Vestibulum vehicula sem sapien, at rutrum urna efficitur sed. Phasellus sed eros vel mauris fringilla vulputate. Nullam fermentum libero nulla, sed varius neque condimentum ac. Curabitur enim ligula, sollicitudin nec diam non, aliquet sollicitudin risus. Maecenas nunc lacus, efficitur sit amet diam vitae, vulputate eleifend sapien. Aliquam vestibulum cursus magna. Duis at sagittis lorem, vitae efficitur libero. Donec tincidunt scelerisque mi sit amet sagittis.
`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

// funcion que haga el calculo

const calcularPorcentajeScroll = event => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    // console.log(scrollTop, scrollHeight , clientHeight)
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams ( suscribirse al scroll de la pag )

const scroll$ = fromEvent(document, "scroll");
//scroll$.subscribe( console.log )

const progress$ = scroll$.pipe(
    // map(event => calcularPorcentajeScroll(event))
    map( calcularPorcentajeScroll ),
    tap( console.log )
    );

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});
