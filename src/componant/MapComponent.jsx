import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj"; // Import coordinate transformation function

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(), // OpenStreetMap Layer
        }),
      ],
      view: new View({
        center: fromLonLat([77.1025, 28.7041]), // Convert coordinates to OpenLayers format
        zoom: 10, // Set appropriate zoom level
      }),
    });

    return () => map.setTarget(null); // Cleanup on unmount
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: "100%", height: "400px" }} // Set map size
    />
  );
};

export default MapComponent;
