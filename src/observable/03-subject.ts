import { Observable, Subscriber, Observer, observable, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Next:', value),
    error: error => console.warn('obs: ', error),
    complete: () => console.info('Completado [obs]')    
};


const intervalo$ = new Observable<number>( subs => {

    const intervalID = setInterval(()=>{
        subs.next( Math.random());
    }, 3000);

    return () => clearInterval(intervalID);

});

//1. Es el casteo multible 
//2. Tambien es un observer 
//3- se maneja tambien el next, error y complete 
const subject$ = new Subject();

intervalo$.subscribe( subject$ );


// const subs1 = subject$.subscribe( rnd => console.log('subs1', rnd));
// const subs2 = subject$.subscribe( rnd => console.log('subs2', rnd));


const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );


setTimeout(() => {
    subject$.next(10);
    subject$.complete();
}, 3500);