import { range } from 'rxjs';

const range$ = range(1, 9);

range$.subscribe(console.log);
