import { Map, TileLayer } from 'leaflet';
import { MutableRefObject, useEffect, useState, useRef } from 'react';
import { Location } from '../types/offers';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, locationCity: Location): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: locationCity.latitude,
          lng: locationCity.longitude
        },
        zoom: locationCity.zoom
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);
      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, locationCity]);

  return map;
}

export default useMap;
