/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { mount } from '@cypress/react';
import { MoviesList } from './MoviesList';
import movies from '../../api/movies.json';

describe('MoviesList component', () => {
  it('should render a \'MovieCard\' per each movie', () => {
    mount(<MoviesList movies={movies} />);

    cy.getByDataCy('card')
      .should('have.length', movies.length);
  });
});
