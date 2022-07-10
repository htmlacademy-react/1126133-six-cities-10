import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  offerCards: string[];
}

function App({ offerCards }: AppScreenProps): JSX.Element {
  return (
    <MainScreen offerCards={offerCards} />
  );
}

export default App;
