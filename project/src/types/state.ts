import { City } from '../const';
import { store } from '../store';
import { Offers } from './offers';

// Правильно ли описал тип таким образом ?
export type InitialState = {
  city: City;
  offers: Offers;
}

// Как понимаю, если я уже описал тип InitState, то необходимости в строке ниже уже нет ?
export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
