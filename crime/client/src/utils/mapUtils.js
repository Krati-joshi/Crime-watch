// client/src/utils/mapUtils.js

// Function to initialize map options
export const mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
    streetViewControl: false,
  };
  
  // Function to format report data for map markers
  export const formatReportsForMap = (reports) => {
    return reports.map((report) => ({
      position: {
        lat: report.latitude,
        lng: report.longitude,
      },
      type: report.type,
      description: report.description,
    }));
  };
  
  // Function to calculate center of map based on reports
  export const calculateMapCenter = (reports) => {
    if (!reports.length) return { lat: 37.7749, lng: -122.4194 }; // Default to San Francisco
  
    const totalLat = reports.reduce((sum, report) => sum + report.latitude, 0);
    const totalLng = reports.reduce((sum, report) => sum + report.longitude, 0);
  
    return {
      lat: totalLat / reports.length,
      lng: totalLng / reports.length,
    };
  };
  
  // Function to generate heatmap data
  export const generateHeatmapData = (reports) => {
    return reports.map((report) => ({
      location: new google.maps.LatLng(report.latitude, report.longitude),
      weight: report.severity || 1,
    }));
  };
  