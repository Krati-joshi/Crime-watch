import React from 'react';
import { LoadScript, HeatmapLayer as GoogleHeatmapLayer } from '@react-google-maps/api';

const HeatmapLayer = () => {
  const data = [
    { lat: 37.7749, lng: -122.4194, weight: 2 },
    // Add more data points here
  ];

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDmuqHcvsJXc5QdToIkSWxrjLoLg5HbcXo" // Replace with your actual API key
      libraries={['visualization']}
    >
      <GoogleHeatmapLayer data={data} />
    </LoadScript>
  );
};

export default HeatmapLayer;
