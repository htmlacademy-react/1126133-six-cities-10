import { Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import { City, defaultCustomIcon } from '../../const';
import { Offers } from '../../types/offers';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { getActiveCityLocation } from '../../utils/utils';

type MapProps = {
  activeCity: City;
  offers: Offers;
};

function Map(props: MapProps): JSX.Element {
  const { offers, activeCity } = props;

  const activeCityLocation = getActiveCityLocation(activeCity, offers);

  const mapRef = useRef(null);
  const map = useMap(mapRef, activeCityLocation);

  const prevActiveCityRef = useRef<City>(activeCity);
  const prevMarkersRef = useRef<Marker[]>([]);

  useEffect(() => {

    if (prevActiveCityRef.current !== activeCity && map) {

      prevActiveCityRef.current = activeCity;

      prevMarkersRef.current.forEach((marker) => marker.remove());

      prevMarkersRef.current = [];

      map.setView(
        {
          lat: activeCityLocation.latitude,
          lng: activeCityLocation.longitude
        },
        activeCityLocation.zoom
      );
    }

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

        prevMarkersRef.current.push(marker);
      });
    }
  }, [map, offers, activeCity, activeCityLocation]);

  return (
    <section className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
