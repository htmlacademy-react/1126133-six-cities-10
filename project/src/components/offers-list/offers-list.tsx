import React, { useState } from 'react';
import { Offers } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offers;
};

function OffersList({ offers }: OffersListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  if (activeCard === undefined) {
    return <div />;
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onActive={() => setActiveCard(offer.id)}
          onInactive={() => setActiveCard(null)}
        />)
      )}
    </div>
  );
}

export default OffersList;
