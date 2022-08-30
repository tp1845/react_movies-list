# Movies List

> [React + Typescript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)

You are given movies loaded from the API and initial markup. Your task is to:

1. Create and export a `Movie` interface inside `./src/types/Movie.ts` (all the fields are required)
1. Render movies from a given `moviesFromServer` array (for the simplicity, you can do it inside the `App` and split later).
1. Extract a `.movies` block to a `MoviesList` component.
1. The `App` should pass the `moviesFromServer` to the `MoviesList` as a `movies` prop.
1. Extract a `.card` block to a `MovieCard` component.
1. The `MoviesList` should pass a `movie` to the `MovieCard`.
1. Keep all `data-cy` attributes to pass the tests.

## Instructions
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Use the [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://<your_account>.github.io/react_movies-list/) and add it to the PR description.
