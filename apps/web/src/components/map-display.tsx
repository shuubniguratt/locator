"use client";

import Map from "react-map-gl";

// import type { RouterOutputs } from "@acme/api";
import type { Location } from "@acme/types";

import "mapbox-gl/dist/mapbox-gl.css";

export function MapDisplay(props: { locations: Location[] }) {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  console.log(props.locations);
  return (
    <Map
      mapboxAccessToken={mapboxToken}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      initialViewState={{
        latitude: 53.9045185,
        longitude: 27.596258,
        zoom: 10,
      }}
      maxZoom={20}
      minZoom={3}
    ></Map>
  );
}
