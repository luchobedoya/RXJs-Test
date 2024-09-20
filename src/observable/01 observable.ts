import { Observable, Subscriber, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Siguiente [Next]:', value),
    error: error => console.warn('Error [obs]: ', error),
    complete: () => console.info('Completado [obs]')    
}

//const obs$ = Observable.create
const obs$ = new Observable<string>( Subs =>{

    Subs.next('hola');
    Subs.next('mundo');

    //Forzar errores
    // const a = undefined;
    // a.nombre = 'Lucho';
    //Subs.next(100);

    Subs.complete();
    Subs.next('hola');
    Subs.next('mundo');


});

obs$.subscribe(observer);

// obs$.subscribe(
//     valor => console.log('next', valor),
//     error => console.warn('error', error),
//     () => console.info('Complete')
// );







