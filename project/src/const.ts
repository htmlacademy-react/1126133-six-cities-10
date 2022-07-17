export const BOOKMARK_BUTTON_ACTIVE = 'place-card__bookmark-button--active';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorite = '/favorites',
  Property = '/offer/:id',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
