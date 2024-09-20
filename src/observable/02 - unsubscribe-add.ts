import { Observable, Subscriber, Observer, observable } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Next:', value),
    error: error => console.warn('obs: ', error),
    complete: () => console.info('Completado [obs]')    
};

const intervalo$ = new Observable<number>( Subscriber => {
    
    let count = 0;

    setInterval(()=> {
        count++;
        Subscriber.next(count);
    
    }, 1000)

});

const subs1 = intervalo$.subscribe( observer);
const subs2 = intervalo$.subscribe( observer);
const subs3 = intervalo$.subscribe( observer);

subs1.add(subs2)
     .add(subs3);


const subs = intervalo$.subscribe( num => console.log('num ', num ));

setTimeout(()=> {
    subs1.unsubscribe();
},4000);

