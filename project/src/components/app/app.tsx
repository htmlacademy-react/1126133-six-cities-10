import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import AuthScreen from '../../pages/auth-screen/auth-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';


type AppScreenProps = {
  cardsCount: number;
}

function App({ cardsCount }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen cardsCount={cardsCount} />}
        />
        <Route
          path={AppRoute.Property}
          element={<PropertyScreen />}
        />
        <Route
          path={AppRoute.Favorite}
          element={<FavoritesScreen />}
        />
        <Route
          path={AppRoute.Auth}
          element={<AuthScreen />}
        />
        <Route
          path='*'
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
