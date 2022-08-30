/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { mount } from '@cypress/react';
import { MoviesList } from './MoviesList';
import movies from '../../api/movies.json';

describe('MoviesList component', () => {
  it('should render a card per each movie', () => {
    mount(<MoviesList movies={movies} />);

    cy.getByDataCy('Movie').should('have.length', 5);
  });

  it('should put movies in correct order', () => {
    mount(<MoviesList movies={movies} />);

    cy.getByDataCy('MovieTitle').eq(0).should('have.text', 'Inception');
    cy.getByDataCy('MovieTitle').eq(4).should('have.text', 'The Holiday');
  });

  it('should render no movies if received an empty array', () => {
    mount(<MoviesList movies={[]} />);

    cy.getByDataCy('Movie').should('not.exist');
  });
});
