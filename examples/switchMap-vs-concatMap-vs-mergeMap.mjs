import { concatMap, from, map, mergeMap, switchMap, timer } from 'rxjs';
import { server } from '../rxjs-playground.mjs';

const idsToFetch = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const toTimed = id => timer(1000).pipe(map(_ => id));

const withSwitchMap = from(idsToFetch).pipe(
  switchMap(toTimed)
);

const withMergeMap = from(idsToFetch).pipe(
  mergeMap(toTimed)
);

const withConcatMap = from(idsToFetch).pipe(
  concatMap(toTimed)
);

server.context.withSwitchMap = withSwitchMap;
server.context.withMergeMap = withMergeMap;
server.context.withConcatMap = withConcatMap;
