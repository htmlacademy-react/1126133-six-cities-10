import { Icon, Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import { IconParameter, UrlMarker } from '../../const';
import { City, Offers } from '../../types/offers';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';

type MapProps = {
  city: City;
  offers: Offers;
};

const defaultCustomIcon = new Icon({
  iconUrl: UrlMarker.Default,
  iconSize: [IconParameter.Size.x, IconParameter.Size.y],
  iconAnchor: [IconParameter.Anchor.x, IconParameter.Anchor.y],
});

function Map(props: MapProps): JSX.Element {
  const { city, offers } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers]);

  return (
    <section className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
