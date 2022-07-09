# Movies list
You are given movies loaded from API and the initial markup.

1. Create and export a `Movie` interface inside `./src/types/Movie.ts` (all the fields are required)
1. Render movies from a given `moviesFromServer` array.
    (for the simplicity you can do it inside the App and split later)
1. Extract `.movies` block to a `MoviesList` component 
1. `App` should pass the `moviesFromServer` to the `MoviesList` as a `movies` prop
1. Extract a `.card` to `MovieCard` component
1. Keep `data-cy="card"` on each `.card` to pass the tests
1. `MoviesList` should pass a `movie` to `MovieCard`

## Instructions
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)
- Use [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)
- Open 1 more terminal and run tests with `npm test` to ensure your solutions is correct
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://<your_account>.github.io/react_movies-list/) and add it to PR description
