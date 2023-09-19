import { of } from 'rxjs';

const of$ = of(1, 2, 3, 4, 5, 6);

// the most basic observable creator, should only be used when nothing better fits.
of$.subscribe(console.log);
