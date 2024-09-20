import { Observable, Subscriber, Observer, observable, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Next:', value),
    error: error => console.warn('obs: ', error),
    complete: () => console.info('Completado [obs]')    
};

