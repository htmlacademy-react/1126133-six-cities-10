import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <div style={{ backgroundColor: '#f5f5f5' }} className="page">
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
        <div className="page__favorites-container container">
          <section>
            <p style={{
              marginTop: '200px',
              marginBottom: '40px',
              fontSize: '150px',
              lineHeight: 1.1429,
              fontWeight: 700,
              fontStyle: 'normal',
              textAlign: 'center',
            }}
            >
              404
            </p>
            <p
              style={{
                marginTop: '50px',
                marginBottom: '49px',
                fontSize: '70px',
                lineHeight: 1.1429,
                fontWeight: 700,
                fontStyle: 'normal',
                textAlign: 'center',
              }}
            >
              PAGE NOT FOUND
            </p>

            <Link
              style={{
                padding: '20px 50px 20px 50px',
                fontSize: '25px',
                lineHeight: 3,
                fontWeight: 500,
                color: '#fff',
                backgroundColor: '#4481c3',
                borderRadius: '10px',
                position: 'relative',
                left: '400px',
              }}
              to='/'
            >
              HOME PAGE
            </Link>
          </section>
        </div>
      </main >
    </div >
  );
}

export default NotFoundScreen;
