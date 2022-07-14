import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page--gray">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__not__found page__favorites-container container">
          <section>
            <h1 className="not__found__error">404</h1>
            <p className="not__found__error__text">PAGE NOT FOUND</p>
            <Link className="not__found__link__home__page" to='/'>HOME PAGE</Link>
          </section>
        </div>
      </main >
    </div >
  );
}

export default NotFoundScreen;
