import { Offers } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offers;
}

function OffersList({ offers }: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">

      {offers.map((offer) => <OfferCard offer={offer} key={offer.id} />)}

    </div>
  );
}

export default OffersList;
