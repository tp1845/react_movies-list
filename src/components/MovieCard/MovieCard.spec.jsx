/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */

import React from 'react';
import { mount } from '@cypress/react';
import { MovieCard } from './MovieCard';

describe('MovieCard component', () => {
  beforeEach(() => {
    const movie = {
      title: 'Movie title',
      description: 'Some description',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
      imdbUrl: 'https://www.imdb.com/title/tt1375666',
      imdbId: 'tt1375666',
    };

    mount(<MovieCard movie={movie} />);
  });

  it('should render a movie title', () => {
    cy.getByDataCy('MovieTitle').should('have.text', 'Movie title');
  });

  it('should render a movie description', () => {
    cy.getByDataCy('MovieDescription').should('have.text', 'Some description');
  });

  it('should have a link to IMDb page', () => {
    cy.getByDataCy('MovieLink')
      .should('have.attr', 'href', 'https://www.imdb.com/title/tt1375666');
  });

  it('should have a movie poster', () => {
    cy.getByDataCy('MovieImage')
      .should('have.attr', 'src', 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg');
  });
});
