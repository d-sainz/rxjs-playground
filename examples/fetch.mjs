import { catchError, of, switchMap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { server } from '../rxjs-playground.mjs';

const usersEndpoint = 'https://jsonplaceholder.typicode.com/users';
const postsEndpoint = 'https://jsonplaceholder.typicode.com/posts';

const postData = fromFetch(usersEndpoint).pipe(
  switchMap(usersResponse => {
    if (usersResponse.ok) {
      // OK return data
      return usersResponse.json();
    } else {
      // Server is returning a status requiring the client to try something else.
      return of({ error: true, message: `Error ${ usersResponse.status }` });
    }
  }),
  catchError(err => {
    console.error('Something went wrong when looking for users');
    // Network or other error, handle appropriately
    console.error(err);
    return of({ error: true, message: err.message })
  }),
  switchMap(users => {
    // Assuming some structure for the data here
    const firstUser = users[0];
    return fromFetch(`${postsEndpoint}?userId=${firstUser.id}`, {
      selector: response => response.json()
    })
  })
);

server.context.postData = postData;

/*
postData.subscribe({
  next: result => console.log(result),
  complete: () => console.log('done')
});
*/