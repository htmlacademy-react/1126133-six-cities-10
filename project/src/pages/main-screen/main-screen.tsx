import { PageCardClass } from '../../const';
import Logo from '../../components/logo/logo';
import CitiesListTabs from '../../components/cities-list-tabs/cities-list-tabs';
import { useAppSelector } from '../../hooks';
import { getActiveCityOffers } from '../../utils/utils';
import MainOffers from '../../components/main-offers/main-offers';
import MainOffersEmpty from '../../components/main-offers-empty/main-offers-empty';

function MainScreen(): JSX.Element {
  const { offers, activeCity } = useAppSelector((state) => state);

  const activeCityOffers = getActiveCityOffers(activeCity, offers);

  const offersCount = activeCityOffers.length;

  const isEmptyOffers = !offersCount;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main
        className={`page__main page__main--index ${isEmptyOffers ? 'page__main--index-empty' : ''}`}
      >
        <h1 className="visually-hidden">Cities</h1>

        <div className="tabs">
          <section className="locations container">

            <CitiesListTabs activeCity={activeCity} />

          </section>
        </div>

        <div className="cities">

          {/* Такая запись условного рендеринга подходит в этой ситуации ? Или лучше делать другой вариант из-за плохой читаемости кода ? */}
          {isEmptyOffers
            ? <MainOffersEmpty activeCity={activeCity} />
            : <MainOffers offersCount={offersCount} activeCityOffers={activeCityOffers} cardClass={PageCardClass.Main} activeCity={activeCity} />}

        </div>
      </main>
    </div>
  );
}

export default MainScreen;
