import { of } from 'rxjs';
import { server } from './rxjs-playground.mjs';

const myBasicObservable = of(1, 2, 3);

server.context.myBasicObservable = myBasicObservable;