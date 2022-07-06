/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { mount } from '@cypress/react';
import { App } from './App';
import moviesFromServer from './api/movies.json';

describe('App', () => {
  it('should render all the movies', () => {
    mount(<App />);

    cy.getByDataCy('card')
      .should('have.length', moviesFromServer.length);
  });

  it('should render a sidebar', () => {
    mount(<App />);

    cy.get('.sidebar')
      .should('contain', 'Sidebar will be here');
  });
});
