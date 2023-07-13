import { bufferCount, concatMap, forkJoin, map, timer } from 'rxjs';
import { server } from '../rxjs-playground.mjs';
import { randomIntBetween } from '../utils.mjs';

// Returns an Observable which will show the fetched object after some time.
const fetchObjectById = id => {
  // Simulate sending a request
  const object = { id };
  const waitTime = randomIntBetween(1, 6);
  return timer(waitTime * 1000).pipe(map(_ => object))
  // With this next commented block of code we could simulate random failure:
  /*
    .pipe(map(_ => {
      if (waitTime > 3) { throw new Error('Took too long!'); }
      return object;
    }));
  */
}

// Suppose we have arrived at the following list of ids that we need to fetch
// from an endpoint. Unfortunately, the endpoint only supports fetching one by
// one, and we absolutely need to make sure that every request we make succeeds.
//
// (Now imagine that instead of 10, there are 100 ids...)
const idsToFetch = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// So what to do? There are many considerations to make. Suppose first that both
// the endpoint, while having some problems, is quite fast, and we know that the
// client has very good connectivity measuring against said endpoint. So we
// could just drop the hammer and do this:

const allRequestSimultaneously = forkJoin(
  idsToFetch.map(id => fetchObjectById(id))
);

// This launches every single request at the soonest available execution slot,
// and simply waits for every request to succeed (and if one doesn't succeed for
// whatever reason, the resulting observable does not emit, and fails!).

server.context.allRequestSimultaneously = allRequestSimultaneously;

// If we don't want to load the endpoint too much, or the API may rate limtit us
// if we're not careful, we may try to simply queue them up like this:

const oneAfterTheOther = from(idsToFetch).pipe(concatMap(id => fetchObjectById(id)));

// By using concatMap we make sure that each request finishes before we launch
// the next one, and we can do some extra work to remember where we were in the
// list if one of them fails to retry later.

server.context.oneAfterTheOther = oneAfterTheOther;

// To find a sweet spot, we can batch operations together! With the current
// example, this is easier and simpler done by partitioning the ids array, but
// the approach becomes way more useful when the data source is also an
// observable with unknown lengths.

const batchedRequests = from(idsToFetch).pipe(
  bufferCount(3),
  concatMap(ids => forkJoin(ids.map(id => fetchObjectById(id)))) // Hey! Looks familiar?
);

// We combine the previous approach with bufferCount (we could use any other
// buffer operator) to partition the ids and then do multiple simultaneous
// requests to the server with each smaller partition, waiting for a whole batch
// to finish.

server.context.batchedRequests = batchedRequests;