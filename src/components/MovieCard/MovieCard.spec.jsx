/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { mount } from '@cypress/react';
import { MovieCard } from './MovieCard';
import movies from '../../api/movies.json';

describe('MovieCard component', () => {
  it('should have a \'title\' prop with the title of the film', () => {
    mount(<MovieCard
      title={movies[0].title}
    />);

    cy.getByDataCy('card')
      .should('contain', movies[0].title);
  });

  it(`should have a 'description' prop 
      with the description of the film`, () => {
    mount(<MovieCard
      description={movies[0].description}
    />);

    cy.getByDataCy('card')
      .should('contain', movies[0].description);
  });

  it(`should have a 'imdbUrl' prop 
      with the link to IMDb page of the film`, () => {
    mount(<MovieCard
      imdbUrl={movies[0].imdbUrl}
    />);

    cy.getByDataCy('card')
      .find(`[href="${movies[0].imdbUrl}"]`)
      .should('exist');
  });

  it(`should have a 'imgUrl' prop
      with the link to poster of the film`, () => {
    mount(<MovieCard
      imgUrl={movies[0].imgUrl}
    />);

    cy.getByDataCy('card').find(`[src="${movies[0].imgUrl}"]`)
      .should('exist');
  });
});
