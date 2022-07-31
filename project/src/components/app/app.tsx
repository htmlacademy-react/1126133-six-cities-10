import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Offers } from '../../types/offers';
import MainScreen from '../../pages/main-screen/main-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import AuthScreen from '../../pages/auth-screen/auth-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../../components/private-route/private-route';
import { Reviews } from '../../types/reviews';
import { offers } from '../../mocks/offers';

type AppScreenProps = {
  favoriteOffers: Offers;
  nearPlacesOffers: Offers;
  reviews: Reviews;
}

function App(props: AppScreenProps): JSX.Element {
  const { favoriteOffers, nearPlacesOffers, reviews } = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen />}
        />
        <Route
          path={`${AppRoute.Property}/:id`}
          element={
            <PropertyScreen
              offers={offers}
              nearPlacesOffers={nearPlacesOffers}
              reviews={reviews}
            />
          }
        />
        <Route
          path={AppRoute.Favorite}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesScreen offers={favoriteOffers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<AuthScreen />}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
