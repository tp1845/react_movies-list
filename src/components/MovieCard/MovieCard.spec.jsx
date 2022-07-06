/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { mount } from '@cypress/react';
import { MovieCard } from './MovieCard';
import movies from '../../api/movies.json';

describe('MovieCard component', () => {
  it('should render a movie title', () => {
    mount(<MovieCard movie={movies[0]} />);

    cy.getByDataCy('card')
      .should('contain', movies[0].title);
  });

  it('should render a movie description', () => {
    mount(<MovieCard movie={movies[0]} />);

    cy.getByDataCy('card')
      .should('contain', movies[0].description);
  });

  it('should have a link to IMDb page', () => {
    mount(<MovieCard movie={movies[0]} />);

    cy.getByDataCy('card')
      .find(`[href="${movies[0].imdbUrl}"]`)
      .should('exist');
  });

  it('should have a movie poster', () => {
    mount(<MovieCard movie={movies[0]} />);

    cy.getByDataCy('card').find(`[src="${movies[0].imgUrl}"]`)
      .should('exist');
  });
});
