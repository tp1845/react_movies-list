import React from 'react';
import './App.scss';
import moviesFromServer from './api/movies';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
                alt="Film logo"
              />
            </figure>
          </div>

          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src="/images/imdb-logo.jpeg" alt="imdb" />
                </figure>
              </div>

              <div className="media-content">
                <p className="title is-8">Inception</p>
              </div>
            </div>

            <div className="content">
              Follows the lives of eight very different couples in dealing with
              their love lives in various loosely interrelated tales all set
              during a frantic month before Christmas in London, England.
              <br />
              <a href="https://www.imdb.com/title/tt1375666">IMDB</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg"
                alt="Film logo"
              />
            </figure>
          </div>

          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src="/images/imdb-logo.jpeg" alt="imdb" />
                </figure>
              </div>

              <div className="media-content">
                <p className="title is-8">Love Actually</p>
              </div>
            </div>

            <div className="content">
              A thief who steals corporate secrets through the use of
              dream-sharing technology is given the inverse task of planting
              an idea into the mind of a C.E.O.
              <br />
              <a href="https://www.imdb.com/title/tt0314331">IMDB</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg"
                alt="Film logo"
              />
            </figure>
          </div>

          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src="images/imdb-logo.jpeg" alt="imdb" />
                </figure>
              </div>

              <div className="media-content">
                <p className="title is-8">The Day After Tomorrow</p>
              </div>
            </div>

            <div className="content">
              Jack Hall, paleoclimatologist, must make a daring trek from
              Washington, D.C. to New York City to reach his son, trapped in
              the cross-hairs of a sudden international storm which plunges the
              planet into a new Ice Age.
              <br />
              <a href="https://www.imdb.com/title/tt0319262">IMDB</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg"
                alt="Film logo"
              />
            </figure>
          </div>

          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src="images/imdb-logo.jpeg" alt="imdb" />
                </figure>
              </div>

              <div className="media-content">
                <p className="title is-8">Rogue One</p>
              </div>
            </div>

            <div className="content">
              The daughter of an Imperial scientist joins the Rebel Alliance
              in a risky move to steal the Death Star plans.
              <br />
              <a href="https://www.imdb.com/title/tt3748528">IMDB</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg"
                alt="Film logo"
              />
            </figure>
          </div>

          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src="images/imdb-logo.jpeg" alt="imdb" />
                </figure>
              </div>

              <div className="media-content">
                <p className="title is-8">The Holiday</p>
              </div>
            </div>

            <div className="content">
              Two women troubled with guy-problems swap homes in each other's
              countries, where they each meet a local guy and fall in love.
              <br />
              <a href="https://www.imdb.com/title/tt0457939">IMDB</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
